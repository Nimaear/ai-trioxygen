import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { vars } from '@/theme'

export const fadeUp = keyframes({
  from: { opacity: 0, transform: 'translateY(12px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

// ─── Page shell ────────────────────────────────────────────────────────────

export const pageLayout = style({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: vars.color.bg.page,
})

export const page = style({
  flex: 1,
  minWidth: 0,
  paddingBlock: vars.space['3xl'],
  paddingInline: vars.space.xl,
})

export const inner = style({
  maxWidth: '56rem',
  marginInline: 'auto',
})

// ─── Hero ──────────────────────────────────────────────────────────────────

export const eyebrow = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.primary.base,
  marginBottom: vars.space.md,
  animation: `${fadeUp} 400ms ease both`,
})

export const eyebrowDot = style({
  width: '6px',
  height: '6px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.primary.light,
})

export const title = style({
  fontFamily: '"Georgia", "Times New Roman", serif',
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.text.default,
  marginBottom: vars.space.md,
  animation: `${fadeUp} 400ms 60ms ease both`,
})

export const titleAccent = style({
  color: vars.color.primary.base,
  fontStyle: 'italic',
})

export const lead = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.muted,
  maxWidth: '38rem',
  marginBottom: vars.space['2xl'],
  animation: `${fadeUp} 400ms 120ms ease both`,
})

export const divider = style({
  height: '1px',
  backgroundColor: vars.color.border.subtle,
  marginBottom: vars.space['2xl'],
  animation: `${fadeUp} 400ms 160ms ease both`,
})

// ─── Sections ──────────────────────────────────────────────────────────────

export const section = style({
  marginBottom: vars.space['2xl'],
  animation: `${fadeUp} 400ms 200ms ease both`,
})

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space.md,
  marginBottom: vars.space.lg,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.text.muted,
  whiteSpace: 'nowrap',
})

export const sectionLine = style({
  flex: 1,
  height: '1px',
  backgroundColor: vars.color.border.subtle,
})

// ─── Code block ────────────────────────────────────────────────────────────

export const codeBlock = style({
  backgroundColor: vars.color.bg.muted,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  fontFamily: vars.fontFamily.mono,
  fontSize: vars.fontSize.sm,
  color: vars.color.text.muted,
  overflowX: 'auto',
  lineHeight: vars.lineHeight.relaxed,
  whiteSpace: 'pre',
})

globalStyle(`${codeBlock} .kw`, { color: vars.color.primary.base })
globalStyle(`${codeBlock} .str`, { color: vars.color.status.success })
globalStyle(`${codeBlock} .cmt`, { color: vars.color.border.strong })

// ─── Matrix ────────────────────────────────────────────────────────────────

export const matrixGrid = style({
  display: 'grid',
  gap: vars.space.md,
  alignItems: 'center',
})

export const matrixRowLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.muted,
  letterSpacing: vars.letterSpacing.wide,
  paddingRight: vars.space.md,
  whiteSpace: 'nowrap',
})

export const matrixColLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.muted,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  textAlign: 'center',
})

export const matrixCell = style({
  display: 'flex',
  justifyContent: 'center',
})

// ─── Grid ──────────────────────────────────────────────────────────────────

export const grid2 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.lg,
  '@media': { '(max-width: 640px)': { gridTemplateColumns: '1fr' } },
})

export const grid3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space.lg,
  '@media': { '(max-width: 640px)': { gridTemplateColumns: '1fr' } },
})

export const gridAuto = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
  gap: vars.space.lg,
})

// ─── Row ───────────────────────────────────────────────────────────────────

export const showcaseRowBase = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  alignItems: 'center',
})

export const showcaseRowAlignEnd = style({
  alignItems: 'flex-end',
})

export const showcaseRowSpaceBetween = style({
  justifyContent: 'space-between',
  width: '100%',
})

// ─── Panel ─────────────────────────────────────────────────────────────────

export const showcasePanel = style({
  backgroundColor: vars.color.bg.subtle,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.space.lg,
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.md,
  alignItems: 'center',
})

// ─── Stack ─────────────────────────────────────────────────────────────────

export const showcaseStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
})

// ─── Demo card ─────────────────────────────────────────────────────────────

export const showcaseDemoCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  padding: vars.space.lg,
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.color.border.default}`,
  backgroundColor: vars.color.surface.elevated,
})

// ─── Link ──────────────────────────────────────────────────────────────────

export const showcaseLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.link,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
})
