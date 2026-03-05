import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Heading ───────────────────────────────────────────────────────────────

export const headingBase = style({
  margin: 0,
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.text.default,
})

export const headingLevel = styleVariants({
  1: { fontSize: vars.heading.h1.fontSize, lineHeight: vars.heading.h1.lineHeight },
  2: { fontSize: vars.heading.h2.fontSize, lineHeight: vars.heading.h2.lineHeight },
  3: { fontSize: vars.heading.h3.fontSize, lineHeight: vars.heading.h3.lineHeight },
  4: {
    fontSize: vars.heading.h4.fontSize,
    lineHeight: vars.heading.h4.lineHeight,
    letterSpacing: vars.letterSpacing.normal,
  },
  5: {
    fontSize: vars.heading.h5.fontSize,
    lineHeight: vars.heading.h5.lineHeight,
    letterSpacing: vars.letterSpacing.normal,
  },
  6: {
    fontSize: vars.heading.h6.fontSize,
    lineHeight: vars.heading.h6.lineHeight,
    letterSpacing: vars.letterSpacing.normal,
  },
})

export const headingColor = styleVariants({
  default: { color: vars.color.text.default },
  muted: { color: vars.color.text.muted },
  inverted: { color: vars.color.text.inverted },
})

// ─── Text ──────────────────────────────────────────────────────────────────

export const textBase = style({
  margin: 0,
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.normal,
  color: vars.color.text.default,
  // lineHeight is intentionally omitted — each textSize variant carries its own
  // so that components without an explicit size (e.g. Button.Label) inherit
  // the parent's line-height rather than overriding it.
})

export const textSize = styleVariants({
  xs: { fontSize: vars.fontSize.xs, lineHeight: vars.lineHeight.normal },
  sm: { fontSize: vars.fontSize.sm, lineHeight: vars.lineHeight.normal },
  base: { fontSize: vars.fontSize.base, lineHeight: vars.lineHeight.relaxed },
  lg: { fontSize: vars.fontSize.lg, lineHeight: vars.lineHeight.relaxed },
  xl: { fontSize: vars.fontSize.xl, lineHeight: vars.lineHeight.relaxed },
  '2xl': { fontSize: vars.fontSize['2xl'], lineHeight: vars.lineHeight.snug },
})

export const textColor = styleVariants({
  default: { color: vars.color.text.default },
  muted: { color: vars.color.text.muted },
  inverted: { color: vars.color.text.inverted },
  link: { color: vars.color.text.link },
  inherit: { color: 'inherit' },
})

export const textWeight = styleVariants({
  normal: { fontWeight: vars.fontWeight.normal },
  medium: { fontWeight: vars.fontWeight.medium },
  semibold: { fontWeight: vars.fontWeight.semibold },
  bold: { fontWeight: vars.fontWeight.bold },
})

export const textAlign = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
})

export const textTruncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})
