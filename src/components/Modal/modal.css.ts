import { keyframes, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Keyframes ────────────────────────────────────────────────────────────────

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const slideIn = keyframes({
  from: { opacity: 0, transform: 'translateY(-12px) scale(0.97)' },
  to: { opacity: 1, transform: 'translateY(0) scale(1)' },
})

const slideOut = keyframes({
  from: { opacity: 1, transform: 'translateY(0) scale(1)' },
  to: { opacity: 0, transform: 'translateY(-12px) scale(0.97)' },
})

// ─── Overlay ─────────────────────────────────────────────────────────────────

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.space.lg,
  backgroundColor: 'rgba(13, 21, 32, 0.55)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',

  selectors: {
    '&[data-entering]': {
      animation: `${fadeIn} 180ms ease`,
    },
    '&[data-exiting]': {
      animation: `${fadeOut} 150ms ease`,
    },
  },
})

// ─── Panel ────────────────────────────────────────────────────────────────────

export const panel = style({
  position: 'relative',
  backgroundColor: vars.color.surface.default,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.color.border.subtle}`,
  boxShadow: [
    '0 8px 32px rgba(0, 0, 0, 0.18)',
    '0 2px 8px rgba(0, 0, 0, 0.10)',
  ].join(', '),
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',

  selectors: {
    '&[data-entering]': {
      animation: `${slideIn} 220ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-exiting]': {
      animation: `${slideOut} 160ms ease`,
    },
  },
})

// ─── Size variants ────────────────────────────────────────────────────────────

export const size = styleVariants({
  sm: { maxWidth: '28rem' },
  md: { maxWidth: '36rem' },
  lg: { maxWidth: '48rem' },
  full: { maxWidth: '100%', margin: vars.space.lg },
})

// ─── Header ───────────────────────────────────────────────────────────────────

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.md,
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  flexShrink: 0,
})

// ─── Title ────────────────────────────────────────────────────────────────────

export const titleStyle = style({
  fontFamily: vars.fontFamily.sans,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  color: vars.color.text.default,
  letterSpacing: vars.letterSpacing.tight,
  margin: 0,
  flex: 1,
})

// ─── Close button ─────────────────────────────────────────────────────────────

export const closeButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  borderRadius: vars.borderRadius.md,
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.text.muted,
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'background-color 120ms ease, color 120ms ease',
  outline: 'none',

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.bg.muted,
      color: vars.color.text.default,
    },
    '&[data-pressed]': {
      backgroundColor: vars.color.border.default,
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${vars.color.primary.base}`,
      outlineOffset: '2px',
    },
  },
})

// ─── Body ─────────────────────────────────────────────────────────────────────

export const body = style({
  padding: `${vars.space.lg} ${vars.space.xl}`,
  flex: 1,
  overflowY: 'auto',
  color: vars.color.text.muted,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed,
})

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderTop: `1px solid ${vars.color.border.subtle}`,
  flexShrink: 0,
})
