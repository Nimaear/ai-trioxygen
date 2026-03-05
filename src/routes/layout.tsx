import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@components/layout/Container'
import { Inline } from '@components/layout/Inline'
import { Stack } from '@components/layout/Stack'
import { vars } from '@/theme'
import {
  CodeBlock,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'

export const Route = createFileRoute('/layout')({ component: LayoutPage })

// ─── Shared demo primitives ──────────────────────────────────────────────────

function Box({
  children,
  flex,
  width,
}: {
  children?: React.ReactNode
  flex?: boolean
  width?: string
}) {
  return (
    <div
      style={{
        padding: `${vars.space.xs} ${vars.space.sm}`,
        borderRadius: vars.borderRadius.md,
        backgroundColor: vars.color.bg.muted,
        border: `1px solid ${vars.color.border.default}`,
        fontSize: vars.fontSize.xs,
        fontFamily: vars.fontFamily.mono,
        color: vars.color.text.muted,
        whiteSpace: 'nowrap',
        flex: flex ? '1 1 0' : undefined,
        width,
      }}
    >
      {children}
    </div>
  )
}

function Demo({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: vars.space.md,
        borderRadius: vars.borderRadius.lg,
        border: `1px solid ${vars.color.border.subtle}`,
        backgroundColor: vars.color.bg.subtle,
      }}
    >
      {children}
    </div>
  )
}

function Row({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: vars.space.xs }}>
      <code
        style={{
          fontSize: vars.fontSize.xs,
          fontFamily: vars.fontFamily.mono,
          color: vars.color.text.muted,
        }}
      >
        {label}
      </code>
      <Demo>{children}</Demo>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

function LayoutPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Layout" eyebrow="Component reference">
        Three spatial primitives — <code>Stack</code>, <code>Inline</code>, and{' '}
        <code>Container</code> — that own all spacing between components.
        Individual components never set external margin; the layout decides how
        children are arranged.
      </ShowcaseHero>

      {/* ── Authoring principle ─────────────────────────────────── */}
      <ShowcaseSection label="Authoring principle">
        <ShowcaseStack>
          <p
            style={{
              fontSize: vars.fontSize.base,
              lineHeight: vars.lineHeight.relaxed,
              color: vars.color.text.muted,
              maxWidth: '68ch',
              margin: 0,
            }}
          >
            Components must not set margin on their outermost element. A
            component has no knowledge of where it will be placed, so it should
            not claim space outside its own boundary. All spacing{' '}
            <em>between</em> components — vertical rhythm, horizontal gaps,
            section padding — is controlled exclusively by layout primitives.
            The parent decides how children are arranged; children never arrange
            themselves.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: vars.space.md,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: vars.fontSize.sm,
                  color: vars.color.status.error,
                  fontWeight: vars.fontWeight.semibold,
                  marginBottom: vars.space.xs,
                  margin: `0 0 ${vars.space.xs}`,
                }}
              >
                Wrong — component owns external spacing
              </p>
              <CodeBlock>{`export const card = style({
  marginTop: vars.space.xl, // ✗
  padding: vars.space.lg,
})`}</CodeBlock>
            </div>
            <div>
              <p
                style={{
                  fontSize: vars.fontSize.sm,
                  color: vars.color.status.success,
                  fontWeight: vars.fontWeight.semibold,
                  marginBottom: vars.space.xs,
                  margin: `0 0 ${vars.space.xs}`,
                }}
              >
                Correct — layout owns external spacing
              </p>
              <CodeBlock>{`export const card = style({
  padding: vars.space.lg,   // ✓
  gap: vars.space.md,       // ✓
})`}</CodeBlock>
            </div>
          </div>

          <CodeBlock>{`// The layout controls spacing — components are passive
<Stack gap="xl">
  <Card />
  <Card />
</Stack>

<Inline gap="md" justify="between">
  <Button>Cancel</Button>
  <Button>Save</Button>
</Inline>

<Container size="lg" paddingX="md" paddingY="3xl">
  <HeroSection />
</Container>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Stack ───────────────────────────────────────────────── */}
      <ShowcaseSection label="Stack">
        <ShowcaseStack>
          <p
            style={{
              fontSize: vars.fontSize.sm,
              color: vars.color.text.muted,
              margin: 0,
              maxWidth: '60ch',
            }}
          >
            Vertical flex column. Controls the gap between children and their
            cross-axis alignment. Renders as <code>div</code> by default;
            override with <code>as</code> for semantic elements.
          </p>

          <Row label='gap="xs" (4px) · "sm" (8px) · "md" (16px) · "lg" (24px)'>
            <Inline gap="xl" align="start">
              {(['xs', 'sm', 'md', 'lg'] as const).map((gap) => (
                <div key={gap} style={{ display: 'flex', flexDirection: 'column', gap: vars.space.xs, alignItems: 'center' }}>
                  <code style={{ fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {gap}
                  </code>
                  <Stack gap={gap}>
                    <Box>A</Box>
                    <Box>B</Box>
                    <Box>C</Box>
                  </Stack>
                </div>
              ))}
            </Inline>
          </Row>

          <Row label='align="start" · "center" · "end" · "stretch" (default)'>
            <Inline gap="xl" align="start">
              {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
                <div key={align} style={{ display: 'flex', flexDirection: 'column', gap: vars.space.xs, alignItems: 'center', flex: 1 }}>
                  <code style={{ fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {align}
                  </code>
                  <Demo>
                    <Stack gap="xs" align={align} style={{ minHeight: 80, width: 120 }}>
                      <Box>Wide label</Box>
                      <Box>Mid</Box>
                      <Box>Sm</Box>
                    </Stack>
                  </Demo>
                </div>
              ))}
            </Inline>
          </Row>

          <CodeBlock>{`import { Stack } from '@components/layout/Stack'

// Default: gap="sm", align="stretch"
<Stack>
  <Card />
  <Card />
</Stack>

// Custom gap and alignment
<Stack gap="lg" align="center">
  <Heading level={2}>Title</Heading>
  <Paragraph>Body copy</Paragraph>
  <Button>Action</Button>
</Stack>

// Semantic element override
<Stack as="ul" gap="xs">
  <li>Item one</li>
  <li>Item two</li>
</Stack>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Inline ──────────────────────────────────────────────── */}
      <ShowcaseSection label="Inline">
        <ShowcaseStack>
          <p
            style={{
              fontSize: vars.fontSize.sm,
              color: vars.color.text.muted,
              margin: 0,
              maxWidth: '60ch',
            }}
          >
            Horizontal flex row. Defaults to <code>align="center"</code> and{' '}
            <code>gap="xs"</code> — ready for button groups, icon+label pairs,
            and toolbar-like layouts. Set <code>wrap</code> to allow children
            to reflow.
          </p>

          <Row label='justify="start" · "center" · "end" · "between" · "evenly"'>
            <Stack gap="sm">
              {(['start', 'center', 'end', 'between', 'evenly'] as const).map((justify) => (
                <div key={justify} style={{ display: 'flex', flexDirection: 'column', gap: vars.space.xs }}>
                  <code style={{ fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {justify}
                  </code>
                  <Inline gap="sm" justify={justify} style={{ width: '100%' }}>
                    <Box>Alpha</Box>
                    <Box>Beta</Box>
                    <Box>Gamma</Box>
                  </Inline>
                </div>
              ))}
            </Stack>
          </Row>

          <Row label='align="start" · "center" · "end" · "baseline"'>
            <Inline gap="xl">
              {(['start', 'center', 'end', 'baseline'] as const).map((align) => (
                <div key={align} style={{ display: 'flex', flexDirection: 'column', gap: vars.space.xs, alignItems: 'center' }}>
                  <code style={{ fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {align}
                  </code>
                  <Demo>
                    <Inline gap="xs" align={align} style={{ height: 60 }}>
                      <Box>Sm</Box>
                      <div style={{ padding: `${vars.space.sm} ${vars.space.sm}`, borderRadius: vars.borderRadius.md, backgroundColor: vars.color.bg.muted, border: `1px solid ${vars.color.border.default}` }}>
                        <span style={{ fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>Tall</span>
                      </div>
                      <Box>Sm</Box>
                    </Inline>
                  </Demo>
                </div>
              ))}
            </Inline>
          </Row>

          <Row label="wrap — children reflow when the row is full">
            <Inline gap="sm" wrap style={{ maxWidth: 280 }}>
              {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta'].map((label) => (
                <Box key={label}>{label}</Box>
              ))}
            </Inline>
          </Row>

          <CodeBlock>{`import { Inline } from '@components/layout/Inline'

// Icon + label pair — default gap="xs", align="center"
<Inline>
  <Icon />
  <Text>Label</Text>
</Inline>

// Toolbar with space-between
<Inline justify="between" style={{ width: '100%' }}>
  <Heading level={4}>Section title</Heading>
  <Button>Add item</Button>
</Inline>

// Wrapping tag cloud
<Inline gap="sm" wrap as="ul">
  {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
</Inline>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Container ───────────────────────────────────────────── */}
      <ShowcaseSection label="Container">
        <ShowcaseStack>
          <p
            style={{
              fontSize: vars.fontSize.sm,
              color: vars.color.text.muted,
              margin: 0,
              maxWidth: '60ch',
            }}
          >
            Centred, max-width wrapper. Use <code>size</code> to cap the
            content width and <code>paddingX</code> / <code>paddingY</code> to
            add breathing room. Never set these on the components inside.
          </p>

          <Row label="size — sm (640px) · md (768px) · lg (1024px, default) · xl (1280px) · full">
            <Stack gap="sm">
              {([
                { size: 'sm' as const, px: '640px' },
                { size: 'md' as const, px: '768px' },
                { size: 'lg' as const, px: '1024px' },
                { size: 'xl' as const, px: '1280px' },
              ]).map(({ size, px }) => (
                <div key={size} style={{ display: 'flex', alignItems: 'center', gap: vars.space.sm }}>
                  <code style={{ width: '2rem', flexShrink: 0, fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {size}
                  </code>
                  <code style={{ width: '4.5rem', flexShrink: 0, fontSize: vars.fontSize.xs, fontFamily: vars.fontFamily.mono, color: vars.color.text.muted }}>
                    {px}
                  </code>
                  <Container size={size} paddingX="none" style={{ maxWidth: '100%' }}>
                    <div
                      style={{
                        height: 10,
                        borderRadius: vars.borderRadius.full,
                        backgroundColor: vars.color.primary.base,
                        opacity: 0.25,
                        border: `1px solid ${vars.color.primary.base}`,
                      }}
                    />
                  </Container>
                </div>
              ))}
            </Stack>
          </Row>

          <CodeBlock>{`import { Container } from '@components/layout/Container'

// Page section with constrained width
<Container size="lg" paddingX="md" paddingY="3xl">
  <Stack gap="xl">
    <HeroSection />
    <FeaturesGrid />
  </Stack>
</Container>

// Narrow prose column
<Container size="sm" paddingX="md">
  <Paragraph>Long-form content…</Paragraph>
</Container>

// Semantic override
<Container as="main" size="xl" paddingX="lg">
  <AppShell />
</Container>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Summary table ───────────────────────────────────────── */}
      <ShowcaseSection label="Spacing ownership">
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: vars.fontSize.sm,
            fontFamily: vars.fontFamily.sans,
          }}
        >
          <thead>
            <tr style={{ borderBottom: `2px solid ${vars.color.border.default}` }}>
              {['Property', 'Inside component', 'Outside component'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: `${vars.space.xs} ${vars.space.sm}`,
                    fontWeight: vars.fontWeight.semibold,
                    color: vars.color.text.default,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { prop: 'padding', inside: '✓', outside: '—' },
              { prop: 'gap', inside: '✓', outside: '—' },
              { prop: 'margin', inside: 'Avoid', outside: 'Never' },
              { prop: 'Spacing between siblings', inside: '—', outside: 'Stack / Inline' },
              { prop: 'Section padding', inside: '—', outside: 'Container' },
            ].map(({ prop, inside, outside }, i) => (
              <tr
                key={prop}
                style={{
                  borderBottom: `1px solid ${vars.color.border.subtle}`,
                  backgroundColor: i % 2 === 0 ? 'transparent' : vars.color.bg.subtle,
                }}
              >
                <td style={{ padding: `${vars.space.xs} ${vars.space.sm}` }}>
                  <code style={{ fontFamily: vars.fontFamily.mono, fontSize: vars.fontSize.xs }}>
                    {prop}
                  </code>
                </td>
                <td style={{ padding: `${vars.space.xs} ${vars.space.sm}`, color: vars.color.text.muted }}>
                  {inside}
                </td>
                <td style={{ padding: `${vars.space.xs} ${vars.space.sm}`, color: vars.color.text.muted }}>
                  {outside}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
