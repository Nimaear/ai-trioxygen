import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Root wrapper ───────────────────────────────────────────────────────────

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
  width: '100%',
})

// ─── Label ──────────────────────────────────────────────────────────────────

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.default,
  lineHeight: vars.lineHeight.normal,
})

// ─── Input group (country button + number input as one field) ───────────────

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
  },
})

export const inputGroupNormal = style({
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.primary.base,
      boxShadow: `0 0 0 3px ${vars.color.primary.base}26`,
    },
  },
})

export const inputGroupInvalid = style({
  borderColor: vars.color.status.error,

  selectors: {
    '&:focus-within': {
      borderColor: vars.color.status.error,
      boxShadow: `0 0 0 3px ${vars.color.status.error}26`,
    },
  },
})

export const inputGroupDisabled = style({
  opacity: 0.45,
  cursor: 'not-allowed',
  backgroundColor: vars.color.bg.subtle,
})

// ─── Size variants (height + font-size on the group; children stretch) ──────

export const size = styleVariants({
  sm: { fontSize: vars.fontSize.sm,   height: '2rem'   },
  md: { fontSize: vars.fontSize.base, height: '2.5rem' },
  lg: { fontSize: vars.fontSize.lg,   height: '3rem'   },
})

// ─── Country trigger (left button) ──────────────────────────────────────────

// display:contents removes the Select root div's box so its Button child
// participates directly in the inputGroup flex layout.
export const selectRoot = style({
  display: 'contents',
})

export const countryTrigger = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  backgroundColor: 'transparent',
  border: 'none',
  borderRight: `1px solid ${vars.color.border.subtle}`,
  color: vars.color.text.default,
  cursor: 'pointer',
  outline: 'none',
  fontFamily: vars.fontFamily.sans,
  transition: 'background-color 120ms ease',
  WebkitTapHighlightColor: 'transparent',

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.bg.subtle,
    },
    '&[data-pressed]': {
      backgroundColor: vars.color.bg.muted,
    },
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
  },
})

export const triggerSize = styleVariants({
  sm: { gap: vars.space.xs,  paddingInline: vars.space.sm },
  md: { gap: vars.space.xs,  paddingInline: vars.space.sm },
  lg: { gap: vars.space.sm,  paddingInline: vars.space.md },
})

export const flagText = style({
  fontSize: '1.125rem',
  lineHeight: 1,
  userSelect: 'none',
})

export const dialCodeText = style({
  fontSize: 'inherit',
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.default,
  minWidth: '2.5rem',
  letterSpacing: vars.letterSpacing.normal,
})

export const chevron = style({
  color: vars.color.text.muted,
  flexShrink: 0,
  transition: 'transform 180ms ease',

  selectors: {
    '[data-open] &': {
      transform: 'rotate(180deg)',
    },
  },
})

// ─── Phone number input (right side) ────────────────────────────────────────

export const numberInput = style({
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontFamily: vars.fontFamily.sans,
  fontSize: 'inherit',
  color: vars.color.text.default,
  WebkitTapHighlightColor: 'transparent',

  '::placeholder': {
    color: vars.color.text.muted,
    opacity: 0.7,
  },

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

export const numberInputSize = styleVariants({
  sm: { paddingInline: vars.space.sm },
  md: { paddingInline: vars.space.sm },
  lg: { paddingInline: vars.space.md },
})

// ─── Popover ────────────────────────────────────────────────────────────────

export const popover = style({
  backgroundColor: vars.color.surface.elevated,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.lg,
  boxShadow: `0 4px 16px ${vars.color.primary.dark}18, 0 1px 4px ${vars.color.primary.dark}10`,
  padding: vars.space.xs,
  outline: 'none',
  overflowY: 'auto',
  maxHeight: '18rem',
  minWidth: '280px',
})

// ─── List box ───────────────────────────────────────────────────────────────

export const listbox = style({
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
})

// ─── List item ──────────────────────────────────────────────────────────────

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  paddingInline: vars.space.sm,
  paddingBlock: vars.space.xs,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
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
  },
})

export const itemFlag = style({
  fontSize: '1.125rem',
  lineHeight: 1,
  flexShrink: 0,
  userSelect: 'none',
})

export const itemName = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const itemDialCode = style({
  flexShrink: 0,
  fontSize: vars.fontSize.xs,
  fontFamily: vars.fontFamily.mono,
  color: vars.color.text.muted,

  selectors: {
    '[data-selected] &': {
      color: vars.color.primary.contrast,
      opacity: 0.8,
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

// ─── Description + error ────────────────────────────────────────────────────

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.muted,
  lineHeight: vars.lineHeight.normal,
})

export const errorMessage = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.status.error,
  lineHeight: vars.lineHeight.normal,
})

// Ensure popover isn't forced to trigger width (it's a narrow button)
globalStyle(`${popover}`, {
  minWidth: '280px',
})
