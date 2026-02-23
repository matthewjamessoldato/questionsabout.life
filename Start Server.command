#!/bin/bash
# ── Questions About Life – Dev Server Launcher ──
# Double-click this file to start the app.
# Vite will automatically pick an open port and open your browser.

cd "$(dirname "$0")/webapp"

# Ensure npm is on PATH (Homebrew / nvm / default)
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.nvm/versions/node/$(ls "$HOME/.nvm/versions/node" 2>/dev/null | tail -1)/bin:$PATH"

echo "🚀  Starting Questions About Life…"
echo "    Vite will open your browser automatically."
echo "    Press Ctrl+C in this window to stop the server."
echo ""

npm run dev
