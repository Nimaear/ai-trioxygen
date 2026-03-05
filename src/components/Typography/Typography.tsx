import type React from 'react'
import {
  headingBase,
  headingColor,
  headingLevel,
  textAlign,
  textBase,
  textColor,
  textSize,
  textTruncate,
  textWeight,
} from './typography.css'

// ─── Heading ───────────────────────────────────────────────────────────────
// Visual scale is controlled by `level`. The rendered element defaults to the
// matching h1–h6 tag but can be overridden with `as` to decouple semantics
// from presentation (e.g. <Heading level={3} as="h2"> for correct outline).

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span'

export interface HeadingProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  'className'
> {
  /** Visual size level — maps to the heading token scale. @default 2 */
  level?: HeadingLevel
  /** Rendered HTML element. Defaults to the matching h{level} tag. */
  as?: HeadingAs
  /** Text color. @default 'default' */
  color?: keyof typeof headingColor
}

export function Heading({ level = 2, as, color, ...props }: HeadingProps) {
  const Tag = (as ?? `h${level}`) as React.ElementType
  const classes = [
    headingBase,
    headingLevel[level],
    color && headingColor[color],
  ]
    .filter(Boolean)
    .join(' ')
  return <Tag className={classes} {...props} />
}

// ─── Text ──────────────────────────────────────────────────────────────────
// Inline text primitive. Defaults to <span>. For block paragraphs use the
// Paragraph component instead.

type TextAs =
  | 'span'
  | 'p'
  | 'div'
  | 'label'
  | 'legend'
  | 'strong'
  | 'em'
  | 'small'
  | 'li'
  | 'dt'
  | 'dd'

export interface TextProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  'className'
> {
  /** Rendered HTML element. @default 'span' */
  as?: TextAs
  /**
   * Font size — maps to the fontSize token scale.
   * When omitted no font-size or line-height class is applied, so the element
   * inherits its parent's values. Useful inside Button.Label, table cells, etc.
   * @default 'base'
   */
  size?: keyof typeof textSize
  /** Text color. @default 'default' */
  color?: keyof typeof textColor
  /** Font weight. Unset by default. */
  weight?: keyof typeof textWeight
  /** Text alignment. Unset by default. */
  align?: keyof typeof textAlign
  /** Single-line truncation with ellipsis. */
  truncate?: boolean
}

export function Text({
  as: Tag = 'span',
  size = 'base',
  color = 'default',
  weight,
  align,
  truncate,
  ...props
}: TextProps) {
  const classes = [
    textBase,
    textSize[size],
    textColor[color],
    weight && textWeight[weight],
    align && textAlign[align],
    truncate && textTruncate,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes} {...props} />
}

// ─── Paragraph ─────────────────────────────────────────────────────────────
// Block-level text. Thin wrapper over Text with `as` fixed to "p".
// Accepts all Text props except `as`.

export type ParagraphProps = Omit<TextProps, 'as'>

export function Paragraph(props: ParagraphProps) {
  return <Text as="p" {...props} />
}
