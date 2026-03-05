import { style } from '@vanilla-extract/css'
import { vars } from '@/theme'

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  paddingBottom: vars.space.lg,
  marginBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
})
