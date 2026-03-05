import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/theme'

const fadeUp = keyframes({
  from: { opacity: 0, transform: 'translateY(16px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

// ─── Hero ──────────────────────────────────────────────────────────────────

export const hero = style({
  paddingBottom: vars.space['3xl'],
  marginBottom: vars.space['3xl'],
  borderBottom: `1px solid ${vars.color.border.subtle}`,
})

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.primary.base,
  marginBottom: vars.space.lg,
  animation: `${fadeUp} 400ms ease both`,
})

export const badgeDot = style({
  width: '6px',
  height: '6px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.primary.light,
  flexShrink: 0,
})

export const heroTitle = style({
  fontFamily: '"Georgia", "Times New Roman", serif',
  fontSize: 'clamp(3rem, 7vw, 4.5rem)',
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.text.default,
  marginBottom: vars.space.lg,
  animation: `${fadeUp} 400ms 60ms ease both`,
})

export const heroAccent = style({
  color: vars.color.primary.base,
  fontStyle: 'italic',
})

export const heroLead = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.muted,
  maxWidth: '36rem',
  marginBottom: vars.space['2xl'],
  animation: `${fadeUp} 400ms 120ms ease both`,
})

export const heroDemos = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.space.sm,
  animation: `${fadeUp} 400ms 180ms ease both`,
})

// ─── Highlights ────────────────────────────────────────────────────────────

export const highlights = style({
  display: 'flex',
  gap: vars.space['2xl'],
  marginBottom: vars.space['3xl'],
  animation: `${fadeUp} 400ms 220ms ease both`,
})

export const highlightItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
})

export const highlightValue = style({
  fontFamily: '"Georgia", "Times New Roman", serif',
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.none,
  color: vars.color.text.default,
})

export const highlightLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  letterSpacing: vars.letterSpacing.wide,
  color: vars.color.text.muted,
  textTransform: 'uppercase',
})

// ─── Component grid ────────────────────────────────────────────────────────

export const gridSection = style({
  animation: `${fadeUp} 400ms 260ms ease both`,
})

export const gridLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.text.muted,
  marginBottom: vars.space.lg,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
})

export const gridLabelLine = style({
  flex: 1,
  height: '1px',
  backgroundColor: vars.color.border.subtle,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
  '@media': {
    '(max-width: 540px)': { gridTemplateColumns: '1fr' },
  },
})

export const componentCard = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.surface.default,
  textDecoration: 'none',
  color: 'inherit',
  transition: 'border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease',
  overflow: 'hidden',

  selectors: {
    '&:hover': {
      borderColor: vars.color.primary.base,
      boxShadow: `0 4px 16px rgba(0, 117, 188, 0.10)`,
      transform: 'translateY(-1px)',
    },
  },
})

export const componentCardPreview = style({
  backgroundColor: vars.color.bg.subtle,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  padding: vars.space.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  minHeight: '80px',
  flexWrap: 'wrap',
})

export const componentCardBody = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
})

export const componentCardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderTop: `1px solid ${vars.color.border.subtle}`,
})

export const componentCardArrow = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.color.text.muted,
  transition: 'color 150ms ease, transform 150ms ease',

  selectors: {
    [`${componentCard}:hover &`]: {
      color: vars.color.primary.base,
      transform: 'translateX(3px)',
    },
  },
})
