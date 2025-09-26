"use client"

import * as React from "react"
import { cn, typographyClasses, spacingClasses } from "@/lib/design-token-utils"
import { colors, spacing, borderRadius, shadows, animation } from "@/lib/design-tokens"

export interface RadioProps {
  id?: string
  name?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  children?: React.ReactNode
  className?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, value, checked, disabled, onChange, children, className, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.checked)
    }

    return (
      <label
        className={cn(
          "group flex items-center cursor-pointer select-none relative",
          spacingClasses.gap.md,
          disabled && "cursor-not-allowed",
          className
        )}
        style={{ overflow: 'visible' }}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute opacity-0 w-0 h-0 peer"
          {...props}
        />
        
        <div className="relative" style={{ overflow: 'visible' }}>
          {/* Shadow glow effect - close to radio button */}
          <div
            id="glow"
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              width: spacing['5'], // 20px - closer to radio size
              height: spacing['5'],
              opacity: checked ? 1 : 0,
              transform: `translate(-50%, -50%) ${checked ? 'scale(1.2)' : 'scale(0.8)'}`,
              background: checked 
                ? `radial-gradient(circle, color-mix(in oklch, ${colors.primary[500]} 20%, transparent) 0%, color-mix(in oklch, ${colors.primary[500]} 10%, transparent) 50%, transparent 70%)`
                : 'transparent',
              boxShadow: checked 
                ? `0 0 ${spacing['4']} color-mix(in oklch, ${colors.primary[500]} 60%, transparent), 0 0 ${spacing['8']} color-mix(in oklch, ${colors.primary[500]} 30%, transparent)`
                : 'none',
              borderRadius: borderRadius.full,
              zIndex: 0,
              transitionDuration: animation.duration[500],
              transitionTimingFunction: animation.easing.easeInOutCubic,
            }}
          />
          
          <div
            className="relative flex items-center justify-center flex-shrink-0 rounded-full border-2 transition-all duration-300"
            style={{
              width: spacing['5'], // 20px
              height: spacing['5'],
              backgroundColor: disabled ? colors.neutral[100] : colors.neutral[0], // Disabled background
              borderColor: disabled 
                ? colors.neutral[300]
                : checked ? colors.primary[500] : colors.neutral[400],
              opacity: disabled ? 0.6 : 1,
              transform: checked 
                ? 'scale(0.9)' 
                : isHovered && !disabled && !checked 
                  ? 'scale(1.1)' 
                  : 'scale(1)',
              transitionTimingFunction: animation.easing.easeInOutBack,
              zIndex: 10,
              position: 'relative',
            }}
          >
            {/* Inner dot */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: spacing['2.5'], // 10px  
                height: spacing['2.5'],
                backgroundColor: checked 
                  ? disabled 
                    ? colors.neutral[400] 
                    : colors.primary[500] 
                  : 'transparent',
                transform: `translate(-50%, -50%) ${checked ? 'scale(1)' : 'scale(0)'}`,
                transitionDuration: animation.duration[300],
                transitionTimingFunction: animation.easing.easeInOutCubic,
                zIndex: 20,
              }}
            />
          </div>
        </div>
        
        {children && (
          <span
            className={cn(
              "transition-colors duration-300",
              typographyClasses.size.base
            )}
            style={{
              color: disabled 
                ? colors.neutral[400]
                : checked 
                  ? colors.neutral[900] 
                  : isHovered && !checked 
                    ? colors.neutral[800]
                    : colors.neutral[600],
              fontWeight: checked ? '600' : '500',
              opacity: disabled ? 0.6 : 1,
            }}
          >
            {children}
          </span>
        )}
      </label>
    )
  }
)

Radio.displayName = "Radio"

export interface RadioGroupProps {
  name: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, value, defaultValue, onValueChange, disabled, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn("space-y-3", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Radio) {
            const radioValue = (child.props as RadioProps).value || ""
            return React.cloneElement(child, {
              value: radioValue,
              checked: currentValue === radioValue,
              disabled: disabled || (child.props as RadioProps).disabled,
              onChange: () => handleValueChange(radioValue),
            } as RadioProps)
          }
          return child
        })}
      </div>
    )
  }
)

RadioGroup.displayName = "RadioGroup"

export { Radio, RadioGroup }