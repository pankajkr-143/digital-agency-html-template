# Theme System Documentation

## Overview

The application now includes a comprehensive light/dark theme system that allows users to switch between themes seamlessly. The theme preference is automatically saved to localStorage and persists across sessions.

## Features

- ✅ **Light/Dark Mode Toggle**: Easy-to-use toggle button in the navbar
- ✅ **Persistent Theme**: User preference saved to localStorage
- ✅ **System Theme Detection**: Automatically detects system preference on first visit
- ✅ **Smooth Transitions**: All theme changes include smooth CSS transitions
- ✅ **Theme-Aware Components**: All components adapt to the current theme
- ✅ **CSS Variables**: Uses CSS custom properties for consistent theming
- ✅ **Mobile Support**: Theme toggle available in both desktop and mobile navigation

## Implementation Details

### 1. Theme Context (`src/contexts/ThemeContext.tsx`)

The theme system is built around a React Context that provides:
- `theme`: Current theme ('light' | 'dark')
- `toggleTheme()`: Function to switch between themes
- `setTheme(theme)`: Function to set a specific theme

### 2. Theme Toggle Component (`src/components/ThemeToggle.tsx`)

A reusable toggle component with:
- Animated sun/moon icons
- Smooth rotation animations
- Multiple size options (sm, md, lg)
- Accessibility support
- Hover and tap animations

### 3. CSS Variables System (`src/index.css`)

The theme system uses CSS custom properties:

```css
/* Light theme */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1e293b;
  --accent-primary: #3b82f6;
  /* ... more variables */
}

/* Dark theme */
[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-primary: #00ff41;
  /* ... more variables */
}
```

### 4. Theme-Aware Utility Classes

The system provides utility classes that automatically adapt to the current theme:

- `.theme-bg-primary` - Primary background color
- `.theme-bg-secondary` - Secondary background color
- `.theme-text-primary` - Primary text color
- `.theme-text-secondary` - Secondary text color
- `.theme-accent-primary` - Primary accent color
- `.theme-border-primary` - Primary border color

## Usage

### Using the Theme Toggle

The theme toggle is automatically included in the navbar and can be used anywhere:

```tsx
import ThemeToggle from './components/ThemeToggle';

// Basic usage
<ThemeToggle />

// With custom size
<ThemeToggle size="lg" />

// With custom styling
<ThemeToggle className="custom-class" />
```

### Using Theme Context

Access the theme context in any component:

```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  );
};
```

### Using Theme-Aware Classes

Replace hardcoded colors with theme-aware classes:

```tsx
// Before
<div className="bg-neo-dark text-white">

// After
<div className="theme-bg-secondary theme-text-primary">
```

## Theme Colors

### Light Theme
- **Primary Background**: White (#ffffff)
- **Secondary Background**: Light gray (#f8fafc)
- **Primary Text**: Dark slate (#1e293b)
- **Accent Color**: Blue (#3b82f6)
- **Borders**: Light gray (#e2e8f0)

### Dark Theme
- **Primary Background**: Black (#0a0a0a)
- **Secondary Background**: Dark gray (#1a1a1a)
- **Primary Text**: White (#ffffff)
- **Accent Color**: Neon green (#00ff41)
- **Borders**: Dark gray (#374151)

## Customization

### Adding New Theme Variables

1. Add new variables to both light and dark theme sections in `src/index.css`
2. Create corresponding utility classes if needed
3. Use the variables in your components

### Creating Theme-Specific Styles

Use the theme classes for conditional styling:

```css
.light-theme .my-component {
  /* Light theme specific styles */
}

.dark-theme .my-component {
  /* Dark theme specific styles */
}
```

## Browser Support

- ✅ Modern browsers with CSS custom properties support
- ✅ Automatic fallback to dark theme for unsupported browsers
- ✅ System theme detection via `prefers-color-scheme`

## Performance

- ✅ Minimal JavaScript overhead
- ✅ CSS-only theme switching after initial load
- ✅ Smooth 60fps transitions
- ✅ No layout shifts during theme changes

## Accessibility

- ✅ High contrast ratios in both themes
- ✅ Proper ARIA labels on toggle button
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## Future Enhancements

Potential improvements for the theme system:

1. **Additional Themes**: Add more theme options (e.g., high contrast, sepia)
2. **Custom Theme Builder**: Allow users to create custom color schemes
3. **Theme Scheduling**: Automatic theme switching based on time of day
4. **Component-Level Themes**: Allow individual components to override theme
5. **Theme Animations**: More sophisticated transition animations

## Migration Guide

To migrate existing components to use the theme system:

1. Replace hardcoded colors with theme-aware classes
2. Update background colors: `bg-neo-dark` → `theme-bg-secondary`
3. Update text colors: `text-white` → `theme-text-primary`
4. Update accent colors: `text-neo-green-100` → `theme-accent-primary`
5. Test both light and dark themes

## Troubleshooting

### Theme Not Persisting
- Check if localStorage is available and not disabled
- Verify the ThemeProvider is wrapping your app

### Colors Not Updating
- Ensure you're using theme-aware classes instead of hardcoded colors
- Check if CSS custom properties are supported in your browser

### Toggle Not Working
- Verify the ThemeToggle component is imported correctly
- Check browser console for any JavaScript errors
