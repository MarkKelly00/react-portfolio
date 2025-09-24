# Style and Code Conventions

## Typography System
- **Heading Font**: R Spectr (variable weight 400-800)
- **Body Font**: Proxima Nova (variable weight 300-700)
- **Heading Classes**: `heading-xl`, `heading-lg` with tracking-wide
- **Font Families**: `font-heading`, `font-body` in Tailwind

## Color Palette
- **Background**: codGray (#151213)
- **Text**: doubleSpanishWhite (#e9d5bf)
- **Accent**: fuelYellow (#f09e2c)
- **Secondary**: cello (#20315b)
- **Muted**: osloGray (#8b8c8d)

## Component Patterns
- Use Framer Motion for animations with `initial`, `whileInView`, `viewport: { once: true }`
- Apply `container-grid` class for consistent container layout
- Use shadow-card for elevation effects
- Button styles: `btn-primary`, `btn-secondary`

## Code Style
- TypeScript with strict typing
- Named exports for components
- Props destructuring in function parameters
- Consistent use of className over style props
- Framer Motion variants for complex animations

## File Organization
- Components in `/components` directory
- Page components use default exports
- Utility components use named exports
- Styles organized with Tailwind utilities
- Custom CSS only when necessary