import type React from 'react'
import {
  body,
  footer,
  header,
  root,
  size as sizeVariants,
  variant as variantStyles,
} from './card.css'

type Size = keyof typeof sizeVariants

// ─── Card ──────────────────────────────────────────────────────────────────

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  /** @default 'outline' */
  variant?: 'outline' | 'elevated' | 'subtle'
  size?: Size
}

export function Card({ variant = 'outline', size, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[root, variantStyles[variant], size != null ? sizeVariants[size] : null]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

// ─── CardHeader ────────────────────────────────────────────────────────────

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {}

export function CardHeader(props: CardHeaderProps) {
  return <div {...props} className={header} />
}

// ─── CardBody ──────────────────────────────────────────────────────────────

export interface CardBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  size?: Size
}

export function CardBody({ size = 'lg', ...props }: CardBodyProps) {
  return <div {...props} className={[body, sizeVariants[size]].join(' ')} />
}

// ─── CardFooter ────────────────────────────────────────────────────────────

export interface CardFooterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {}

export function CardFooter(props: CardFooterProps) {
  return <div {...props} className={footer} />
}
