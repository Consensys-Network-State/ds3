#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Store connected SSE clients
const clients = new Set();

// SSE endpoint for live reload
app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });

  // Send initial connection message
  res.write('data: {"type": "connected"}\n\n');

  // Add client to set
  clients.add(res);

  // Remove client when connection closes
  req.on('close', () => {
    clients.delete(res);
  });
});

// Serve markdown files
app.get('/markdown/:component.md', (req, res) => {
  const component = req.params.component;
  const filePath = path.join(__dirname, '../packages/ui/src/components', component, 'README.md');
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(content);
  } else {
    res.status(404).send(`# Not Found\n\nREADME not found for component: ${component}`);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Markdown server running at http://localhost:${PORT}`);
  console.log(`📁 Serving README files from: packages/ui/src/components/*/README.md`);
  console.log(`🔄 Live reload enabled via SSE at: http://localhost:${PORT}/events`);
});

// Watch for file changes
const watchPath = path.join(__dirname, '../packages/ui/src/components');
const watcher = chokidar.watch(watchPath, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// Send SSE event to all connected clients when files change
function notifyClients(event, filePath) {
  const relativePath = path.relative(watchPath, filePath);
  const component = relativePath.split(path.sep)[0];
  
  const message = JSON.stringify({
    type: 'file-changed',
    component,
    file: relativePath,
    timestamp: new Date().toISOString()
  });

  clients.forEach(client => {
    client.write(`data: ${message}\n\n`);
  });

  console.log(`📝 File changed: ${relativePath} (notifying ${clients.size} clients)`);
}

watcher
  .on('add', path => notifyClients('add', path))
  .on('change', path => notifyClients('change', path))
  .on('unlink', path => notifyClients('unlink', path))
  .on('error', error => console.error('Watcher error:', error))
  .on('ready', () => {
    console.log(`👀 Watching for changes in: ${watchPath}`);
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down markdown server...');
  watcher.close();
  process.exit(0);
}); 