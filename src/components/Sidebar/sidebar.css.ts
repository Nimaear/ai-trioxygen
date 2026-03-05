import { style } from '@vanilla-extract/css'
import { vars } from '@/theme'

export const sidebar = style({
  position: 'sticky',
  top: 0,
  height: '100vh',
  width: '220px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  borderRight: `1px solid ${vars.color.border.subtle}`,
  backgroundColor: vars.color.bg.subtle,
  overflowY: 'auto',
  padding: vars.space.md,
})

// ─── Brand ─────────────────────────────────────────────────────────────────

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.sm}`,
  marginBottom: vars.space.md,
  borderRadius: vars.borderRadius.md,
  textDecoration: 'none',
  color: vars.color.text.default,
  transition: 'background-color 120ms ease',

  selectors: {
    '&:hover': {
      backgroundColor: vars.color.bg.muted,
    },
  },
})

export const brandMark = style({
  width: '24px',
  height: '24px',
  borderRadius: vars.borderRadius.sm,
  backgroundColor: vars.color.primary.base,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const brandMarkInner = style({
  width: '10px',
  height: '10px',
  borderRadius: '2px',
  backgroundColor: vars.color.primary.contrast,
  opacity: 0.9,
})

export const brandName = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.text.default,
})

// ─── Divider ───────────────────────────────────────────────────────────────

export const sidebarDivider = style({
  height: '1px',
  backgroundColor: vars.color.border.subtle,
  marginBlock: vars.space.sm,
  marginInline: vars.space.sm,
})

// ─── Section label ─────────────────────────────────────────────────────────

export const sectionLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.text.muted,
  padding: `${vars.space.sm} ${vars.space.sm}`,
  marginBottom: vars.space.xs,
})

// ─── Nav items ─────────────────────────────────────────────────────────────

export const navItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.muted,
  textDecoration: 'none',
  transition: 'color 120ms ease, background-color 120ms ease',
  cursor: 'pointer',
  // Inset left border for active state (applied via activeClass)
  boxShadow: 'inset 0 0 0 0 transparent',

  selectors: {
    '&:hover': {
      color: vars.color.text.default,
      backgroundColor: vars.color.bg.muted,
    },
  },
})

export const navItemActive = style({
  color: vars.color.primary.base,
  backgroundColor: vars.color.bg.muted,
  fontWeight: vars.fontWeight.semibold,
  boxShadow: `inset 2px 0 0 ${vars.color.primary.base}`,
})

export const sidebarFooter = style({
  marginTop: 'auto',
  paddingTop: vars.space.sm,
  borderTop: `1px solid ${vars.color.border.subtle}`,
})

export const navItemIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  opacity: 0.6,

  selectors: {
    [`${navItemActive} &`]: {
      opacity: 1,
    },
  },
})
