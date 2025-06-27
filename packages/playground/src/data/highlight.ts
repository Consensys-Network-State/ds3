export const highlightExamples = {
  "basic": {
    name: "Basic",
    jsx: `<Highlight 
  code="const greeting = 'Hello, World!';"
  language="javascript"
/>`
  },
  "typescript": {
    name: "TypeScript",
    jsx: `<Highlight 
  code={\`interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
};\`}
  language="typescript"
/>`
  },
  "jsx": {
    name: "JSX",
    jsx: `<Highlight 
  code={\`import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;\`}
  language="jsx"
/>`
  },
  "css": {
    name: "CSS",
    jsx: `<Highlight 
  code={\`.button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #2563eb;
}

.button:focus {
  outline: 2px solid #1d4ed8;
  outline-offset: 2px;
}\`}
  language="css"
/>`
  },
  "json": {
    name: "JSON",
    jsx: `<Highlight 
  code={\`{
  "name": "Design System",
  "version": "1.0.0",
  "description": "A comprehensive design system",
  "components": {
    "button": {
      "variants": ["solid", "outline", "ghost"],
      "sizes": ["sm", "md", "lg"],
      "colors": ["primary", "secondary", "success"]
    },
    "input": {
      "types": ["text", "email", "password"],
      "states": ["default", "focus", "error"]
    }
  },
  "tokens": {
    "colors": {
      "primary": "#3b82f6",
      "secondary": "#6b7280",
      "success": "#10b981"
    },
    "spacing": {
      "xs": "0.25rem",
      "sm": "0.5rem",
      "md": "1rem",
      "lg": "1.5rem"
    }
  }
}\`}
  language="json"
/>`
  },
  "bash": {
    name: "Bash",
    jsx: `<Highlight 
  code={\`#!/bin/bash

# Install dependencies
npm install @consensys/ds3

# Build the project
npm run build

# Start development server
npm run dev

# Run tests
npm test

# Deploy to production
npm run deploy\`}
  language="bash"
/>`
  },
  "python": {
    name: "Python",
    jsx: `<Highlight 
  code={\`from typing import List, Optional
from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str
    email: str
    is_active: bool = True

class UserService:
    def __init__(self):
        self.users: List[User] = []
    
    def create_user(self, name: str, email: str) -> User:
        user = User(
            id=len(self.users) + 1,
            name=name,
            email=email
        )
        self.users.append(user)
        return user
    
    def get_user_by_id(self, user_id: int) -> Optional[User]:
        return next((user for user in self.users if user.id == user_id), None)
    
    def get_active_users(self) -> List[User]:
        return [user for user in self.users if user.is_active]

# Usage
service = UserService()
user = service.create_user("John Doe", "john@example.com")
print(f"Created user: {user.name}")\`}
  language="python"
/>`
  },
  "html": {
    name: "HTML",
    jsx: `<Highlight 
  code={\`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design System Documentation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="#components">Components</a></li>
                <li><a href="#tokens">Tokens</a></li>
                <li><a href="#guidelines">Guidelines</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="main">
        <section id="components">
            <h1>Design System Components</h1>
            <p>Explore our comprehensive component library.</p>
        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Design System. All rights reserved.</p>
    </footer>
</body>
</html>\`}
  language="html"
/>`
  },
  "mixed": {
    name: "Mixed Examples",
    jsx: `<View className="space-y-6">
  <View>
    <Text className="text-h3 mb-2">JavaScript Function</Text>
    <Highlight 
      code={\`function calculateTotal(items, taxRate = 0.1) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}\`}
      language="javascript"
    />
  </View>
  
  <View>
    <Text className="text-h3 mb-2">React Component</Text>
    <Highlight 
      code={\`const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>\${price}</p>
    </div>
  );
};\`}
      language="jsx"
    />
  </View>
  
  <View>
    <Text className="text-h3 mb-2">CSS Styling</Text>
    <Highlight 
      code={\`.product-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  transition: box-shadow 0.2s;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}\`}
      language="css"
    />
  </View>
</View>`
  }
}; 