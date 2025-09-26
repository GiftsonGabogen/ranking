/**
 * Design Tokens System
 * 
 * This file defines the core design tokens for colors, spacing, typography,
 * and other design system values used throughout the application.
 */

// Color Tokens
export const colors = {
  // Primary Brand Colors - Perceptually optimized chroma scaling
  primary: {
    50: 'oklch(0.985 0.015 264.376)',
    100: 'oklch(0.97 0.03 264.376)',
    200: 'oklch(0.922 0.05 264.376)',
    300: 'oklch(0.85 0.08 264.376)',
    400: 'oklch(0.708 0.15 264.376)',
    500: 'oklch(0.556 0.243 264.376)', // Default primary - peak chroma
    600: 'oklch(0.488 0.22 264.376)',
    700: 'oklch(0.398 0.18 264.376)',
    800: 'oklch(0.269 0.12 264.376)',
    900: 'oklch(0.205 0.08 264.376)',
    950: 'oklch(0.145 0.04 264.376)',
  },

  // Secondary Colors - Perceptually optimized chroma scaling
  secondary: {
    50: 'oklch(0.985 0.01 162.48)',
    100: 'oklch(0.97 0.025 162.48)',
    200: 'oklch(0.922 0.04 162.48)',
    300: 'oklch(0.85 0.08 162.48)',
    400: 'oklch(0.708 0.12 162.48)',
    500: 'oklch(0.696 0.17 162.48)', // Default secondary - peak chroma
    600: 'oklch(0.6 0.155 162.48)',
    700: 'oklch(0.488 0.13 162.48)',
    800: 'oklch(0.369 0.1 162.48)',
    900: 'oklch(0.269 0.065 162.48)',
    950: 'oklch(0.205 0.035 162.48)',
  },

  // Success Colors - Perceptually optimized chroma scaling
  success: {
    50: 'oklch(0.97 0.015 142)',
    100: 'oklch(0.95 0.03 142)',
    200: 'oklch(0.9 0.05 142)',
    300: 'oklch(0.828 0.08 142)',
    400: 'oklch(0.769 0.15 142)',
    500: 'oklch(0.646 0.222 142)', // Default success - peak chroma
    600: 'oklch(0.556 0.205 142)',
    700: 'oklch(0.456 0.18 142)',
    800: 'oklch(0.369 0.135 142)',
    900: 'oklch(0.269 0.09 142)',
    950: 'oklch(0.205 0.05 142)',
  },

  // Warning Colors - Perceptually optimized chroma scaling
  warning: {
    50: 'oklch(0.985 0.015 84.429)',
    100: 'oklch(0.97 0.03 84.429)',
    200: 'oklch(0.922 0.05 84.429)',
    300: 'oklch(0.85 0.08 84.429)',
    400: 'oklch(0.828 0.12 84.429)',
    500: 'oklch(0.769 0.188 70.08)', // Default warning - peak chroma
    600: 'oklch(0.708 0.17 70.08)',
    700: 'oklch(0.6 0.145 70.08)',
    800: 'oklch(0.488 0.115 70.08)',
    900: 'oklch(0.369 0.08 70.08)',
    950: 'oklch(0.269 0.05 70.08)',
  },

  // Error/Destructive Colors - Perceptually optimized chroma scaling
  error: {
    50: 'oklch(0.985 0.015 27.325)',
    100: 'oklch(0.97 0.03 27.325)',
    200: 'oklch(0.922 0.05 27.325)',
    300: 'oklch(0.85 0.08 27.325)',
    400: 'oklch(0.704 0.15 27.325)',
    500: 'oklch(0.577 0.245 27.325)', // Default error - peak chroma
    600: 'oklch(0.488 0.22 27.325)',
    700: 'oklch(0.398 0.185 27.325)',
    800: 'oklch(0.309 0.14 27.325)',
    900: 'oklch(0.245 0.09 27.325)',
    950: 'oklch(0.185 0.05 27.325)',
  },

  // Neutral/Gray Colors - Include hue for consistency (using primary hue)
  neutral: {
    0: 'oklch(1 0 264)',        // Pure white with hue
    50: 'oklch(0.985 0 264)',
    100: 'oklch(0.97 0 264)',
    200: 'oklch(0.922 0 264)',
    300: 'oklch(0.85 0 264)',
    400: 'oklch(0.708 0 264)',
    500: 'oklch(0.556 0 264)',   // Default neutral
    600: 'oklch(0.488 0 264)',
    700: 'oklch(0.398 0 264)',
    800: 'oklch(0.309 0 264)',
    900: 'oklch(0.205 0 264)',
    950: 'oklch(0.145 0 264)',
    1000: 'oklch(0 0 264)',     // Pure black with hue
  },

  // Chart/Data Visualization Colors
  chart: {
    1: 'oklch(0.646 0.222 41.116)',
    2: 'oklch(0.6 0.118 184.704)',
    3: 'oklch(0.398 0.07 227.392)',
    4: 'oklch(0.828 0.189 84.429)',
    5: 'oklch(0.769 0.188 70.08)',
  },
} as const;

// Semantic Color Tokens - Context-aware colors for light/dark modes
export const semanticColors = {
  // Background colors
  background: {
    primary: {
      light: colors.neutral[0],    // Pure white
      dark: colors.neutral[950],   // Very dark
    },
    secondary: {
      light: colors.neutral[50],   // Off-white
      dark: colors.neutral[900],   // Dark gray
    },
    tertiary: {
      light: colors.neutral[100],  // Light gray
      dark: colors.neutral[800],   // Medium-dark gray
    },
  },
  
  // Surface colors (cards, modals, etc.)
  surface: {
    primary: {
      light: colors.neutral[0],
      dark: colors.neutral[950],
    },
    secondary: {
      light: colors.neutral[50],
      dark: colors.neutral[900],
    },
    elevated: {
      light: colors.neutral[0],
      dark: colors.neutral[800],
    },
  },
  
  // Text colors
  text: {
    primary: {
      light: colors.neutral[950],  // Near black
      dark: colors.neutral[50],    // Near white
    },
    secondary: {
      light: colors.neutral[600],  // Medium gray
      dark: colors.neutral[400],   // Light gray
    },
    tertiary: {
      light: colors.neutral[500],  // Gray
      dark: colors.neutral[500],   // Same gray works in both modes
    },
    inverse: {
      light: colors.neutral[50],   // Light text for dark backgrounds
      dark: colors.neutral[950],   // Dark text for light backgrounds
    },
  },
  
  // Border colors
  border: {
    primary: {
      light: colors.neutral[200],
      dark: colors.neutral[800],
    },
    secondary: {
      light: colors.neutral[100],
      dark: colors.neutral[700],
    },
    focus: {
      light: colors.primary[500],
      dark: colors.primary[400],
    },
  },
  
  // Interactive colors
  interactive: {
    primary: {
      light: colors.primary[600],
      dark: colors.primary[500],
    },
    secondary: {
      light: colors.secondary[600],
      dark: colors.secondary[500],
    },
    hover: {
      light: colors.primary[700],
      dark: colors.primary[400],
    },
  },
} as const;

// Spacing Tokens (in rem units) - Using string keys for clarity
export const spacing = {
  '0': '0',
  'px': '1px',
  '0.5': '0.125rem',    // 2px
  '1': '0.25rem',       // 4px
  '1.5': '0.375rem',    // 6px
  '2': '0.5rem',        // 8px
  '2.5': '0.625rem',    // 10px
  '3': '0.75rem',       // 12px
  '3.5': '0.875rem',    // 14px
  '4': '1rem',          // 16px
  '5': '1.25rem',       // 20px
  '6': '1.5rem',        // 24px
  '7': '1.75rem',       // 28px
  '8': '2rem',          // 32px
  '9': '2.25rem',       // 36px
  '10': '2.5rem',       // 40px
  '11': '2.75rem',      // 44px
  '12': '3rem',         // 48px
  '14': '3.5rem',       // 56px
  '16': '4rem',         // 64px
  '20': '5rem',         // 80px
  '24': '6rem',         // 96px
  '28': '7rem',         // 112px
  '32': '8rem',         // 128px
  '36': '9rem',         // 144px
  '40': '10rem',        // 160px
  '44': '11rem',        // 176px
  '48': '12rem',        // 192px
  '52': '13rem',        // 208px
  '56': '14rem',        // 224px
  '60': '15rem',        // 240px
  '64': '16rem',        // 256px
  '72': '18rem',        // 288px
  '80': '20rem',        // 320px
  '96': '24rem',        // 384px
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans, ui-sans-serif, system-ui, sans-serif)',
    mono: 'var(--font-geist-mono, ui-monospace, "SFMono-Regular", "Consolas", monospace)',
    display: 'var(--font-geist-sans, ui-sans-serif, system-ui, sans-serif)',
  },
  
  // Separate fontSize and lineHeight for better Tailwind compatibility
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// Border Radius Tokens
export const borderRadius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  md: 'calc(var(--radius) - 2px)',
  lg: 'var(--radius)',
  xl: 'calc(var(--radius) + 4px)',
  '2xl': 'calc(var(--radius) + 8px)',
  '3xl': 'calc(var(--radius) + 12px)',
  full: '9999px',
} as const;

// Shadow Tokens
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// Animation Tokens
export const animation = {
  // Duration
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Easing/Timing Functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeInSine: 'cubic-bezier(0.12, 0, 0.39, 0)',
    easeOutSine: 'cubic-bezier(0.61, 1, 0.88, 1)',
    easeInOutSine: 'cubic-bezier(0.37, 0, 0.63, 1)',
    easeInQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
    easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
    easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)',
    easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
    easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
    easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
} as const;

// Legacy duration export for backward compatibility
export const duration = animation.duration;

// Z-Index Tokens
export const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1050',
  popover: '1060',
  tooltip: '1070',
  toast: '1080',
} as const;

// Breakpoint Tokens
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component-specific Tokens
export const components = {
  input: {
    height: {
      xs: spacing['7'],      // 1.75rem = 28px
      sm: spacing['8'],      // 2rem = 32px
      default: spacing['10'], // 2.5rem = 40px
      lg: spacing['12'],     // 3rem = 48px
      xl: spacing['14'],     // 3.5rem = 56px
    },
    padding: {
      xs: { x: spacing['2.5'], y: spacing['1'] },
      sm: { x: spacing['3'], y: spacing['1.5'] },
      default: { x: spacing['3.5'], y: spacing['2'] },
      lg: { x: spacing['4'], y: spacing['3'] },
      xl: { x: spacing['5'], y: spacing['4'] },
    },
    paddingWithIcon: {
      xs: { left: spacing['7'], right: spacing['2.5'] },
      sm: { left: spacing['8'], right: spacing['3'] },
      default: { left: spacing['10'], right: spacing['3.5'] },
      lg: { left: spacing['11'], right: spacing['4'] },
      xl: { left: spacing['14'], right: spacing['5'] },
    },
    iconSize: {
      xs: spacing['3'],      // 0.75rem = 12px
      sm: spacing['3.5'],    // 0.875rem = 14px
      default: spacing['4'],  // 1rem = 16px
      lg: spacing['5'],      // 1.25rem = 20px
      xl: spacing['6'],      // 1.5rem = 24px
    },
    iconOffset: {
      xs: spacing['2'],      // 0.5rem = 8px
      sm: spacing['2.5'],    // 0.625rem = 10px
      default: spacing['3'],  // 0.75rem = 12px
      lg: spacing['3.5'],    // 0.875rem = 14px
      xl: spacing['4'],      // 1rem = 16px
    },
    fontSize: {
      xs: typography.fontSize.xs,
      sm: typography.fontSize.sm,
      default: typography.fontSize.sm,
      lg: typography.fontSize.base,
      xl: typography.fontSize.lg,
    },
  },
  button: {
    height: {
      xs: spacing['7'],      // 1.75rem = 28px
      sm: spacing['8'],      // 2rem = 32px
      default: spacing['10'], // 2.5rem = 40px
      lg: spacing['12'],     // 3rem = 48px
      xl: spacing['14'],     // 3.5rem = 56px
    },
    padding: {
      xs: { x: spacing['3'], y: spacing['1.5'] },
      sm: { x: spacing['4'], y: spacing['2'] },
      default: { x: spacing['5'], y: spacing['2.5'] },
      lg: { x: spacing['7'], y: spacing['3'] },
      xl: { x: spacing['8'], y: spacing['4'] },
    },
    iconSize: {
      xs: spacing['7'],
      sm: spacing['8'],
      default: spacing['10'],
      lg: spacing['12'],
      xl: spacing['14'],
    },
    gap: {
      xs: spacing['1'],
      sm: spacing['1.5'],
      default: spacing['2'],
      lg: spacing['2'],
      xl: spacing['3'],
    },
  },
  card: {
    padding: {
      xs: spacing['3'],      // 0.75rem = 12px
      sm: spacing['4'],      // 1rem = 16px
      default: spacing['6'],  // 1.5rem = 24px
      lg: spacing['8'],      // 2rem = 32px
      xl: spacing['10'],     // 2.5rem = 40px
    },
    gap: {
      xs: spacing['2'],      // 0.5rem = 8px
      sm: spacing['3'],      // 0.75rem = 12px
      default: spacing['4'],  // 1rem = 16px
      lg: spacing['5'],      // 1.25rem = 20px
      xl: spacing['6'],      // 1.5rem = 24px
    },
    borderRadius: {
      xs: borderRadius.sm,
      sm: borderRadius.md,
      default: borderRadius.lg,
      lg: borderRadius.xl,
      xl: borderRadius['2xl'],
    },
    maxWidth: {
      xs: '20rem',     // 320px
      sm: '24rem',     // 384px
      default: '28rem', // 448px
      lg: '32rem',     // 512px
      xl: '36rem',     // 576px
      full: '100%',
    },
  },
  modal: {
    padding: {
      xs: spacing['4'],      // 1rem = 16px
      sm: spacing['5'],      // 1.25rem = 20px
      default: spacing['6'],  // 1.5rem = 24px
      lg: spacing['8'],      // 2rem = 32px
      xl: spacing['10'],     // 2.5rem = 40px
    },
    gap: {
      xs: spacing['3'],      // 0.75rem = 12px
      sm: spacing['4'],      // 1rem = 16px
      default: spacing['4'],  // 1rem = 16px
      lg: spacing['5'],      // 1.25rem = 20px
      xl: spacing['6'],      // 1.5rem = 24px
    },
    maxWidth: {
      xs: '20rem',     // 320px
      sm: '28rem',     // 448px
      default: '32rem', // 512px
      lg: '36rem',     // 576px
      xl: '42rem',     // 672px
      '2xl': '48rem',  // 768px
      '3xl': '56rem',  // 896px
      full: '95vw',
    },
    borderRadius: {
      xs: borderRadius.sm,
      sm: borderRadius.md,
      default: borderRadius.lg,
      lg: borderRadius.xl,
      xl: borderRadius['2xl'],
    },
  },
} as const;

// Design Token Types
export type ColorScale = typeof colors.primary;
export type SpacingToken = keyof typeof spacing;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
export type DurationToken = keyof typeof duration;
export type ZIndexToken = keyof typeof zIndex;
export type BreakpointToken = keyof typeof breakpoints;