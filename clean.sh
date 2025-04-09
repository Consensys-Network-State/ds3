#!/bin/bash

# Array of directories to clean
directories=(
    "node_modules"
    "dist"
    ".vite"
    ".next"
    ".expo"
)

# Print what we're about to remove
echo "🧹 Cleaning project..."

# Loop through each directory type and remove them
for dir in "${directories[@]}"; do
    found=$(find . -name "$dir" -type d)
    if [ ! -z "$found" ]; then
        echo "🗑️  Removing $dir directories..."
        rm -rf $(find . -name "$dir" -type d)
    fi
done

# Clean pnpm store
echo "🧹 Cleaning pnpm store..."
pnpm store prune

echo "✨ Clean complete!"