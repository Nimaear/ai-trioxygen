import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Wrapper (Select root) ─────────────────────────────────────────────────

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

// ─── Trigger button ────────────────────────────────────────────────────────

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.normal,
  color: vars.color.text.default,
  backgroundColor: vars.color.surface.default,
  border: `1.5px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  outline: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease',
  WebkitTapHighlightColor: 'transparent',

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

// ─── Size variants (match Input / Button scale) ────────────────────────────

export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.sm,
    paddingInline: vars.space.sm,
    height: '2rem',
  },
  md: {
    fontSize: vars.fontSize.base,
    paddingInline: vars.space.md,
    height: '2.5rem',
  },
  lg: {
    fontSize: vars.fontSize.lg,
    paddingInline: vars.space.lg,
    height: '3rem',
  },
})

// ─── Selected value text ───────────────────────────────────────────────────

export const value = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const placeholder = style({
  color: vars.color.text.muted,
  opacity: 0.7,
})

// ─── Chevron icon ──────────────────────────────────────────────────────────

export const chevron = style({
  flexShrink: 0,
  color: vars.color.text.muted,
  transition: 'transform 180ms ease',
  marginLeft: vars.space.xs,

  selectors: {
    '[data-open] &': {
      transform: 'rotate(180deg)',
    },
  },
})

// ─── Popover ───────────────────────────────────────────────────────────────

export const popover = style({
  backgroundColor: vars.color.surface.elevated,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.lg,
  boxShadow: `0 4px 16px ${vars.color.primary.dark}18, 0 1px 4px ${vars.color.primary.dark}10`,
  padding: vars.space.xs,
  outline: 'none',
  overflowY: 'auto',
  maxHeight: '16rem',

  selectors: {
    '&[data-entering]': {
      animation: 'none',
    },
  },
})

// ─── List box ──────────────────────────────────────────────────────────────

export const listbox = style({
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
})

// ─── List box item ─────────────────────────────────────────────────────────

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  paddingInline: vars.space.sm,
  paddingBlock: vars.space.xs,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  color: vars.color.text.default,
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 100ms ease, color 100ms ease',

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.bg.muted,
    },
    '&[data-focused]': {
      backgroundColor: vars.color.bg.muted,
    },
    '&[data-selected]': {
      backgroundColor: vars.color.primary.base,
      color: vars.color.primary.contrast,
      fontWeight: vars.fontWeight.medium,
    },
    '&[data-selected][data-hovered]': {
      backgroundColor: vars.color.primary.dark,
    },
    '&[data-disabled]': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
})

// Check mark shown next to selected item
export const itemCheck = style({
  flexShrink: 0,
  opacity: 0,

  selectors: {
    '[data-selected] &': {
      opacity: 1,
    },
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

// ─── Popover width matches trigger ─────────────────────────────────────────
// react-aria-components sets --trigger-width as a CSS variable on the popover
globalStyle(`${popover}`, {
  minWidth: 'var(--trigger-width)',
})
