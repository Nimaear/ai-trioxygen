import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme'

// ─── Stack ────────────────────────────────────────────────────────────────────
export const stack = style({
  display: 'flex',
  flexDirection: 'column',
})

// ─── Inline ───────────────────────────────────────────────────────────────────
export const inline = style({
  display: 'flex',
  flexDirection: 'row',
})

export const wrapStyle = style({
  flexWrap: 'wrap',
})

// ─── Shared variants ──────────────────────────────────────────────────────────

// One class per space token — usable by both Stack and Inline
export const gapVariants = styleVariants(vars.space, (value) => ({
  gap: value,
}))

export const alignVariants = styleVariants({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
  baseline: { alignItems: 'baseline' },
})

export const justifyVariants = styleVariants({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
  between: { justifyContent: 'space-between' },
  around: { justifyContent: 'space-around' },
  evenly: { justifyContent: 'space-evenly' },
})

// ─── Container ────────────────────────────────────────────────────────────────
export const container = style({
  width: '100%',
  marginInline: 'auto',
})

export const containerSizeVariants = styleVariants(
  {
    sm: '40rem', //  640 px
    md: '48rem', //  768 px
    lg: '64rem', // 1024 px
    xl: '80rem', // 1280 px
    full: '100%',
  },
  (maxWidth) => ({ maxWidth }),
)

export const paddingXVariants = styleVariants(vars.space, (value) => ({
  paddingInline: value,
}))

export const paddingYVariants = styleVariants(vars.space, (value) => ({
  paddingBlock: value,
}))
