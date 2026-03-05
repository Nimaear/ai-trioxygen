import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Wrapper (TextField root) ──────────────────────────────────────────────

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
  width: '100%',
})

// ─── Label ─────────────────────────────────────────────────────────────────

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.default,
  lineHeight: vars.lineHeight.normal,

  selectors: {
    '[data-disabled] &': {
      opacity: 0.45,
    },
  },
})

// ─── Input element ─────────────────────────────────────────────────────────

export const input = style({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.none,
  color: vars.color.text.default,
  backgroundColor: vars.color.surface.default,
  border: `1.5px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  outline: 'none',
  transition:
    'border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease',
  WebkitTapHighlightColor: 'transparent',

  '::placeholder': {
    color: vars.color.text.muted,
    opacity: 0.7,
  },

  selectors: {
    '&[data-hovered]': {
      borderColor: vars.color.border.strong,
    },
    '&[data-focused]': {
      borderColor: vars.color.primary.base,
      boxShadow: `0 0 0 3px ${vars.color.primary.base}26`,
    },
    '&[data-invalid]': {
      borderColor: vars.color.status.error,
    },
    '&[data-invalid][data-focused]': {
      borderColor: vars.color.status.error,
      boxShadow: `0 0 0 3px ${vars.color.status.error}26`,
    },
    '&[data-disabled]': {
      opacity: 0.45,
      cursor: 'not-allowed',
      backgroundColor: vars.color.bg.subtle,
    },
  },
})

// ─── Size variants (heights + padding match Button) ────────────────────────

export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.sm,
    paddingInline: vars.space.sm,
    height: '2rem', // 32px — matches Button sm
  },
  md: {
    fontSize: vars.fontSize.base,
    paddingInline: vars.space.md,
    height: '2.5rem', // 40px — matches Button md
  },
  lg: {
    fontSize: vars.fontSize.lg,
    paddingInline: vars.space.lg,
    height: '3rem', // 48px — matches Button lg
  },
})

// ─── Description ───────────────────────────────────────────────────────────

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.muted,
  lineHeight: vars.lineHeight.normal,
})

// ─── Error message ─────────────────────────────────────────────────────────

export const errorMessage = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.status.error,
  lineHeight: vars.lineHeight.normal,
})
