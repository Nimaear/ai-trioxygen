import { style } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Group ────────────────────────────────────────────────────────────────────

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.color.border.default}`,
  overflow: 'hidden',
})

// ─── Item ─────────────────────────────────────────────────────────────────────

export const item = style({
  borderBottom: `1px solid ${vars.color.border.subtle}`,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
})

// ─── Trigger ─────────────────────────────────────────────────────────────────

export const triggerHeading = style({
  margin: 0,
  padding: 0,
})

export const triggerButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: vars.fontFamily.sans,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.default,
  textAlign: 'left',
  gap: vars.space.md,
  transition: 'background-color 120ms ease',
  outline: 'none',

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.bg.subtle,
    },
    '&[data-pressed]': {
      backgroundColor: vars.color.bg.muted,
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${vars.color.primary.base}`,
      outlineOffset: '-2px',
    },
  },
})

// ─── Chevron icon ─────────────────────────────────────────────────────────────

export const chevron = style({
  flexShrink: 0,
  color: vars.color.text.muted,
  transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), color 120ms ease',

  selectors: {
    [`${item}[data-expanded] &`]: {
      transform: 'rotate(180deg)',
      color: vars.color.primary.base,
    },
  },
})

// ─── Panel ────────────────────────────────────────────────────────────────────
// The outer element is the animated grid row. By overriding [hidden] we keep
// display: grid so the closing transition plays before content disappears.
// grid-template-rows: 0fr collapses the inner div to zero height; 1fr expands it.

export const panel = style({
  display: 'grid',
  gridTemplateRows: '0fr',
  transition: 'grid-template-rows 280ms cubic-bezier(0.16, 1, 0.3, 1)',

  selectors: {
    // Keep in flow while hidden so the closing animation plays
    '&[hidden]': {
      display: 'grid',
    },
    [`${item}[data-expanded] &`]: {
      gridTemplateRows: '1fr',
    },
  },
})

// Inner wrapper — must have overflow: hidden and min-height: 0 for the
// grid-row trick to clip content correctly during the transition.

export const panelInner = style({
  overflow: 'hidden',
  minHeight: 0,
  padding: `0 ${vars.space.lg} 0`,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.muted,
  // Animate padding so it appears/disappears with the content
  paddingBottom: 0,
  transition: 'padding-bottom 280ms cubic-bezier(0.16, 1, 0.3, 1)',

  selectors: {
    [`${item}[data-expanded] &`]: {
      paddingBottom: vars.space.md,
    },
  },
})
