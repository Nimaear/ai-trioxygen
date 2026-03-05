import type React from 'react'
import {
  alignVariants,
  gapVariants,
  inline,
  justifyVariants,
  wrapStyle,
} from './layout.css'

type Space = keyof typeof gapVariants
type Align = keyof typeof alignVariants
type Justify = keyof typeof justifyVariants

interface InlineProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  /** Gap between children, from the space token scale */
  gap?: Space
  /** Cross-axis alignment (align-items). Defaults to 'center'. */
  align?: Align
  /** Main-axis alignment (justify-content) */
  justify?: Justify
  /** Allow children to wrap to the next line */
  wrap?: boolean
  /** HTML element to render. Useful for semantic markup (nav, ul, header…) */
  as?: React.ElementType
}

export function Inline({
  as: Tag = 'div',
  gap = 'xs',
  align = 'center',
  justify,
  wrap = false,
  children,
  ...props
}: InlineProps) {
  const classes = [
    inline,
    gapVariants[gap],
    alignVariants[align],
    justify != null ? justifyVariants[justify] : null,
    wrap ? wrapStyle : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
