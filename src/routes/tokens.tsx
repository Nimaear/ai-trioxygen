import { createFileRoute } from '@tanstack/react-router'
import { vars } from '@/theme'
import {
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
} from '@/styles/Showcase'

export const Route = createFileRoute('/tokens')({ component: TokensPage })

// ─── Color tokens ────────────────────────────────────────────────────────────

const COLOR_GROUPS = [
  {
    label: 'Primary',
    tokens: [
      { name: 'base', value: vars.color.primary.base },
      { name: 'light', value: vars.color.primary.light },
      { name: 'dark', value: vars.color.primary.dark },
      { name: 'contrast', value: vars.color.primary.contrast },
    ],
  },
  {
    label: 'Accent',
    tokens: [
      { name: 'base', value: vars.color.accent.base },
      { name: 'contrast', value: vars.color.accent.contrast },
    ],
  },
  {
    label: 'Text',
    tokens: [
      { name: 'default', value: vars.color.text.default },
      { name: 'muted', value: vars.color.text.muted },
      { name: 'inverted', value: vars.color.text.inverted },
      { name: 'link', value: vars.color.text.link },
      { name: 'linkHover', value: vars.color.text.linkHover },
    ],
  },
  {
    label: 'Background',
    tokens: [
      { name: 'page', value: vars.color.bg.page },
      { name: 'subtle', value: vars.color.bg.subtle },
      { name: 'muted', value: vars.color.bg.muted },
    ],
  },
  {
    label: 'Border',
    tokens: [
      { name: 'default', value: vars.color.border.default },
      { name: 'subtle', value: vars.color.border.subtle },
      { name: 'strong', value: vars.color.border.strong },
    ],
  },
  {
    label: 'Surface',
    tokens: [
      { name: 'default', value: vars.color.surface.default },
      { name: 'elevated', value: vars.color.surface.elevated },
      { name: 'overlay', value: vars.color.surface.overlay },
    ],
  },
  {
    label: 'Status',
    tokens: [
      { name: 'success', value: vars.color.status.success },
      { name: 'warning', value: vars.color.status.warning },
      { name: 'error', value: vars.color.status.error },
      { name: 'info', value: vars.color.status.info },
    ],
  },
]

function ColorSwatch({
  group,
  name,
  value,
}: {
  group: string
  name: string
  value: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div
        style={{
          height: 52,
          borderRadius: 8,
          backgroundColor: value,
          border: `1px solid ${vars.color.border.default}`,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <code
          style={{
            fontSize: vars.fontSize.xs,
            fontFamily: vars.fontFamily.mono,
            color: vars.color.text.default,
            fontWeight: vars.fontWeight.medium,
          }}
        >
          {name}
        </code>
        <code
          style={{
            fontSize: vars.fontSize.xs,
            fontFamily: vars.fontFamily.mono,
            color: vars.color.text.muted,
          }}
        >
          color.{group.toLowerCase()}.{name}
        </code>
      </div>
    </div>
  )
}

// ─── Spacing tokens ──────────────────────────────────────────────────────────

const SPACE_TOKENS = [
  { name: 'xs', value: vars.space.xs, px: '4px' },
  { name: 'sm', value: vars.space.sm, px: '8px' },
  { name: 'md', value: vars.space.md, px: '16px' },
  { name: 'lg', value: vars.space.lg, px: '24px' },
  { name: 'xl', value: vars.space.xl, px: '32px' },
  { name: '2xl', value: vars.space['2xl'], px: '48px' },
  { name: '3xl', value: vars.space['3xl'], px: '64px' },
  { name: '4xl', value: vars.space['4xl'], px: '96px' },
  { name: '5xl', value: vars.space['5xl'], px: '128px' },
]

// ─── Font size tokens ────────────────────────────────────────────────────────

const FONTSIZE_TOKENS = [
  { name: 'xs', value: vars.fontSize.xs, approx: '≈10px' },
  { name: 'sm', value: vars.fontSize.sm, approx: '14px' },
  { name: 'base', value: vars.fontSize.base, approx: '16px' },
  { name: 'lg', value: vars.fontSize.lg, approx: '18px' },
  { name: 'xl', value: vars.fontSize.xl, approx: '20px' },
  { name: '2xl', value: vars.fontSize['2xl'], approx: '≈26px · φ¹' },
  { name: '3xl', value: vars.fontSize['3xl'], approx: '32px' },
  { name: '4xl', value: vars.fontSize['4xl'], approx: '≈42px · φ²' },
  { name: '5xl', value: vars.fontSize['5xl'], approx: '≈68px · φ³' },
]

// ─── Border radius tokens ────────────────────────────────────────────────────

const RADIUS_TOKENS = [
  { name: 'sm', value: vars.borderRadius.sm, px: '4px' },
  { name: 'md', value: vars.borderRadius.md, px: '8px' },
  { name: 'lg', value: vars.borderRadius.lg, px: '12px' },
  { name: 'xl', value: vars.borderRadius.xl, px: '16px' },
  { name: 'full', value: vars.borderRadius.full, px: '9999px' },
]

// ─── Font weight tokens ──────────────────────────────────────────────────────

const WEIGHT_TOKENS = [
  { name: 'normal', value: vars.fontWeight.normal, label: '400' },
  { name: 'medium', value: vars.fontWeight.medium, label: '500' },
  { name: 'semibold', value: vars.fontWeight.semibold, label: '600' },
  { name: 'bold', value: vars.fontWeight.bold, label: '700' },
]

// ─── Page ────────────────────────────────────────────────────────────────────

function TokensPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Tokens" eyebrow="Design system reference">
        Every design token in the system — colors, spacing, typography, and
        shape. Reference these via the <code>vars</code> object from{' '}
        <code>@/theme</code> in any Vanilla Extract stylesheet.
      </ShowcaseHero>

      {/* ── Colors ─────────────────────────────────────────────── */}
      {COLOR_GROUPS.map((group) => (
        <ShowcaseSection key={group.label} label={group.label}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: vars.space.md,
            }}
          >
            {group.tokens.map((t) => (
              <ColorSwatch
                key={t.name}
                group={group.label}
                name={t.name}
                value={t.value}
              />
            ))}
          </div>
        </ShowcaseSection>
      ))}

      {/* ── Spacing ────────────────────────────────────────────── */}
      <ShowcaseSection label="Spacing">
        <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.sm }}>
          {SPACE_TOKENS.map((t) => (
            <div
              key={t.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 5rem 1fr',
                alignItems: 'center',
                gap: vars.space.md,
              }}
            >
              <code
                style={{
                  fontSize: vars.fontSize.sm,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.default,
                }}
              >
                {t.name}
              </code>
              <span
                style={{
                  fontSize: vars.fontSize.xs,
                  color: vars.color.text.muted,
                  fontFamily: vars.fontFamily.mono,
                }}
              >
                {t.px}
              </span>
              <div
                style={{
                  height: 8,
                  width: t.value,
                  maxWidth: '100%',
                  borderRadius: vars.borderRadius.full,
                  backgroundColor: vars.color.primary.base,
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Font size ──────────────────────────────────────────── */}
      <ShowcaseSection label="Font size">
        <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.md }}>
          {FONTSIZE_TOKENS.map((t) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: vars.space.lg,
                borderBottom: `1px solid ${vars.color.border.subtle}`,
                paddingBottom: vars.space.sm,
              }}
            >
              <div style={{ width: '4rem', flexShrink: 0 }}>
                <code
                  style={{
                    fontSize: vars.fontSize.xs,
                    fontFamily: vars.fontFamily.mono,
                    color: vars.color.text.muted,
                  }}
                >
                  {t.name}
                </code>
              </div>
              <div style={{ width: '5rem', flexShrink: 0 }}>
                <span
                  style={{
                    fontSize: vars.fontSize.xs,
                    fontFamily: vars.fontFamily.mono,
                    color: vars.color.text.muted,
                  }}
                >
                  {t.approx}
                </span>
              </div>
              <span style={{ fontSize: t.value, lineHeight: 1.2, color: vars.color.text.default }}>
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Font weight ────────────────────────────────────────── */}
      <ShowcaseSection label="Font weight">
        <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.sm }}>
          {WEIGHT_TOKENS.map((t) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: vars.space.lg,
              }}
            >
              <code
                style={{
                  width: '5rem',
                  flexShrink: 0,
                  fontSize: vars.fontSize.xs,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.muted,
                }}
              >
                {t.name} · {t.label}
              </code>
              <span
                style={{
                  fontSize: vars.fontSize.lg,
                  fontWeight: t.value,
                  color: vars.color.text.default,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Border radius ──────────────────────────────────────── */}
      <ShowcaseSection label="Border radius">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: vars.space.xl,
            alignItems: 'flex-end',
          }}
        >
          {RADIUS_TOKENS.map((t) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: vars.space.sm,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: t.value,
                  backgroundColor: vars.color.primary.base,
                  opacity: 0.15,
                  border: `2px solid ${vars.color.primary.base}`,
                }}
              />
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.muted,
                  textAlign: 'center',
                }}
              >
                {t.name}
                <br />
                {t.px}
              </code>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Font families ──────────────────────────────────────── */}
      <ShowcaseSection label="Font family">
        <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.lg }}>
          <div>
            <code
              style={{
                display: 'block',
                fontSize: vars.fontSize.xs,
                fontFamily: vars.fontFamily.mono,
                color: vars.color.text.muted,
                marginBottom: vars.space.xs,
              }}
            >
              sans · Inter, Segoe UI, system-ui
            </code>
            <span
              style={{
                fontFamily: vars.fontFamily.sans,
                fontSize: vars.fontSize['2xl'],
                color: vars.color.text.default,
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </span>
          </div>
          <div>
            <code
              style={{
                display: 'block',
                fontSize: vars.fontSize.xs,
                fontFamily: vars.fontFamily.mono,
                color: vars.color.text.muted,
                marginBottom: vars.space.xs,
              }}
            >
              mono · Fira Code, Cascadia Code, JetBrains Mono
            </code>
            <span
              style={{
                fontFamily: vars.fontFamily.mono,
                fontSize: vars.fontSize.lg,
                color: vars.color.text.default,
              }}
            >
              const φ = 1.618; // golden ratio
            </span>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
