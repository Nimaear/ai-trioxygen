import type React from 'react'
import {
  alignVariants,
  gapVariants,
  justifyVariants,
  stack,
} from './layout.css'

type Space = keyof typeof gapVariants
type Align = keyof typeof alignVariants
type Justify = keyof typeof justifyVariants

interface StackProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  /** Gap between children, from the space token scale */
  gap?: Space
  /** Cross-axis alignment (align-items). Defaults to 'stretch'. */
  align?: Align
  /** Main-axis alignment (justify-content) */
  justify?: Justify
  /** HTML element to render. Useful for semantic markup (section, ul, nav…) */
  as?: React.ElementType
}

export function Stack({
  as: Tag = 'div',
  gap = 'sm',
  align,
  justify,
  children,
  ...props
}: StackProps) {
  const classes = [
    stack,
    gapVariants[gap],
    align != null ? alignVariants[align] : null,
    justify != null ? justifyVariants[justify] : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
