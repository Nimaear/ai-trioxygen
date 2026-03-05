import type React from 'react'
import {
  container,
  containerSizeVariants,
  paddingXVariants,
  paddingYVariants,
} from './layout.css'

type ContainerSize = keyof typeof containerSizeVariants
type Space = keyof typeof paddingXVariants

interface ContainerProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  /** Max-width of the content area. Defaults to 'lg' (1024 px). */
  size?: ContainerSize
  /** Horizontal padding, from the space token scale. Defaults to '4' (1 rem). */
  paddingX?: Space
  /** Vertical padding, from the space token scale */
  paddingY?: Space
  /** HTML element to render. Useful for semantic markup (main, section, article…) */
  as?: React.ElementType
}

export function Container({
  as: Tag = 'div',
  size = 'lg',
  paddingX = 'md',
  paddingY,
  children,
  ...props
}: ContainerProps) {
  const classes = [
    container,
    containerSizeVariants[size],
    paddingXVariants[paddingX],
    paddingY != null ? paddingYVariants[paddingY] : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
