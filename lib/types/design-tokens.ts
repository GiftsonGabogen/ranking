/**
 * Design Token Types
 * 
 * This file provides comprehensive TypeScript types for the design token system.
 * These types ensure type safety when using design tokens throughout the application.
 */

import { spacing, typography, borderRadius, shadows, duration, zIndex, breakpoints } from '../design-tokens';

// Color System Types
export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type NeutralColorScale = ColorScale & {
  0: string;
  1000: string;
};

export type ChartColors = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

export type Colors = {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
  neutral: NeutralColorScale;
  chart: ChartColors;
};

// Individual color token types
export type PrimaryColorToken = keyof ColorScale;
export type SecondaryColorToken = keyof ColorScale;
export type SuccessColorToken = keyof ColorScale;
export type WarningColorToken = keyof ColorScale;
export type ErrorColorToken = keyof ColorScale;
export type NeutralColorToken = keyof NeutralColorScale;
export type ChartColorToken = keyof ChartColors;

// Spacing Types
export type SpacingScale = typeof spacing;
export type SpacingToken = keyof SpacingScale;
export type SpacingValue = SpacingScale[SpacingToken];

// Typography Types
export type FontFamily = typeof typography.fontFamily;
export type FontFamilyToken = keyof FontFamily;
export type FontFamilyValue = FontFamily[FontFamilyToken];

export type FontSize = typeof typography.fontSize;
export type FontSizeToken = keyof FontSize;
export type FontSizeValue = FontSize[FontSizeToken];

export type FontWeight = typeof typography.fontWeight;
export type FontWeightToken = keyof FontWeight;
export type FontWeightValue = FontWeight[FontWeightToken];

export type LetterSpacing = typeof typography.letterSpacing;
export type LetterSpacingToken = keyof LetterSpacing;
export type LetterSpacingValue = LetterSpacing[LetterSpacingToken];

export type LineHeight = typeof typography.lineHeight;
export type LineHeightToken = keyof LineHeight;
export type LineHeightValue = LineHeight[LineHeightToken];

export type Typography = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
};

// Border Radius Types
export type BorderRadiusScale = typeof borderRadius;
export type BorderRadiusToken = keyof BorderRadiusScale;
export type BorderRadiusValue = BorderRadiusScale[BorderRadiusToken];

// Shadow Types
export type ShadowScale = typeof shadows;
export type ShadowToken = keyof ShadowScale;
export type ShadowValue = ShadowScale[ShadowToken];

// Duration Types
export type DurationScale = typeof duration;
export type DurationToken = keyof DurationScale;
export type DurationValue = DurationScale[DurationToken];

// Z-Index Types
export type ZIndexScale = typeof zIndex;
export type ZIndexToken = keyof ZIndexScale;
export type ZIndexValue = ZIndexScale[ZIndexToken];

// Breakpoint Types
export type BreakpointScale = typeof breakpoints;
export type BreakpointToken = keyof BreakpointScale;
export type BreakpointValue = BreakpointScale[BreakpointToken];

// Comprehensive Design Token Types
export type DesignTokens = {
  colors: Colors;
  spacing: SpacingScale;
  typography: Typography;
  borderRadius: BorderRadiusScale;
  shadows: ShadowScale;
  duration: DurationScale;
  zIndex: ZIndexScale;
  breakpoints: BreakpointScale;
};

// Utility types for component props
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
export type ColorIntensity<T extends ColorVariant = ColorVariant> = 
  T extends 'neutral' ? NeutralColorToken : PrimaryColorToken;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Component variant types
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export type InputVariant = 'default' | 'destructive';
export type InputSize = 'default' | 'sm' | 'lg';

export type CardVariant = 'default' | 'outline';
export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

// Animation and transition types
export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce' | 'pulse' | 'spin';
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'in' | 'out';
export type AnimationDuration = DurationToken;

// Layout types
export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type Gap = SpacingToken;

// Grid types
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6;

// Position types
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Inset = SpacingToken | 'auto';

// Display types
export type Display = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'table' | 'hidden';

// Text types
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type TextDecoration = 'underline' | 'overline' | 'line-through' | 'no-underline';

// Border types
export type BorderWidth = '0' | '1' | '2' | '4' | '8';
export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'none';

// Overflow types
export type Overflow = 'auto' | 'hidden' | 'clip' | 'visible' | 'scroll';

// Cursor types
export type Cursor = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'help' | 'not-allowed' | 'progress' | 'cell' | 'crosshair' | 'grab' | 'grabbing';

// User select types
export type UserSelect = 'none' | 'text' | 'all' | 'auto';

// Pointer events types
export type PointerEvents = 'none' | 'auto';

// Visibility types
export type Visibility = 'visible' | 'invisible' | 'collapse';

// Opacity types
export type Opacity = '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100';

// Transform types
export type Scale = '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150';
export type Rotate = '0' | '1' | '2' | '3' | '6' | '12' | '45' | '90' | '180';
export type TransformOrigin = 'center' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';

// Transition types
export type TransitionProperty = 'none' | 'all' | 'colors' | 'opacity' | 'shadow' | 'transform';
export type TransitionTimingFunction = 'linear' | 'in' | 'out' | 'in-out';

// Filter types
export type Blur = 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type Brightness = '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150' | '200';
export type Contrast = '0' | '50' | '75' | '100' | '125' | '150' | '200';
export type Grayscale = '0' | '100';
export type Saturate = '0' | '50' | '100' | '150' | '200';

// Backdrop filter types
export type BackdropBlur = Blur;
export type BackdropBrightness = Brightness;
export type BackdropContrast = Contrast;
export type BackdropGrayscale = Grayscale;
export type BackdropSaturate = Saturate;

export default DesignTokens;