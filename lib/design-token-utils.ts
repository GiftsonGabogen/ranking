/**
 * Design Token Utilities
 * 
 * Helper functions and utilities for working with design tokens.
 * Provides type-safe access to design tokens and common token operations.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  colors, 
  spacing, 
  typography, 
  borderRadius, 
  shadows, 
  duration, 
  zIndex, 
  breakpoints 
} from './design-tokens';
import type {
  SpacingToken,
  FontSizeToken,
  BorderRadiusToken,
  ShadowToken,
  ColorVariant,
  ColorIntensity,
  PrimaryColorToken,
} from './types/design-tokens';

/**
 * Utility function to merge class names with tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a spacing value by token
 */
export function getSpacing(token: SpacingToken): string {
  return spacing[token];
}

/**
 * Get a font size configuration by token
 */
export function getFontSize(token: FontSizeToken) {
  return typography.fontSize[token];
}

/**
 * Get a border radius value by token
 */
export function getBorderRadius(token: BorderRadiusToken): string {
  return borderRadius[token];
}

/**
 * Get a shadow value by token
 */
export function getShadow(token: ShadowToken): string {
  return shadows[token];
}

/**
 * Get a color value by variant and intensity
 * @throws {Error} When invalid color variant or intensity is provided
 */
export function getColor(variant: ColorVariant, intensity: ColorIntensity): string {
  // Validate inputs
  if (!variant || !intensity) {
    throw new Error(`Invalid color parameters: variant="${variant}", intensity="${intensity}"`);
  }

  switch (variant) {
    case 'primary':
      if (!(intensity in colors.primary)) {
        throw new Error(`Invalid primary color intensity: ${intensity}. Available: ${Object.keys(colors.primary).join(', ')}`);
      }
      return colors.primary[intensity as PrimaryColorToken];
      
    case 'secondary':
      if (!(intensity in colors.secondary)) {
        throw new Error(`Invalid secondary color intensity: ${intensity}. Available: ${Object.keys(colors.secondary).join(', ')}`);
      }
      return colors.secondary[intensity as PrimaryColorToken];
      
    case 'success':
      if (!(intensity in colors.success)) {
        throw new Error(`Invalid success color intensity: ${intensity}. Available: ${Object.keys(colors.success).join(', ')}`);
      }
      return colors.success[intensity as PrimaryColorToken];
      
    case 'warning':
      if (!(intensity in colors.warning)) {
        throw new Error(`Invalid warning color intensity: ${intensity}. Available: ${Object.keys(colors.warning).join(', ')}`);
      }
      return colors.warning[intensity as PrimaryColorToken];
      
    case 'error':
      if (!(intensity in colors.error)) {
        throw new Error(`Invalid error color intensity: ${intensity}. Available: ${Object.keys(colors.error).join(', ')}`);
      }
      return colors.error[intensity as PrimaryColorToken];
      
    case 'neutral':
      if (!(intensity in colors.neutral)) {
        throw new Error(`Invalid neutral color intensity: ${intensity}. Available: ${Object.keys(colors.neutral).join(', ')}`);
      }
      return colors.neutral[intensity as keyof typeof colors.neutral];
      
    default:
      throw new Error(`Invalid color variant: ${variant}. Available: primary, secondary, success, warning, error, neutral`);
  }
}

/**
 * Generate responsive class names for breakpoints
 */
export function responsive<T extends string>(
  classes: Partial<Record<keyof typeof breakpoints, T>>
): string {
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      if (breakpoint === 'xs') return className;
      return `${breakpoint}:${className}`;
    })
    .join(' ');
}

/**
 * Generate color utility classes
 */
export const colorClasses = {
  // Text colors
  text: {
    primary: {
      50: 'text-primary-50',
      100: 'text-primary-100',
      200: 'text-primary-200',
      300: 'text-primary-300',
      400: 'text-primary-400',
      500: 'text-primary-500',
      600: 'text-primary-600',
      700: 'text-primary-700',
      800: 'text-primary-800',
      900: 'text-primary-900',
      950: 'text-primary-950',
    },
    secondary: {
      50: 'text-secondary-50',
      100: 'text-secondary-100',
      200: 'text-secondary-200',
      300: 'text-secondary-300',
      400: 'text-secondary-400',
      500: 'text-secondary-500',
      600: 'text-secondary-600',
      700: 'text-secondary-700',
      800: 'text-secondary-800',
      900: 'text-secondary-900',
      950: 'text-secondary-950',
    },
    success: {
      50: 'text-success-50',
      100: 'text-success-100',
      200: 'text-success-200',
      300: 'text-success-300',
      400: 'text-success-400',
      500: 'text-success-500',
      600: 'text-success-600',
      700: 'text-success-700',
      800: 'text-success-800',
      900: 'text-success-900',
      950: 'text-success-950',
    },
    warning: {
      50: 'text-warning-50',
      100: 'text-warning-100',
      200: 'text-warning-200',
      300: 'text-warning-300',
      400: 'text-warning-400',
      500: 'text-warning-500',
      600: 'text-warning-600',
      700: 'text-warning-700',
      800: 'text-warning-800',
      900: 'text-warning-900',
      950: 'text-warning-950',
    },
    error: {
      50: 'text-error-50',
      100: 'text-error-100',
      200: 'text-error-200',
      300: 'text-error-300',
      400: 'text-error-400',
      500: 'text-error-500',
      600: 'text-error-600',
      700: 'text-error-700',
      800: 'text-error-800',
      900: 'text-error-900',
      950: 'text-error-950',
    },
  },
  
  // Background colors
  bg: {
    primary: {
      50: 'bg-primary-50',
      100: 'bg-primary-100',
      200: 'bg-primary-200',
      300: 'bg-primary-300',
      400: 'bg-primary-400',
      500: 'bg-primary-500',
      600: 'bg-primary-600',
      700: 'bg-primary-700',
      800: 'bg-primary-800',
      900: 'bg-primary-900',
      950: 'bg-primary-950',
    },
    secondary: {
      50: 'bg-secondary-50',
      100: 'bg-secondary-100',
      200: 'bg-secondary-200',
      300: 'bg-secondary-300',
      400: 'bg-secondary-400',
      500: 'bg-secondary-500',
      600: 'bg-secondary-600',
      700: 'bg-secondary-700',
      800: 'bg-secondary-800',
      900: 'bg-secondary-900',
      950: 'bg-secondary-950',
    },
    success: {
      50: 'bg-success-50',
      100: 'bg-success-100',
      200: 'bg-success-200',
      300: 'bg-success-300',
      400: 'bg-success-400',
      500: 'bg-success-500',
      600: 'bg-success-600',
      700: 'bg-success-700',
      800: 'bg-success-800',
      900: 'bg-success-900',
      950: 'bg-success-950',
    },
    warning: {
      50: 'bg-warning-50',
      100: 'bg-warning-100',
      200: 'bg-warning-200',
      300: 'bg-warning-300',
      400: 'bg-warning-400',
      500: 'bg-warning-500',
      600: 'bg-warning-600',
      700: 'bg-warning-700',
      800: 'bg-warning-800',
      900: 'bg-warning-900',
      950: 'bg-warning-950',
    },
    error: {
      50: 'bg-error-50',
      100: 'bg-error-100',
      200: 'bg-error-200',
      300: 'bg-error-300',
      400: 'bg-error-400',
      500: 'bg-error-500',
      600: 'bg-error-600',
      700: 'bg-error-700',
      800: 'bg-error-800',
      900: 'bg-error-900',
      950: 'bg-error-950',
    },
  },
} as const;

/**
 * Common spacing utility classes
 */
export const spacingClasses = {
  padding: {
    none: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-12',
  },
  margin: {
    none: 'm-0',
    xs: 'm-1',
    sm: 'm-2',
    md: 'm-4',
    lg: 'm-6',
    xl: 'm-8',
    '2xl': 'm-12',
  },
  gap: {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  },
} as const;

/**
 * Common typography utility classes
 */
export const typographyClasses = {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  },
  weight: {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  },
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
} as const;

/**
 * Design system constants for easy access
 */
export const designSystem = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  duration,
  zIndex,
  breakpoints,
} as const;

/**
 * Type-safe theme accessor
 */
export function theme<T extends keyof typeof designSystem>(
  category: T
): typeof designSystem[T] {
  return designSystem[category];
}

/**
 * Card animation and interaction utilities
 */
export const cardAnimations = {
  // Base card transitions - smooth and elegant
  base: 'transition-all duration-300 ease-out',
  
  // Hover lift effect - subtle elevation with enhanced shadow
  lift: 'hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/15 dark:hover:shadow-neutral-900/25',
  
  // Subtle lift without scaling - pure shadow elevation
  elevate: 'hover:shadow-lg hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20',
  
  // Primary glow effect - beautiful colored glow
  primaryGlow: 'hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-400/15',
  
  // Secondary glow effect
  secondaryGlow: 'hover:shadow-lg hover:shadow-secondary-500/20 dark:hover:shadow-secondary-400/15',
  
  // Multi-color glow effect
  multiGlow: 'hover:shadow-lg hover:shadow-[0_8px_30px_rgba(var(--primary-500),0.12),0_12px_40px_rgba(var(--secondary-500),0.08)]',
  
  // Inner light effect - adds inner glow/highlight
  innerLight: 'relative hover:before:opacity-100 before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/5 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none',
  
  // Border light effect - animated border glow
  borderLight: 'relative hover:after:opacity-100 after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-primary-400/30 after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none',
  
  // Shimmer effect for loading states - more subtle
  shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-out',
  
  // Depth shadow effect with multiple layers
  depth: 'shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]',
  
  // Soft depth - gentler shadow progression
  softDepth: 'shadow-[0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]',
} as const;

/**
 * Generate card variant classes
 */
export const cardVariants = {
  // Surface variants
  surface: {
    default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700',
    elevated: 'bg-white dark:bg-neutral-800 shadow-md border border-neutral-100 dark:border-neutral-600',
    glass: 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50',
    outline: 'bg-transparent border-2 border-neutral-200 dark:border-neutral-700',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50',
    gradientPrimary: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200/50 dark:border-primary-700/50',
    gradientSecondary: 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border border-secondary-200/50 dark:border-secondary-700/50',
    gradientMulti: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10 border border-neutral-200/50 dark:border-neutral-700/50',
    gradientWarm: 'bg-gradient-to-br from-warning-50 via-white to-error-50 dark:from-warning-900/10 dark:via-neutral-900 dark:to-error-900/10 border border-neutral-200/50 dark:border-neutral-700/50',
    gradientCool: 'bg-gradient-to-br from-primary-50 via-white to-success-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-success-900/10 border border-neutral-200/50 dark:border-neutral-700/50',
  },
  
  // Interactive states
  interactive: {
    default: 'cursor-pointer',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'pointer-events-none opacity-75',
  },
  
  // Color variants
  color: {
    default: 'border-neutral-200 dark:border-neutral-700',
    primary: 'border-primary-200 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/10',
    secondary: 'border-secondary-200 dark:border-secondary-700 bg-secondary-50/50 dark:bg-secondary-900/10',
    success: 'border-success-200 dark:border-success-700 bg-success-50/50 dark:bg-success-900/10',
    warning: 'border-warning-200 dark:border-warning-700 bg-warning-50/50 dark:bg-warning-900/10',
    error: 'border-error-200 dark:border-error-700 bg-error-50/50 dark:bg-error-900/10',
  },
} as const;

/**
 * Loading and spinner animation utilities
 */
export const loadingAnimations = {
  // Spinner animations
  spin: {
    slow: 'animate-[spin_2s_linear_infinite]',
    normal: 'animate-spin',
    fast: 'animate-[spin_0.5s_linear_infinite]',
  },
  
  // Pulse animations
  pulse: {
    slow: 'animate-[pulse_3s_ease-in-out_infinite]',
    normal: 'animate-pulse',
    fast: 'animate-[pulse_1s_ease-in-out_infinite]',
  },
  
  // Bounce animations
  bounce: {
    slow: 'animate-[bounce_2s_infinite]',
    normal: 'animate-bounce',
    fast: 'animate-[bounce_0.5s_infinite]',
  },
  
  // Fade in/out animations
  fade: {
    in: 'animate-[fadeIn_0.5s_ease-in-out]',
    out: 'animate-[fadeOut_0.5s_ease-in-out]',
    inSlow: 'animate-[fadeIn_1s_ease-in-out]',
    outSlow: 'animate-[fadeOut_1s_ease-in-out]',
  },
  
  // Dot/wave animations for loading dots
  wave: {
    dot1: 'animate-[pulse_1.5s_ease-in-out_0s_infinite]',
    dot2: 'animate-[pulse_1.5s_ease-in-out_0.2s_infinite]',
    dot3: 'animate-[pulse_1.5s_ease-in-out_0.4s_infinite]',
  },
  
  // Progress bar animations
  progress: {
    indeterminate: 'animate-indeterminate-progress',
    determinate: 'transition-[transform] duration-300 ease-out',
    slide: 'animate-progress-slide',
    shimmer: 'before:animate-shimmer',
  },
  
  // Skeleton loading animations
  skeleton: {
    shimmer: 'animate-[shimmer_2s_ease-in-out_infinite]',
    pulse: 'animate-[pulse_2s_ease-in-out_infinite]',
  },
} as const;

/**
 * Tab-specific animation utilities
 */
export const tabAnimations = {
  // Content animations
  content: {
    fadeIn: 'animate-in fade-in-0 duration-200',
    fadeInUp: 'animate-in fade-in-0 slide-in-from-bottom-4 duration-200',
    fadeInScale: 'animate-in fade-in-0 zoom-in-95 duration-200',
    slideIn: 'animate-in slide-in-from-right-8 duration-300 ease-out',
    slideInLeft: 'animate-in slide-in-from-left-8 duration-300 ease-out',
  },
  
  // Tab trigger animations
  trigger: {
    base: 'transition-all duration-200 ease-out',
    hover: 'hover:-translate-y-0.5 hover:shadow-lg',
    active: 'data-[state=active]:shadow-lg data-[state=active]:shadow-primary-500/20',
    focus: 'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  },
  
  // Tab list animations
  list: {
    base: 'transition-all duration-300 ease-out',
    floating: 'hover:shadow-xl hover:shadow-neutral-900/15 hover:-translate-y-0.5',
  },
  
  // Container animations
  container: {
    card: cardAnimations.base + ' ' + cardAnimations.softDepth,
    glass: cardAnimations.base + ' ' + cardAnimations.primaryGlow,
    outline: cardAnimations.base + ' ' + cardAnimations.borderLight,
  },
  
  // Indicator animations (for custom indicators)
  indicator: {
    slide: 'transition-all duration-300 ease-out',
    glow: 'transition-all duration-300 ease-out shadow-lg shadow-primary-500/25',
    scale: 'transition-all duration-300 ease-out hover:scale-105',
  },
} as const;

/**
 * Breadcrumb-specific animation utilities
 * 
 * Anti-blur optimizations applied:
 * - Links and ellipsis start scaled down (scale-95) and animate to natural size (scale-100)
 * - Hardware acceleration enabled with transform-gpu and will-change-transform
 * - Anti-blur CSS properties applied via inline styles
 */
export const breadcrumbAnimations = {
  // Link animations (anti-blur: scale down first, then to natural size)
  link: {
    base: 'transform-gpu will-change-transform transition-all duration-200 ease-out',
    hover: 'scale-95 hover:scale-100 active:scale-90',
    glow: 'hover:shadow-sm hover:shadow-primary-500/20',
    bounce: 'hover:animate-[bounce_0.6s_ease-in-out]',
  },
  
  // Separator animations
  separator: {
    base: 'transition-all duration-200 ease-out',
    fadeIn: 'animate-in fade-in-0 duration-300',
    slideIn: 'animate-in slide-in-from-left-2 duration-300',
    rotate: 'transition-transform duration-200 hover:rotate-12',
  },
  
  // Container animations
  container: {
    base: 'transition-all duration-300 ease-out',
    fadeIn: 'animate-in fade-in-0 slide-in-from-top-4 duration-500',
    stagger: 'animate-in fade-in-0 slide-in-from-left-8 duration-300',
  },
  
  // Item animations (anti-blur: scale down first for hover effects)
  item: {
    base: 'transition-all duration-200 ease-out',
    hover: 'hover:-translate-y-0.5 scale-98 hover:scale-100',
    focus: 'focus-visible:ring-2 focus-visible:ring-primary-500/20',
    current: 'animate-in fade-in-0 zoom-in-95 duration-200',
    ghost: 'hover:bg-primary-50/50 dark:hover:bg-primary-950/30 rounded-md transition-colors duration-200',
  },
  
  // Ellipsis animations (anti-blur: scale down first, then to natural size)
  ellipsis: {
    base: 'transform-gpu will-change-transform transition-all duration-200 ease-out',
    hover: 'scale-95 hover:scale-100 hover:rotate-90',
    pulse: 'hover:animate-pulse',
    expand: 'transform transition-transform duration-300 data-[expanded=true]:rotate-90',
  },
} as const;

/**
 * Avatar-specific animation utilities
 * 
 * Anti-blur optimizations:
 * - Start scaled down (scale-95) and animate to natural size (scale-100) on hover
 * - Use transform-gpu and will-change-transform for hardware acceleration
 * - Apply backface-visibility: hidden and filter: blur(0) via inline styles
 */
export const avatarAnimations = {
  // Avatar container animations (anti-blur: scale down first, then to natural size)
  container: {
    base: 'transform-gpu will-change-transform transition-all duration-300 ease-out',
    hover: 'scale-95 hover:scale-100 hover:shadow-lg hover:shadow-neutral-900/15 dark:hover:shadow-neutral-900/25',
    bounce: 'scale-95 hover:scale-100 hover:animate-pulse hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-500/15',
    glow: 'scale-95 hover:scale-100 hover:shadow-xl hover:shadow-primary-500/25 dark:hover:shadow-primary-500/15 hover:ring-2 hover:ring-primary-500/20',
    shimmer: 'scale-95 relative overflow-hidden hover:scale-100 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700',
  },
  
  // Avatar image animations (anti-blur: start slightly larger, scale down to natural size)
  image: {
    base: 'transform-gpu will-change-transform transition-transform duration-300',
    hover: 'scale-105 group-hover:scale-100',
    bounce: 'scale-105 group-hover:scale-100 group-hover:rotate-2',
    zoom: 'scale-105 group-hover:scale-100',
  },
  
  // Status indicator animations
  status: {
    pulse: 'animate-pulse',
    ping: 'animate-ping',
    bounce: 'animate-bounce',
    none: '',
  },
  
  // Badge animations
  badge: {
    base: 'animate-pulse transition-all duration-200',
    hover: 'hover:scale-110 hover:shadow-lg',
    glow: 'shadow-lg shadow-current/25',
  },
  
  // Group animations
  group: {
    stagger: 'hover:translate-x-1 transition-transform duration-200',
    lift: 'hover:-translate-y-1 hover:shadow-lg transition-all duration-200',
    rotate: 'hover:rotate-6 transition-transform duration-200',
  },
  
  // Upload overlay animations
  upload: {
    overlay: 'absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200',
    content: 'transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200',
    icon: 'animate-pulse group-hover:animate-bounce',
  },
} as const;

/**
 * Avatar variant utilities
 */
export const avatarVariants = {
  // Surface variants
  surface: {
    default: 'bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-200 dark:border-neutral-600',
    primary: 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 border border-primary-200 dark:border-primary-700',
    secondary: 'bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900/40 dark:to-secondary-800/40 border border-secondary-200 dark:border-secondary-700',
    success: 'bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900/40 dark:to-success-800/40 border border-success-200 dark:border-success-700',
    warning: 'bg-gradient-to-br from-warning-100 to-warning-200 dark:from-warning-900/40 dark:to-warning-800/40 border border-warning-200 dark:border-warning-700',
    error: 'bg-gradient-to-br from-error-100 to-error-200 dark:from-error-900/40 dark:to-error-800/40 border border-error-200 dark:border-error-700',
    glass: 'bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10',
    ring: 'bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 ring-2 ring-primary-500/20 dark:ring-primary-400/30',
    glow: 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 shadow-lg shadow-primary-500/25 dark:shadow-primary-500/15',
  },
  
  // Size variants
  size: {
    xs: 'size-6 text-xs',
    sm: 'size-8 text-sm',
    default: 'size-10 text-base',
    lg: 'size-12 text-lg',
    xl: 'size-16 text-xl',
    '2xl': 'size-20 text-2xl',
    '3xl': 'size-24 text-3xl',
  },
  
  // Shape variants
  shape: {
    circle: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none',
  },
  
  // Status variants
  status: {
    online: 'after:bg-success-500 after:animate-pulse',
    offline: 'after:bg-neutral-400',
    busy: 'after:bg-error-500',
    away: 'after:bg-warning-500',
  },
  
  // Fallback text variants
  fallback: {
    default: 'text-neutral-700 dark:text-neutral-300',
    primary: 'text-primary-700 dark:text-primary-300',
    secondary: 'text-secondary-700 dark:text-secondary-300',
    success: 'text-success-700 dark:text-success-300',
    warning: 'text-warning-700 dark:text-warning-300',
    error: 'text-error-700 dark:text-error-300',
    glass: 'text-neutral-800 dark:text-neutral-200',
    ring: 'text-neutral-700 dark:text-neutral-300',
    glow: 'text-primary-700 dark:text-primary-300',
  },
} as const;

/**
 * Accordion-specific animation utilities
 */
export const accordionAnimations = {
  // Accordion item animations
  item: {
    base: 'transition-all duration-300 ease-out',
    hover: 'hover:shadow-lg hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/15',
    focus: 'focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:ring-offset-2',
    active: 'data-[state=open]:shadow-lg data-[state=open]:shadow-primary-500/15',
  },
  
  // Accordion trigger animations
  trigger: {
    base: 'transform-gpu will-change-transform transition-all duration-300 ease-out',
    hover: 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
    active: 'data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-700/50',
    icon: 'transition-transform duration-300 ease-out data-[state=open]:rotate-180',
  },
  
  // Accordion content animations
  content: {
    base: 'overflow-hidden transition-all duration-300 ease-out',
    enter: 'animate-in fade-in-0 slide-in-from-top-2 duration-300',
    exit: 'animate-out fade-out-0 slide-out-to-top-2 duration-300',
    collapsing: 'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  },
  
  // Border animations for nested accordions
  border: {
    nested: 'border-l-2 border-primary-200/50 dark:border-primary-700/50 hover:border-primary-300 dark:hover:border-primary-600',
    divider: 'border-b border-neutral-200 dark:border-neutral-700 last:border-b-0',
  },
  
  // Chevron/arrow animations
  chevron: {
    base: 'transform-gpu will-change-transform transition-transform duration-300 ease-out',
    rotate: 'data-[state=open]:rotate-180',
    bounce: 'data-[state=open]:animate-bounce',
    scale: 'hover:scale-110 active:scale-95',
  },
} as const;

/**
 * Accordion variant utilities
 */
export const accordionVariants = {
  // Surface variants
  surface: {
    default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg',
    elevated: 'bg-white dark:bg-neutral-800 shadow-md border border-neutral-100 dark:border-neutral-600 rounded-lg',
    glass: 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50 rounded-lg',
    outline: 'bg-transparent border-2 border-neutral-200 dark:border-neutral-700 rounded-lg',
    flush: 'bg-transparent',
  },
  
  // Spacing variants
  spacing: {
    compact: 'space-y-0',
    comfortable: 'space-y-1',
    relaxed: 'space-y-2',
  },
  
  // Size variants
  size: {
    sm: 'text-sm',
    default: 'text-base',
    lg: 'text-lg',
  },
} as const;

/**
 * Pagination-specific animation utilities
 */
export const paginationAnimations = {
  // Page item animations with anti-blur optimizations
  item: {
    base: 'transform-gpu will-change-transform transition-all duration-200 ease-out',
    hover: 'scale-98 hover:scale-100 hover:-translate-y-0.5 active:scale-95',
    glow: 'hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-500/15',
    bounce: 'hover:animate-[bounce_0.6s_ease-in-out]',
    shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700',
  },
  
  // Navigation button animations
  nav: {
    base: 'transition-all duration-200 ease-out group',
    prevHover: 'hover:-translate-y-0.5 hover:-translate-x-0.5',
    nextHover: 'hover:-translate-y-0.5 hover:translate-x-0.5',
    iconSlide: 'transition-transform group-hover:-translate-x-0.5',
    iconSlideNext: 'transition-transform group-hover:translate-x-0.5',
  },
  
  // Container animations
  container: {
    base: 'animate-in fade-in-0 slide-in-from-bottom-4 duration-500',
    stagger: 'animate-in fade-in-0 zoom-in-95 duration-200',
  },
  
  // Ellipsis animations
  ellipsis: {
    base: 'transform-gpu will-change-transform transition-all duration-200',
    rotate: 'scale-95 hover:scale-100 hover:rotate-90 hover:text-primary-600 dark:hover:text-primary-400',
    pulse: 'hover:animate-pulse',
  },
} as const;

/**
 * Pagination variant utilities
 */
export const paginationVariants = {
  // Item variants for different visual styles
  item: {
    default: {
      active: 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
      inactive: 'bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-700 hover:from-neutral-100 hover:to-neutral-200 hover:text-neutral-900 hover:shadow-md dark:from-neutral-800 dark:to-neutral-700 dark:text-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 dark:hover:text-neutral-100',
    },
    outline: {
      active: 'border-2 border-primary-600 bg-primary-50 text-primary-700 shadow-lg shadow-primary-500/15 hover:bg-primary-100 hover:shadow-xl dark:bg-primary-950/50 dark:text-primary-300 dark:hover:bg-primary-950/80',
      inactive: 'border border-neutral-300 bg-transparent text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-md dark:border-neutral-600 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-100',
    },
    glass: {
      active: 'bg-primary-600/80 backdrop-blur-md text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600/90 hover:shadow-xl',
      inactive: 'bg-white/10 backdrop-blur-md border border-white/20 text-neutral-700 hover:bg-white/20 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10',
    },
    minimal: {
      active: 'text-primary-600 font-semibold relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary-600 after:rounded-full dark:text-primary-400 dark:after:bg-primary-400',
      inactive: 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50 dark:text-neutral-400 dark:hover:text-primary-400 dark:hover:bg-primary-950/30',
    },
  },
  
  // Container variants
  container: {
    default: '',
    glass: 'p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg dark:bg-white/5 dark:border-white/10',
    outline: 'p-2 border border-neutral-200 rounded-lg bg-neutral-50/50 dark:border-neutral-700 dark:bg-neutral-800/50',
    elevated: 'p-2 bg-white shadow-lg border border-neutral-100 rounded-lg dark:bg-neutral-800 dark:border-neutral-600',
  },
  
  // Size variants
  size: {
    sm: { height: 'h-8', minWidth: 'min-w-8', padding: 'px-2', text: 'text-sm', radius: 'rounded-md' },
    default: { height: 'h-9', minWidth: 'min-w-9', padding: 'px-3', text: 'text-sm', radius: 'rounded-md' },
    lg: { height: 'h-10', minWidth: 'min-w-10', padding: 'px-4', text: 'text-base', radius: 'rounded-lg' },
  },
} as const;

/**
 * Pagination utility functions
 */
export const paginationUtils = {
  // Calculate visible page range for pagination
  getVisiblePages: (currentPage: number, totalPages: number, maxVisible: number = 7): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    const halfVisible = Math.floor(maxVisible / 2);
    
    if (currentPage <= halfVisible + 1) {
      for (let i = 1; i <= maxVisible - 2; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - halfVisible) {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - (maxVisible - 3); i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = currentPage - halfVisible + 2; i <= currentPage + halfVisible - 2; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    }
    
    return pages;
  },
  
  // Calculate pagination info (e.g., "Showing 1-10 of 100")
  getPaginationInfo: (currentPage: number, itemsPerPage: number, totalItems: number) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    return {
      startItem,
      endItem,
      totalItems,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  },
  
  // Generate pagination metadata for SEO/accessibility
  getPaginationMeta: (currentPage: number, totalPages: number, baseUrl: string) => {
    const meta: { rel: string; href: string }[] = [];
    
    if (currentPage > 1) {
      meta.push({ rel: 'prev', href: `${baseUrl}?page=${currentPage - 1}` });
    }
    
    if (currentPage < totalPages) {
      meta.push({ rel: 'next', href: `${baseUrl}?page=${currentPage + 1}` });
    }
    
    meta.push({ rel: 'first', href: `${baseUrl}?page=1` });
    meta.push({ rel: 'last', href: `${baseUrl}?page=${totalPages}` });
    
    return meta;
  },
  
  // Validate pagination parameters
  validatePagination: (page: number, totalPages: number): { isValid: boolean; normalizedPage: number; error?: string } => {
    if (!Number.isInteger(page) || page < 1) {
      return { isValid: false, normalizedPage: 1, error: 'Page must be a positive integer' };
    }
    
    if (page > totalPages && totalPages > 0) {
      return { isValid: false, normalizedPage: totalPages, error: 'Page exceeds total pages' };
    }
    
    return { isValid: true, normalizedPage: page };
  },
} as const;

/**
 * Search-specific animation utilities
 */
export const searchAnimations = {
  // Search input animations
  input: {
    base: 'transition-all duration-300 ease-out',
    focus: 'focus-within:scale-[1.01] focus-within:shadow-lg',
    typing: 'animate-pulse',
  },
  
  // Search icon animations
  icon: {
    base: 'transition-all duration-300 ease-out',
    active: 'text-primary-500 dark:text-primary-400 scale-110',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
  },
  
  // Suggestions dropdown animations
  dropdown: {
    enter: 'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200',
    exit: 'animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-150',
    base: 'transform-gpu will-change-transform',
  },
  
  // Suggestion item animations
  suggestion: {
    base: 'transition-all duration-150 ease-out',
    hover: 'hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:scale-[1.01]',
    highlighted: 'bg-primary-50 dark:bg-primary-950/30 scale-[1.01]',
    select: 'animate-pulse',
  },
  
  // Clear button animations
  clear: {
    base: 'transition-all duration-200 ease-out',
    hover: 'hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800',
    active: 'active:scale-95',
  },
  
  // Loading spinner animations
  loading: {
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
  },
  
  // Highlight text animations
  highlight: {
    base: 'bg-primary-100 dark:bg-primary-900/50 text-primary-900 dark:text-primary-100',
    glow: 'shadow-sm shadow-primary-500/20',
    pulse: 'animate-pulse bg-primary-200 dark:bg-primary-800/60',
  },
  
  // Empty state animations
  empty: {
    fadeIn: 'animate-in fade-in-0 slide-in-from-top-4 duration-300',
    bounce: 'animate-bounce',
  },
} as const;

/**
 * Search variant utilities
 */
export const searchVariants = {
  // Container variants
  container: {
    default: 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm',
    elevated: 'bg-white dark:bg-neutral-900 shadow-lg border border-neutral-100 dark:border-neutral-700',
    glass: 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50',
    outline: 'bg-transparent border-2 border-neutral-300 dark:border-neutral-700',
    minimal: 'bg-transparent border-b-2 border-neutral-200 dark:border-neutral-800 rounded-none',
  },
  
  // Dropdown variants
  dropdown: {
    default: 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-lg',
    elevated: 'bg-white dark:bg-neutral-900 shadow-xl border border-neutral-100 dark:border-neutral-700',
    glass: 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-white/20 dark:border-neutral-700/50 shadow-xl',
    minimal: 'bg-white dark:bg-neutral-950 border-x border-b border-neutral-200 dark:border-neutral-800 shadow-lg',
  },
  
  // Size variants
  size: {
    xs: { height: 'h-7', padding: 'px-2 py-1', text: 'text-xs', icon: 'h-3 w-3' },
    sm: { height: 'h-8', padding: 'px-3 py-1.5', text: 'text-sm', icon: 'h-3.5 w-3.5' },
    default: { height: 'h-10', padding: 'px-3.5 py-2', text: 'text-sm', icon: 'h-4 w-4' },
    lg: { height: 'h-12', padding: 'px-4 py-3', text: 'text-base', icon: 'h-5 w-5' },
    xl: { height: 'h-14', padding: 'px-5 py-4', text: 'text-lg', icon: 'h-6 w-6' },
  },
} as const;

/**
 * Search utility functions
 */
export const searchUtils = {
  // Debounce function for search input
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },
  
  // Highlight search matches in text
  highlightMatches: (text: string, query: string): string[] => {
    if (!query.trim()) return [text];
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex);
  },
  
  // Filter suggestions based on query
  filterSuggestions: <T extends { label: string; value: string; description?: string; category?: string }>(
    suggestions: T[],
    query: string,
    maxResults: number = 10
  ): T[] => {
    if (!query.trim()) return suggestions.slice(0, maxResults);
    
    const lowerQuery = query.toLowerCase();
    
    return suggestions
      .filter(suggestion =>
        suggestion.label.toLowerCase().includes(lowerQuery) ||
        suggestion.value.toLowerCase().includes(lowerQuery) ||
        suggestion.description?.toLowerCase().includes(lowerQuery) ||
        suggestion.category?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, maxResults);
  },
  
  // Generate search result score (for ranking)
  calculateScore: (item: { label: string; value: string; description?: string }, query: string): number => {
    if (!query.trim()) return 0;
    
    const lowerQuery = query.toLowerCase();
    let score = 0;
    
    // Exact match in label gets highest score
    if (item.label.toLowerCase() === lowerQuery) score += 100;
    // Starts with query in label
    else if (item.label.toLowerCase().startsWith(lowerQuery)) score += 50;
    // Contains query in label
    else if (item.label.toLowerCase().includes(lowerQuery)) score += 25;
    
    // Bonus for value matches
    if (item.value.toLowerCase().includes(lowerQuery)) score += 10;
    
    // Bonus for description matches
    if (item.description?.toLowerCase().includes(lowerQuery)) score += 5;
    
    return score;
  },
  
  // Sort suggestions by relevance
  sortByRelevance: <T extends { label: string; value: string; description?: string }>(
    suggestions: T[],
    query: string
  ): T[] => {
    return [...suggestions].sort((a, b) => {
      const scoreA = searchUtils.calculateScore(a, query);
      const scoreB = searchUtils.calculateScore(b, query);
      return scoreB - scoreA;
    });
  },
  
  // Escape regex special characters
  escapeRegex: (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },
  
  // Generate unique IDs for suggestions
  generateId: (prefix: string = 'search'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },
} as const;

/**
 * Avatar utility functions
 */
export const avatarUtils = {
  // Generate initials from a name
  getInitials: (name: string, maxLength: number = 2): string => {
    if (!name) return '?';
    
    const words = name.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].substring(0, maxLength).toUpperCase();
    }
    
    return words
      .slice(0, maxLength)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  },
  
  // Generate a deterministic color variant based on a string
  getVariantFromString: (str: string): 'primary' | 'secondary' | 'success' | 'warning' | 'error' => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error'] as const;
    const hash = str.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return variants[Math.abs(hash) % variants.length];
  },
  
  // Check if image URL is valid
  isValidImageUrl: (url: string): boolean => {
    try {
      new URL(url);
      return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(url);
    } catch {
      return false;
    }
  },
  
  // Generate avatar background from name (for consistent colors)
  getBackgroundFromName: (name: string): string => {
    const colors = [
      'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40',
      'bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900/40 dark:to-secondary-800/40',
      'bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900/40 dark:to-success-800/40',
      'bg-gradient-to-br from-warning-100 to-warning-200 dark:from-warning-900/40 dark:to-warning-800/40',
      'bg-gradient-to-br from-error-100 to-error-200 dark:from-error-900/40 dark:to-error-800/40',
    ];
    
    const hash = name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    return colors[Math.abs(hash) % colors.length];
  },
} as const;

/**
 * Interactive component animation utilities
 * 
 * Specialized animations for buttons, counters, and interactive elements
 * with anti-blur optimizations and smooth transforms.
 */
export const interactiveAnimations = {
  // Like/Vote counter animations
  counter: {
    base: 'transform-gpu will-change-transform transition-all duration-300 ease-out',
    bounce: 'hover:-translate-y-0.5 active:scale-95 active:transition-transform active:duration-75',
    glow: 'hover:shadow-lg hover:shadow-primary-500/25 dark:hover:shadow-primary-500/15 hover:-translate-y-1',
    heartbeat: 'data-[liked=true]:animate-[heartbeat_0.6s_ease-in-out]',
    pop: 'data-[clicked=true]:animate-[pop_0.3s_ease-out]',
    ripple: 'active:after:animate-[ripple_0.6s_ease-out] after:absolute after:inset-0 after:rounded-[inherit] after:bg-white/20 after:opacity-0 active:after:opacity-100',
  },
  
  // Floating particle effects
  particles: {
    float1: 'animate-[float1_2s_ease-in-out_infinite]',
    float2: 'animate-[float2_2.5s_ease-in-out_infinite]',
    float3: 'animate-[float3_1.8s_ease-in-out_infinite]',
    sparkle: 'animate-[sparkle_1.5s_ease-in-out_infinite]',
  },
  
  // Icon-specific animations
  icons: {
    heart: 'data-[liked=true]:animate-[heartbeat_0.6s_ease-in-out] data-[liked=true]:text-error-500',
    star: 'data-[liked=true]:animate-[starSpin_0.5s_ease-out] data-[liked=true]:text-warning-500',
    thumbsUp: 'data-[liked=true]:animate-[thumbPop_0.4s_ease-out] data-[liked=true]:text-primary-500',
    trending: 'data-[liked=true]:animate-[trendingPulse_0.8s_ease-in-out] data-[liked=true]:text-success-500',
  },
  
  // Button micro-interactions
  buttons: {
    lift: 'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/15 dark:hover:shadow-neutral-900/25',
    press: 'active:scale-98 active:transition-transform active:duration-75',
    shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700',
    glow: 'hover:shadow-xl hover:shadow-primary-500/30 hover:ring-2 hover:ring-primary-500/20',
  },
  
  // Loading states
  loading: {
    spinner: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    dots: 'animate-[loadingDots_1.4s_ease-in-out_infinite]',
  },
  
  // Focus and accessibility animations
  focus: {
    ring: 'focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 transition-shadow duration-200',
    glow: 'focus-visible:shadow-lg focus-visible:shadow-primary-500/25 focus-visible:ring-2 focus-visible:ring-primary-500/20',
    lift: 'focus-visible:-translate-y-0.5 focus-visible:shadow-lg transition-all duration-200',
  },
} as const;

/**
 * Count formatting utilities for counters and stats
 */
export const countUtils = {
  // Format numbers with appropriate suffixes
  formatCount: (count: number, precision: number = 1): string => {
    if (count >= 1000000000) {
      return `${(count / 1000000000).toFixed(precision)}B`
    }
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(precision)}M`
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(precision)}K`
    }
    return count.toString()
  },
  
  // Format with commas
  formatWithCommas: (count: number): string => {
    return count.toLocaleString()
  },
  
  // Compact format for different locales
  formatCompact: (count: number, locale: string = 'en-US'): string => {
    return new Intl.NumberFormat(locale, {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(count)
  },
  
  // Animate count changes
  animateCountChange: (
    from: number, 
    to: number, 
    duration: number = 300,
    callback: (current: number) => void
  ): (() => void) => {
    const startTime = Date.now()
    const diff = to - from
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(from + diff * eased)
      
      callback(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    const rafId = requestAnimationFrame(animate)
    
    // Return cleanup function
    return () => cancelAnimationFrame(rafId)
  },
  
  // Validate count values
  validateCount: (count: number, min: number = 0, max?: number): number => {
    let validated = Math.max(min, count)
    if (max !== undefined) {
      validated = Math.min(max, validated)
    }
    return Math.floor(validated)
  },
} as const;

/**
 * Color variant utilities for interactive states
 */
export const interactiveColors = {
  // Get colors based on interaction state
  getLikeColors: (liked: boolean, variant: string = 'default') => {
    if (liked) {
      switch (variant) {
        case 'heart':
          return {
            bg: 'bg-gradient-to-br from-error-500 to-error-600',
            text: 'text-white',
            icon: 'text-white',
            shadow: 'shadow-error-500/25 hover:shadow-error-500/30'
          }
        case 'star':
          return {
            bg: 'bg-gradient-to-br from-warning-500 to-warning-600',
            text: 'text-white',
            icon: 'text-white',
            shadow: 'shadow-warning-500/25 hover:shadow-warning-500/30'
          }
        case 'thumbs':
          return {
            bg: 'bg-gradient-to-br from-primary-500 to-primary-600',
            text: 'text-white',
            icon: 'text-white',
            shadow: 'shadow-primary-500/25 hover:shadow-primary-500/30'
          }
        default:
          return {
            bg: 'bg-gradient-to-br from-primary-500 to-primary-600',
            text: 'text-white',
            icon: 'text-white',
            shadow: 'shadow-primary-500/25 hover:shadow-primary-500/30'
          }
      }
    }
    
    return {
      bg: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700',
      text: 'text-neutral-700 dark:text-neutral-300',
      icon: 'text-neutral-500 dark:text-neutral-400',
      shadow: 'shadow-neutral-900/10 dark:shadow-neutral-900/20'
    }
  },
  
  // Get hover states
  getHoverColors: (variant: string = 'default') => {
    switch (variant) {
      case 'primary':
        return 'hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-700 dark:hover:text-primary-300'
      case 'success':
        return 'hover:bg-success-50 dark:hover:bg-success-950/30 hover:text-success-700 dark:hover:text-success-300'
      case 'warning':
        return 'hover:bg-warning-50 dark:hover:bg-warning-950/30 hover:text-warning-700 dark:hover:text-warning-300'
      case 'error':
        return 'hover:bg-error-50 dark:hover:bg-error-950/30 hover:text-error-700 dark:hover:text-error-300'
      default:
        return 'hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
    }
  },
} as const;

/**
 * User Flair/Badge specific animation utilities
 * 
 * Specialized animations for user achievements, roles, and status badges
 * with rarity-based effects and interactive hover states.
 */
export const flairAnimations = {
  // Base flair animations
  base: {
    container: 'transition-all duration-300 ease-out',
    badge: 'transform-gpu will-change-transform transition-all duration-300 ease-out',
    hover: 'hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95',
    glow: 'hover:shadow-xl hover:shadow-current/20 dark:hover:shadow-current/15',
  },
  
  // Rarity-based animations
  rarity: {
    common: 'hover:shadow-md hover:shadow-neutral-900/10',
    uncommon: 'hover:shadow-lg hover:shadow-primary-500/15 hover:ring-2 hover:ring-primary-400/20',
    rare: 'hover:shadow-xl hover:shadow-secondary-500/25 hover:ring-2 hover:ring-secondary-400/30 animate-pulse',
    epic: 'hover:shadow-2xl hover:shadow-warning-500/30 hover:ring-2 hover:ring-warning-400/40 animate-pulse hover:animate-bounce',
    legendary: 'hover:shadow-2xl hover:shadow-error-500/40 hover:ring-3 hover:ring-error-400/50 animate-pulse hover:animate-bounce shadow-[0_0_25px_rgba(var(--error-500),0.3)]',
  },
  
  // Type-based animations
  type: {
    achievement: 'hover:shadow-warning-500/20 dark:hover:shadow-warning-500/15',
    role: 'hover:shadow-primary-500/20 dark:hover:shadow-primary-500/15',
    status: 'hover:shadow-success-500/20 dark:hover:shadow-success-500/15',
    premium: 'hover:shadow-warning-500/30 dark:hover:shadow-warning-500/20 before:animate-shimmer',
    milestone: 'hover:shadow-secondary-500/20 dark:hover:shadow-secondary-500/15',
    special: 'hover:shadow-primary-500/25 dark:hover:shadow-primary-500/20 before:animate-shimmer',
    verified: 'hover:shadow-primary-500/25 dark:hover:shadow-primary-500/20',
    legendary: 'hover:shadow-error-500/35 dark:hover:shadow-error-500/25 animate-pulse before:animate-shimmer',
  },
  
  // Interactive effects
  effects: {
    shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700',
    sparkle: 'relative before:absolute before:inset-0 before:bg-sparkle before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    glow: 'relative after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:via-current/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
    pulse: 'hover:animate-[pulse_1s_ease-in-out_infinite]',
    bounce: 'hover:animate-[bounce_0.6s_ease-in-out]',
    rotate: 'hover:rotate-3 active:rotate-6 transition-transform duration-200',
  },
  
  // Tooltip animations
  tooltip: {
    enter: 'animate-in fade-in-0 zoom-in-95 duration-200',
    exit: 'animate-out fade-out-0 zoom-out-95 duration-150',
    slide: 'animate-in fade-in-0 slide-in-from-bottom-2 duration-200',
  },
  
  // Progress bar animations
  progress: {
    fill: 'transition-all duration-500 ease-out',
    glow: 'shadow-sm shadow-current/30',
    pulse: 'animate-pulse',
  },
  
  // Container layout animations
  layout: {
    stagger: 'animate-in fade-in-0 slide-in-from-left-4 duration-300',
    grid: 'animate-in fade-in-0 zoom-in-95 duration-200',
    horizontal: 'animate-in fade-in-0 slide-in-from-top-2 duration-300',
    vertical: 'animate-in fade-in-0 slide-in-from-left-2 duration-300',
  },
} as const;

/**
 * Flair utility functions for managing user badges and achievements
 */
export const flairUtils = {
  // Sort flairs by rarity and type priority
  sortFlairs: <T extends { type: string; rarity?: string }>(flairs: T[]): T[] => {
    const rarityOrder = { legendary: 0, epic: 1, rare: 2, uncommon: 3, common: 4 };
    const typeOrder = { legendary: 0, verified: 1, premium: 2, special: 3, role: 4, milestone: 5, achievement: 6, status: 7 };
    
    return [...flairs].sort((a, b) => {
      const rarityA = rarityOrder[a.rarity as keyof typeof rarityOrder] ?? 5;
      const rarityB = rarityOrder[b.rarity as keyof typeof rarityOrder] ?? 5;
      
      if (rarityA !== rarityB) return rarityA - rarityB;
      
      const typeA = typeOrder[a.type as keyof typeof typeOrder] ?? 8;
      const typeB = typeOrder[b.type as keyof typeof typeOrder] ?? 8;
      
      return typeA - typeB;
    });
  },
  
  // Calculate flair display priority score
  getPriorityScore: (flair: { type: string; rarity?: string; earnedAt?: Date; value?: number }): number => {
    let score = 0;
    
    // Rarity scoring
    const rarityScores = { legendary: 100, epic: 80, rare: 60, uncommon: 40, common: 20 };
    score += rarityScores[flair.rarity as keyof typeof rarityScores] || 0;
    
    // Type scoring
    const typeScores = { legendary: 50, verified: 45, premium: 40, special: 35, role: 30, milestone: 25, achievement: 20, status: 15 };
    score += typeScores[flair.type as keyof typeof typeScores] || 0;
    
    // Recency bonus (more recent = higher score)
    if (flair.earnedAt) {
      const daysSinceEarned = (Date.now() - flair.earnedAt.getTime()) / (1000 * 60 * 60 * 24);
      score += Math.max(0, 30 - daysSinceEarned); // Bonus decreases over 30 days
    }
    
    // Value bonus
    if (typeof flair.value === 'number' && flair.value > 0) {
      score += Math.min(20, Math.log10(flair.value) * 5); // Logarithmic value bonus, capped at 20
    }
    
    return score;
  },
  
  // Group flairs by type for organized display
  groupByType: <T extends { type: string }>(flairs: T[]): Record<string, T[]> => {
    return flairs.reduce((groups, flair) => {
      const type = flair.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(flair);
      return groups;
    }, {} as Record<string, T[]>);
  },
  
  // Filter flairs by rarity threshold
  filterByRarity: <T extends { rarity?: string }>(
    flairs: T[], 
    minRarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' = 'common'
  ): T[] => {
    const rarityLevels = { common: 0, uncommon: 1, rare: 2, epic: 3, legendary: 4 };
    const threshold = rarityLevels[minRarity];
    
    return flairs.filter(flair => {
      const flairLevel = rarityLevels[flair.rarity as keyof typeof rarityLevels] ?? 0;
      return flairLevel >= threshold;
    });
  },
  
  // Get appropriate tooltip delay based on flair importance
  getTooltipDelay: (flair: { type: string; rarity?: string }): number => {
    if (flair.rarity === 'legendary') return 0; // Show immediately for legendary
    if (flair.rarity === 'epic') return 100;
    if (flair.type === 'verified' || flair.type === 'premium') return 200;
    return 500; // Default delay for common flairs
  },
  
  // Generate flair ID from properties
  generateFlairId: (type: string, label: string, value?: string | number): string => {
    const sanitized = label.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const valueStr = value ? `-${value}` : '';
    return `${type}-${sanitized}${valueStr}`;
  },
  
  // Validate flair object structure
  validateFlair: (flair: any): flair is { id: string; label: string; type: string } => {
    return (
      typeof flair === 'object' &&
      flair !== null &&
      typeof flair.id === 'string' &&
      typeof flair.label === 'string' &&
      typeof flair.type === 'string'
    );
  },
  
  // Get recommended max visible count based on container width
  getRecommendedMaxVisible: (containerWidth: number, flairSize: 'xs' | 'sm' | 'default' | 'lg' | 'xl' = 'default'): number => {
    const sizeSizes = { xs: 40, sm: 48, default: 56, lg: 64, xl: 72 };
    const flairWidth = sizeSizes[flairSize];
    const estimatedFlairsPerRow = Math.floor(containerWidth / flairWidth);
    return Math.max(3, estimatedFlairsPerRow * 2); // Show 2 rows worth
  },
} as const;