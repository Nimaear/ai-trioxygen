import { Link } from 'react-aria-components'
import type { LinkProps } from 'react-aria-components'
import { gapVariants } from '@components/layout/layout.css'
import {
  base,
  size as sizeVariants,
  variant as variantStyles,
} from './button.css'

export interface LinkButtonProps extends Omit<LinkProps, 'className'> {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  /** @default 'xs' */
  gap?: keyof typeof gapVariants
}

export function LinkButton({ variant = 'primary', size = 'md', gap = 'xs', ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={[base, sizeVariants[size], variantStyles[variant], gapVariants[gap]].join(' ')}
    />
  )
}
