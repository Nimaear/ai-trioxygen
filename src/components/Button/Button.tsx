import type React from 'react'
import { Button as RACButton } from 'react-aria-components'
import type { ButtonProps as RACButtonProps } from 'react-aria-components'
import { Text } from '@components/Typography'
import { gapVariants } from '@components/layout/layout.css'
import {
  base,
  iconWrapper,
  size as sizeVariants,
  variant as variantStyles,
} from './button.css'

// ─── Root ──────────────────────────────────────────────────────────────────

export interface ButtonProps extends Omit<RACButtonProps, 'className'> {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Gap between children (icon, label, etc.) using the layout gap scale.
   * @default 'xs'
   */
  gap?: keyof typeof gapVariants
}

export function Button({ variant = 'primary', size = 'md', gap = 'xs', ...props }: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={[base, sizeVariants[size], variantStyles[variant], gapVariants[gap]].join(' ')}
    />
  )
}

// ─── Label ─────────────────────────────────────────────────────────────────
// Renders button text using the typography system. Inherits font-size and
// color from the parent button so it works across all variants and sizes.

interface LabelProps {
  children: React.ReactNode
}

Button.Label = function Label({ children }: LabelProps) {
  return (
    <Text color="inherit" weight="medium">
      {children}
    </Text>
  )
}

// ─── Icon ──────────────────────────────────────────────────────────────────
// Wraps any SVG icon (e.g. from lucide-react) and sizes it to 1em so it
// scales automatically with the button's size variant.

Button.Icon = function Icon({ children }: { children: React.ReactNode }) {
  return <span className={iconWrapper}>{children}</span>
}

Button.displayName = 'Button'
