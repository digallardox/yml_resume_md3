.PHONY: resume cover-letter start help

# Default target - show help
help:
	@echo "Available commands:"
	@echo "  make resume        - Open resume in browser with live reload"
	@echo "  make cover-letter  - Open cover letter in browser with live reload"
	@echo "  make start         - Start server at project root"
	@echo "  make install       - Install dependencies"

# Open resume
resume:
	npm run resume

# Open cover letter
cover-letter:
	npm run cover-letter

# Start server at root
start:
	npm start

# Install dependencies
install:
	npm install
