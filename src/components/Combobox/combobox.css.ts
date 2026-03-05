import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Wrapper (ComboBox root) ───────────────────────────────────────────────

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

// ─── Input group (input + toggle button as one field) ─────────────────────

export const inputGroup = style({
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: vars.color.surface.default,
  border: `1.5px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
  transition: 'border-color 120ms ease, box-shadow 120ms ease, opacity 120ms ease',

  selectors: {
    '&[data-hovered]': {
      borderColor: vars.color.border.strong,
    },
    '&[data-focus-within]': {
      borderColor: vars.color.primary.base,
      boxShadow: `0 0 0 3px ${vars.color.primary.base}26`,
    },
    '&[data-invalid]': {
      borderColor: vars.color.status.error,
    },
    '&[data-invalid][data-focus-within]': {
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

// ─── Text input ────────────────────────────────────────────────────────────

export const input = style({
  flex: 1,
  minWidth: 0,
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.normal,
  color: vars.color.text.default,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',

  '::placeholder': {
    color: vars.color.text.muted,
    opacity: 0.7,
  },

  selectors: {
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
  },
})

// ─── Toggle button ─────────────────────────────────────────────────────────

export const toggleButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: 'transparent',
  border: 'none',
  borderLeft: `1px solid ${vars.color.border.subtle}`,
  color: vars.color.text.muted,
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 120ms ease, color 120ms ease',
  WebkitTapHighlightColor: 'transparent',

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.bg.subtle,
      color: vars.color.text.default,
    },
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
  },
})

export const chevron = style({
  transition: 'transform 180ms ease',

  selectors: {
    '[data-open] &': {
      transform: 'rotate(180deg)',
    },
  },
})

// ─── Size variants ─────────────────────────────────────────────────────────

export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.sm,
    height: '2rem',
  },
  md: {
    fontSize: vars.fontSize.base,
    height: '2.5rem',
  },
  lg: {
    fontSize: vars.fontSize.lg,
    height: '3rem',
  },
})

export const inputSize = styleVariants({
  sm: { paddingInline: vars.space.sm },
  md: { paddingInline: vars.space.md },
  lg: { paddingInline: vars.space.lg },
})

export const toggleSize = styleVariants({
  sm: { width: '2rem' },
  md: { width: '2.5rem' },
  lg: { width: '3rem' },
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
})

globalStyle(`${popover}`, {
  minWidth: 'var(--trigger-width)',
})

// ─── List box ──────────────────────────────────────────────────────────────

export const listbox = style({
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
})

export const emptyState = style({
  padding: `${vars.space.sm} ${vars.space.sm}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.text.muted,
  textAlign: 'center',
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
