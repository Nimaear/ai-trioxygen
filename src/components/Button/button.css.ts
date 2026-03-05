import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // gap is applied separately via gapVariants from the layout system
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.none,
  letterSpacing: '-0.01em',
  borderRadius: vars.borderRadius.full,
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: [
    'background-color 120ms ease',
    'color 120ms ease',
    'border-color 120ms ease',
    'box-shadow 120ms ease',
    'opacity 120ms ease',
    'transform 80ms ease',
  ].join(', '),
  WebkitTapHighlightColor: 'transparent',
  outline: 'none',
  userSelect: 'none',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${vars.color.primary.base}`,
      outlineOffset: '2px',
      boxShadow: `0 0 0 4px rgba(0, 117, 188, 0.18)`,
    },
    '&[data-pressed]': {
      transform: 'scale(0.975)',
    },
    '&[data-disabled]': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
})

// ─── Icon wrapper ──────────────────────────────────────────────────────────

export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
})

// ─── Size variants ─────────────────────────────────────────────────────────

export const size = styleVariants({
  sm: {
    fontSize: vars.fontSize.sm,
    paddingInline: vars.space.md,
    height: '2rem',   // 32px
  },
  md: {
    fontSize: vars.fontSize.base,
    paddingInline: vars.space.lg,
    height: '2.5rem', // 40px
  },
  lg: {
    fontSize: vars.fontSize.lg,
    paddingInline: vars.space.xl,
    height: '3rem',   // 48px
  },
})

// ─── Variant styles ────────────────────────────────────────────────────────

export const variant = styleVariants({
  primary: {
    backgroundColor: vars.color.primary.base,
    color: vars.color.primary.contrast,
    borderColor: 'transparent',
    boxShadow: [
      '0 1px 3px rgba(0, 0, 0, 0.14)',
      '0 1px 8px rgba(0, 117, 188, 0.22)',
    ].join(', '),

    selectors: {
      '&[data-hovered]:not([data-disabled])': {
        backgroundColor: vars.color.primary.light,
        boxShadow: [
          '0 2px 6px rgba(0, 0, 0, 0.12)',
          '0 2px 16px rgba(0, 117, 188, 0.30)',
        ].join(', '),
      },
      '&[data-pressed]:not([data-disabled])': {
        backgroundColor: vars.color.primary.dark,
        boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.18)',
      },
    },
  },

  secondary: {
    backgroundColor: vars.color.bg.muted,
    color: vars.color.text.default,
    borderColor: 'transparent',
    boxShadow: 'none',

    selectors: {
      '&[data-hovered]:not([data-disabled])': {
        backgroundColor: vars.color.border.default,
      },
      '&[data-pressed]:not([data-disabled])': {
        backgroundColor: vars.color.border.strong,
      },
    },
  },

  ghost: {
    backgroundColor: 'transparent',
    color: vars.color.text.default,
    borderColor: 'transparent',
    boxShadow: 'none',

    selectors: {
      '&[data-hovered]:not([data-disabled])': {
        backgroundColor: vars.color.bg.subtle,
      },
      '&[data-pressed]:not([data-disabled])': {
        backgroundColor: vars.color.bg.muted,
      },
    },
  },
})
