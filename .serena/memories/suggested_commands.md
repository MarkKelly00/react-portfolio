# Suggested Commands for Development

## Development Commands
- `npm run dev` - Start local development server on port 3000
- `npm run build` - Create production build
- `npm start` - Start production server on port 3000
- `npm run lint` - Run Next.js linting

## System Commands (macOS)
- `git status` - Check git status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `ls -la` - List files with details
- `cd mkp-site` - Navigate to project directory
- `grep -r "pattern" .` - Search for patterns in files
- `find . -name "*.tsx"` - Find TypeScript React files

## Development Workflow
1. Make changes in components or pages
2. Test locally with `npm run dev`
3. Build and test production with `npm run build && npm start`
4. Commit changes with descriptive messages
5. Deploy when ready

## File Structure Navigation
- Main pages: `mkp-site/app/`
- Components: `mkp-site/components/`
- Styling: `mkp-site/app/globals.css` and `mkp-site/tailwind.config.js`
- Public assets: `mkp-site/public/`