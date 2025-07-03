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

// Serve markdown files by path
app.use('/markdown', (req, res, next) => {
  // Skip if this is the SSE endpoint
  if (req.path === '/events') {
    return next();
  }
  
  // Extract the path after /markdown/
  const requestedPath = req.path.substring(1); // Remove leading slash
  const filePath = path.join(__dirname, '..', requestedPath);
  
  // Security check: ensure the path is within the workspace
  const workspaceRoot = path.resolve(__dirname, '..');
  const resolvedPath = path.resolve(filePath);
  
  if (!resolvedPath.startsWith(workspaceRoot)) {
    return res.status(403).send('# Forbidden\n\nAccess denied to files outside workspace.');
  }
  
  if (fs.existsSync(filePath) && filePath.endsWith('.md')) {
    const content = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(content);
  } else {
    res.status(404).send(`# Not Found\n\nMarkdown file not found: ${requestedPath}`);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Markdown server running at http://localhost:${PORT}`);
  console.log(`📁 Serving all .md files from workspace`);
  console.log(`🔄 Live reload enabled via SSE at: http://localhost:${PORT}/events`);
});

// Watch for file changes in the entire workspace
const workspaceRoot = path.join(__dirname, '..');
const watcher = chokidar.watch(workspaceRoot, {
  ignored: [
    /node_modules/, // ignore node_modules
    /\.git/, // ignore git files
    /dist/, // ignore dist folders
    /build/, // ignore build folders
    /coverage/, // ignore coverage folders
    /\.DS_Store/, // ignore macOS files
    /\.next/, // ignore Next.js build
    /\.expo/, // ignore Expo build
    /\.turbo/, // ignore Turbo build
    /\.cache/, // ignore cache folders
    /\.vscode/, // ignore VS Code files
    /\.idea/, // ignore IntelliJ files
  ],
  persistent: true
});

// Send SSE event to all connected clients when markdown files change
function notifyClients(event, filePath) {
  // Only notify for .md files
  if (!filePath.endsWith('.md')) {
    return;
  }

  const relativePath = path.relative(workspaceRoot, filePath);
  
  const message = JSON.stringify({
    type: 'file-changed',
    path: relativePath,
    timestamp: new Date().toISOString()
  });

  clients.forEach(client => {
    client.write(`data: ${message}\n\n`);
  });

  console.log(`📝 Markdown changed: ${relativePath} (notifying ${clients.size} clients)`);
}

watcher
  .on('add', path => notifyClients('add', path))
  .on('change', path => notifyClients('change', path))
  .on('unlink', path => notifyClients('unlink', path))
  .on('error', error => console.error('Watcher error:', error))
  .on('ready', () => {
    console.log(`👀 Watching for changes in: ${workspaceRoot}`);
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down markdown server...');
  watcher.close();
  process.exit(0);
}); 