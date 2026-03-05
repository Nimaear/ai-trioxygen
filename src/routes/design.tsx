import { createFileRoute } from '@tanstack/react-router'
import { vars } from '@/theme'
import {
  CodeBlock,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
} from '@/styles/Showcase'

export const Route = createFileRoute('/design')({ component: DesignPage })

const φ = 1.618

const TYPE_SCALE = [
  { step: 'xs', rem: '0.618', note: '1/φ²' },
  { step: 'sm', rem: '0.875', note: '' },
  { step: 'base', rem: '1.000', note: 'root' },
  { step: 'lg', rem: '1.125', note: '' },
  { step: 'xl', rem: '1.250', note: '' },
  { step: '2xl', rem: '1.618', note: 'φ¹' },
  { step: '3xl', rem: '2.000', note: '' },
  { step: '4xl', rem: '2.618', note: 'φ²' },
  { step: '5xl', rem: '4.236', note: 'φ³' },
]

const SPACE_SCALE = [
  { step: 'xs', value: '0.25rem', px: 4, multiple: '1×' },
  { step: 'sm', value: '0.5rem', px: 8, multiple: '2×' },
  { step: 'md', value: '1rem', px: 16, multiple: '4×' },
  { step: 'lg', value: '1.5rem', px: 24, multiple: '6×' },
  { step: 'xl', value: '2rem', px: 32, multiple: '8×' },
  { step: '2xl', value: '3rem', px: 48, multiple: '12×' },
  { step: '3xl', value: '4rem', px: 64, multiple: '16×' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: vars.fontSize.base,
        lineHeight: vars.lineHeight.relaxed,
        color: vars.color.text.muted,
        maxWidth: '68ch',
        marginBottom: vars.space.lg,
      }}
    >
      {children}
    </p>
  )
}

function DesignPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Design" eyebrow="Design system">
        The decisions behind the system — why each choice was made and the
        principles it serves.
      </ShowcaseHero>

      {/* ── Color system ────────────────────────────────────────── */}
      <ShowcaseSection label="Color system">
        <Prose>
          The palette is inspired by Folksam's brand identity: a deep navy
          primary (<code>#074670</code>), a clear brand cyan (
          <code>#009CE0</code>), and a vibrant pink accent (
          <code>#C3006F</code>). Colors are organized into semantic groups —
          <em> primary</em>, <em>text</em>, <em>bg</em>, <em>border</em>,{' '}
          <em>surface</em>, and <em>status</em> — so dark mode works by
          swapping token values, never touching component code.
        </Prose>
        <div
          style={{
            display: 'flex',
            gap: vars.space.sm,
            flexWrap: 'wrap',
            marginBottom: vars.space.lg,
          }}
        >
          {[
            { color: vars.color.primary.dark, label: 'Navy' },
            { color: vars.color.primary.base, label: 'Primary' },
            { color: vars.color.primary.light, label: 'Cyan' },
            { color: vars.color.accent.base, label: 'Accent' },
            { color: vars.color.status.success, label: 'Success' },
            { color: vars.color.status.warning, label: 'Warning' },
            { color: vars.color.status.error, label: 'Error' },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: vars.borderRadius.md,
                  backgroundColor: color,
                  border: `1px solid ${vars.color.border.default}`,
                }}
              />
              <span
                style={{
                  fontSize: vars.fontSize.xs,
                  color: vars.color.text.muted,
                  textAlign: 'center',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <CodeBlock language="tsx">{`// Access tokens in any .css.ts file
import { vars } from '@/theme'

export const button = style({
  backgroundColor: vars.color.primary.base,
  color: vars.color.primary.contrast,
})`}</CodeBlock>
      </ShowcaseSection>

      {/* ── Dark mode ───────────────────────────────────────────── */}
      <ShowcaseSection label="Dark mode">
        <Prose>
          Dark mode uses a class on <code>&lt;html&gt;</code> (
          <code>html.dark</code>) rather than only relying on a{' '}
          <code>prefers-color-scheme</code> media query. This lets users
          override the system preference and persist the choice in{' '}
          <code>localStorage</code>. An inline script in <code>&lt;head&gt;</code>{' '}
          runs before first paint, reading from localStorage and setting the
          class synchronously — eliminating any flash of the wrong theme.
        </Prose>
        <Prose>
          In Vanilla Extract, <code>html.dark</code> has higher specificity than
          <code>:root</code> (0,1,1 vs 0,1,0), so dark mode overrides win
          without needing <code>!important</code>. All color tokens are
          redefined inside <code>globalStyle('html.dark', …)</code> using{' '}
          <code>assignVars</code>.
        </Prose>
        <CodeBlock>{`// theme.css.ts
globalStyle('html.dark', {
  vars: assignVars(vars.color, {
    primary: { base: '#009CE0', ... },
    bg:      { page: '#0D1520', ... },
  }),
})`}</CodeBlock>
      </ShowcaseSection>

      {/* ── Typography ──────────────────────────────────────────── */}
      <ShowcaseSection label="Typography scale">
        <Prose>
          Font sizes follow the golden ratio φ&nbsp;≈&nbsp;{φ}. Three anchor
          points — <code>xs = 1/φ²</code>, <code>2xl = φ¹</code>,{' '}
          <code>4xl = φ²</code>, <code>5xl = φ³</code> — create a naturally
          harmonious progression. Intermediate steps fill in practical values
          (14 px, 18 px, 20 px) so the scale is usable for UI copy, not just
          display headings.
        </Prose>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: vars.space.xs,
            fontFamily: vars.fontFamily.mono,
          }}
        >
          {TYPE_SCALE.map(({ step, rem, note }) => (
            <div
              key={step}
              style={{
                display: 'grid',
                gridTemplateColumns: '3.5rem 5rem 1fr',
                alignItems: 'center',
                gap: vars.space.md,
                padding: `${vars.space.xs} 0`,
                borderBottom: `1px solid ${vars.color.border.subtle}`,
              }}
            >
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  color: vars.color.text.muted,
                }}
              >
                {step}
              </code>
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  color: vars.color.text.muted,
                }}
              >
                {rem}rem{note ? ` · ${note}` : ''}
              </code>
              <span
                style={{
                  fontSize: `${rem}rem`,
                  lineHeight: 1.2,
                  color: vars.color.text.default,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                Aa
              </span>
            </div>
          ))}
        </div>
        <Prose>
          Line heights also use φ: body copy uses <code>1.618</code> (relaxed),
          large headings use <code>1.2</code> (tight) since optical spacing
          needs less leading at display sizes.
        </Prose>
      </ShowcaseSection>

      {/* ── Spacing ─────────────────────────────────────────────── */}
      <ShowcaseSection label="Spacing grid">
        <Prose>
          All spacing values are multiples of 4&nbsp;px (0.25&nbsp;rem). The
          base unit is chosen so even the smallest step (
          <code>xs = 4px</code>) is large enough to be intentional, while the
          scale stays compact enough to express fine-grained layout without
          magic numbers. Spacing tokens are used for gaps, padding, and margins
          — never for font sizes or border widths.
        </Prose>
        <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.sm }}>
          {SPACE_SCALE.map(({ step, value, px, multiple }) => (
            <div
              key={step}
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 4.5rem 4rem 1fr',
                alignItems: 'center',
                gap: vars.space.md,
              }}
            >
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.default,
                }}
              >
                {step}
              </code>
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.muted,
                }}
              >
                {value}
              </code>
              <code
                style={{
                  fontSize: vars.fontSize.xs,
                  fontFamily: vars.fontFamily.mono,
                  color: vars.color.text.muted,
                }}
              >
                {px}px · {multiple}
              </code>
              <div
                style={{
                  height: 6,
                  width: value,
                  maxWidth: '100%',
                  borderRadius: vars.borderRadius.full,
                  backgroundColor: vars.color.primary.base,
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Accessibility ────────────────────────────────────────── */}
      <ShowcaseSection label="Accessibility">
        <Prose>
          Every interactive component is built on{' '}
          <strong>React Aria Components</strong>. RAC implements the WAI-ARIA
          authoring patterns for each widget — keyboard navigation, focus
          management, ARIA attributes, screen reader announcements, and
          cross-browser event normalization — so component authors don't have to
          re-solve these problems from scratch.
        </Prose>
        <Prose>
          Interactive states (hover, focus, pressed, disabled, invalid) are
          surfaced via <code>data-*</code> attributes on the root element (e.g.{' '}
          <code>[data-focus-visible]</code>, <code>[data-pressed]</code>). CSS
          selectors on those attributes keep all state styling in the stylesheet
          rather than in JS.
        </Prose>
        <CodeBlock>{`// Interactive state via data attributes — no JS className logic needed
export const button = style({
  selectors: {
    '&[data-focus-visible]': {
      outline: \`2px solid \${vars.color.primary.base}\`,
      outlineOffset: '2px',
    },
    '&[data-pressed]':  { transform: 'scale(0.975)' },
    '&[data-disabled]': { opacity: 0.4, cursor: 'not-allowed' },
  },
})`}</CodeBlock>
      </ShowcaseSection>

      {/* ── CSS-in-JS ───────────────────────────────────────────── */}
      <ShowcaseSection label="Vanilla Extract">
        <Prose>
          Styles are written in <strong>Vanilla Extract</strong> (
          <code>*.css.ts</code> files). VE compiles to static CSS at build time
          — no runtime style injection, no specificity surprises from inline
          styles, and full TypeScript coverage over every style value. The{' '}
          <code>vars</code> object is typed, so token typos are caught at
          compile time.
        </Prose>
        <Prose>
          <code>styleVariants</code> generates a class for each variant at build
          time, so switching variants at runtime is just a string lookup — no
          conditional logic that leaks into bundle size.
        </Prose>
        <CodeBlock>{`// button.css.ts
export const variant = styleVariants({
  primary:   { backgroundColor: vars.color.primary.base },
  secondary: { backgroundColor: vars.color.bg.muted },
  ghost:     { backgroundColor: 'transparent' },
})

// button.tsx — picking the class is a simple lookup
<button className={variant[props.variant]} />`}</CodeBlock>
      </ShowcaseSection>

      {/* ── Compound components ─────────────────────────────────── */}
      <ShowcaseSection label="Compound components">
        <Prose>
          Complex components expose sub-components as static properties (
          <code>Button.Label</code>, <code>Button.Icon</code>). This keeps the
          public API declarative and explicit: the parent controls layout,
          spacing, and sizing while children fill semantic slots. It avoids
          prop-sprawl (<code>icon=</code>, <code>iconPosition=</code>) while
          remaining approachable for simple cases.
        </Prose>
        <CodeBlock>{`// Label-only — the common case is still simple
<Button>
  <Button.Label>Save</Button.Label>
</Button>

// Icon + label, or label + trailing icon
<Button variant="primary">
  <Button.Icon><Save size={16} /></Button.Icon>
  <Button.Label>Save changes</Button.Label>
</Button>

// Icon-only — explicitly requires aria-label
<Button variant="ghost" aria-label="Delete">
  <Button.Icon><Trash2 size={16} /></Button.Icon>
</Button>`}</CodeBlock>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
