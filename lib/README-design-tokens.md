# Design Tokens System

This design token system provides a comprehensive, type-safe approach to managing design consistency across the application.

## Quick Start

```tsx
import { Button } from '@/components/ui/button';
import { cn, getColor, getSpacing } from '@/lib/design-token-utils';

// Using design tokens in components
<Button variant="primary" size="lg">
  Primary Button
</Button>

// Using utility functions
const primaryColor = getColor('primary', 500);
const spacing = getSpacing(4);
```

## Files Overview

### Core Files
- `lib/design-tokens.ts` - Core design token definitions
- `lib/design-token-utils.ts` - Utility functions and helpers
- `lib/types/design-tokens.ts` - TypeScript types for type safety
- `tailwind.config.ts` - Tailwind configuration with design tokens
- `app/globals.css` - CSS variables and base styles

### Components
- `components/ui/button.tsx` - Updated button component using design tokens
- `components/design-tokens-showcase.tsx` - Showcase of all design tokens

### Demo
- `app/design-tokens/page.tsx` - Demo page showing all design tokens

## Design Token Categories

### Colors
- **Primary**: Main brand colors (primary-50 to primary-950)
- **Secondary**: Secondary brand colors (secondary-50 to secondary-950)
- **Success**: Success states (success-50 to success-950)
- **Warning**: Warning states (warning-50 to warning-950)
- **Error**: Error states (error-50 to error-950)
- **Neutral**: Grayscale colors (neutral-0 to neutral-1000)
- **Chart**: Data visualization colors (chart-1 to chart-5)

```tsx
// Usage examples
<div className="bg-primary-500 text-white">Primary background</div>
<div className="text-success-600">Success text</div>
<div className="border-error-400">Error border</div>
```

### Spacing
Comprehensive spacing scale from 0 to 96rem:
```tsx
<div className="p-4">Padding using spacing-4</div>
<div className="m-8">Margin using spacing-8</div>
<div className="gap-6">Gap using spacing-6</div>
```

### Typography
- **Font Families**: Sans, mono, display
- **Font Sizes**: xs, sm, base, lg, xl, 2xl-9xl
- **Font Weights**: thin to black
- **Line Heights**: none, tight, snug, normal, relaxed, loose
- **Letter Spacing**: tighter to widest

```tsx
<h1 className="text-4xl font-bold">Large heading</h1>
<p className="text-base font-normal">Body text</p>
<code className="font-mono text-sm">Code text</code>
```

### Border Radius
- **Tokens**: none, sm, md, lg, xl, 2xl, 3xl, full
```tsx
<div className="rounded-lg">Rounded corners</div>
<button className="rounded-full">Pill button</button>
```

### Shadows
- **Tokens**: sm, default, md, lg, xl, 2xl, inner, none
```tsx
<div className="shadow-lg">Large shadow</div>
<div className="shadow-inner">Inner shadow</div>
```

## Component Integration

### Button Component
The button component now uses design tokens extensively:

```tsx
// All variants use design token colors
<Button variant="default">Default (Primary colors)</Button>
<Button variant="success">Success colors</Button>
<Button variant="warning">Warning colors</Button>
<Button variant="destructive">Error colors</Button>

// All sizes use design token spacing
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Icon button sizes
<Button size="icon-sm">🔧</Button>
<Button size="icon">⚙️</Button>
<Button size="icon-lg">🎯</Button>
```

### Available Button Variants
- `default` - Primary brand colors
- `secondary` - Secondary brand colors  
- `success` - Success/positive actions
- `warning` - Caution/warning actions
- `destructive` - Destructive/delete actions
- `outline` - Outlined style
- `ghost` - Minimal style
- `link` - Link style
- `glass` - Glass morphism effect
- `gradient` - Multi-color gradient
- `shine` - Animated shine effect

## Utility Functions

### Color Functions
```tsx
import { getColor } from '@/lib/design-token-utils';

const primaryColor = getColor('primary', 500);
const successColor = getColor('success', 600);
```

### Spacing Functions
```tsx
import { getSpacing } from '@/lib/design-token-utils';

const spacing4 = getSpacing(4); // Returns '1rem'
const spacing8 = getSpacing(8); // Returns '2rem'
```

### Class Name Utilities
```tsx
import { cn, colorClasses, spacingClasses } from '@/lib/design-token-utils';

// Combine class names safely
const classes = cn('base-class', 'conditional-class', {
  'active-class': isActive
});

// Pre-built color classes
<div className={colorClasses.bg.primary[500]}>Primary background</div>
<span className={colorClasses.text.success[600]}>Success text</span>

// Pre-built spacing classes
<div className={spacingClasses.padding.md}>Medium padding</div>
<div className={spacingClasses.margin.lg}>Large margin</div>
```

### Responsive Utilities
```tsx
import { responsive } from '@/lib/design-token-utils';

const responsiveClasses = responsive({
  xs: 'text-sm',
  md: 'text-base', 
  lg: 'text-lg'
});
// Results in: 'text-sm md:text-base lg:text-lg'
```

## Type Safety

All design tokens have full TypeScript support:

```tsx
import type { 
  ColorVariant, 
  ColorIntensity, 
  SpacingToken,
  FontSizeToken 
} from '@/lib/types/design-tokens';

// Type-safe component props
interface ButtonProps {
  variant: ColorVariant; // 'primary' | 'secondary' | 'success' | etc.
  size: SpacingToken;    // 0 | 'px' | 0.5 | 1 | 1.5 | etc.
}
```

## Best Practices

1. **Always use design tokens instead of arbitrary values**
   ```tsx
   // ✅ Good
   <div className="text-primary-600 p-4 rounded-lg">

   // ❌ Avoid
   <div className="text-[#3b82f6] p-[16px] rounded-[8px]">
   ```

2. **Use semantic color variants for actions**
   ```tsx
   // ✅ Good
   <Button variant="success">Save</Button>
   <Button variant="destructive">Delete</Button>
   
   // ❌ Avoid
   <Button className="bg-green-500">Save</Button>
   ```

3. **Leverage the utility functions for dynamic styling**
   ```tsx
   // ✅ Good
   const buttonColor = getColor('primary', isActive ? 600 : 400);
   
   // ❌ Avoid
   const buttonColor = isActive ? '#dc2626' : '#f87171';
   ```

4. **Use the cn() utility for conditional classes**
   ```tsx
   // ✅ Good
   <Button className={cn('base-button', { 'active': isActive })}>
   
   // ❌ Avoid
   <Button className={`base-button ${isActive ? 'active' : ''}`}>
   ```

## Demo

Visit `/design-tokens` in your application to see all design tokens in action with interactive examples.

## Extending the System

To add new design tokens:

1. Add them to `lib/design-tokens.ts`
2. Update the Tailwind config in `tailwind.config.ts`
3. Add corresponding types in `lib/types/design-tokens.ts`
4. Update utility functions in `lib/design-token-utils.ts` if needed
5. Test with the showcase component

The design token system is designed to be scalable and maintainable as your application grows.