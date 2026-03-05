import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Root ──────────────────────────────────────────────────────────────────

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.lg,
  backgroundColor: vars.color.surface.default,
  overflow: 'hidden',
})

export const variant = styleVariants({
  outline: {
    border: `1px solid ${vars.color.border.default}`,
  },
  elevated: {
    border: `1px solid ${vars.color.border.subtle}`,
    boxShadow: `0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)`,
  },
  subtle: {
    backgroundColor: vars.color.bg.subtle,
    border: `1px solid ${vars.color.border.subtle}`,
  },
})

// ─── Size variants (shared by root, header, body, footer) ─────────────────

export const size = styleVariants({
  none: { padding: vars.space.none },
  sm: { padding: vars.space.sm },
  md: { padding: vars.space.md },
  lg: { padding: vars.space.lg },
  xl: { padding: vars.space.xl },
})

// ─── Header ────────────────────────────────────────────────────────────────

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.md,
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
})

// ─── Body ──────────────────────────────────────────────────────────────────

export const body = style({
  flex: 1,
  padding: vars.space.lg,
})

// ─── Footer ────────────────────────────────────────────────────────────────

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderTop: `1px solid ${vars.color.border.subtle}`,
})
