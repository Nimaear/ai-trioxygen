import type React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@components/Button/Button'
import { Card, CardBody, CardFooter, CardHeader } from '@components/Card/Card'
import { vars } from '@/theme'
import {
  CodeBlock,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseRow,
  ShowcaseSection,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/card')({ component: CardPage })

// ─── Demo content styles ────────────────────────────────────────────────────
// Inline styles using design tokens — no separate CSS file needed.

const s: Record<string, React.CSSProperties> = {
  title: {
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    color: vars.color.text.default,
    margin: 0,
  },
  meta: {
    fontSize: vars.fontSize.sm,
    color: vars.color.text.muted,
    margin: 0,
  },
  text: {
    fontSize: vars.fontSize.sm,
    color: vars.color.text.muted,
    lineHeight: vars.lineHeight.relaxed,
    margin: 0,
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: vars.borderRadius.full,
    backgroundColor: vars.color.primary.base,
    color: vars.color.primary.contrast,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.semibold,
    flexShrink: 0,
  },
  stat: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: vars.fontWeight.bold,
    color: vars.color.text.default,
    lineHeight: vars.lineHeight.tight,
    margin: 0,
  },
  statLabel: {
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.medium,
    letterSpacing: vars.letterSpacing.wide,
    textTransform: 'uppercase',
    color: vars.color.text.muted,
    margin: 0,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingInline: vars.space.sm,
    paddingBlock: vars.space.xs,
    borderRadius: vars.borderRadius.full,
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.semibold,
    backgroundColor: vars.color.bg.muted,
    color: vars.color.primary.base,
  },
}

function CardPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Card">
        A composable surface for grouping related content. Use the flat{' '}
        <code>Card</code> for simple containers, or compose with{' '}
        <code>CardHeader</code>, <code>CardBody</code>, and{' '}
        <code>CardFooter</code> for structured layouts.
      </ShowcaseHero>

      <ShowcaseSection label="Variants">
        <ShowcaseGrid cols={3}>
          <Card variant="outline" size="lg">
            <p style={s.title}>Outline</p>
            <p style={s.meta}>Default variant. A clean border with no elevation.</p>
          </Card>
          <Card variant="elevated" size="lg">
            <p style={s.title}>Elevated</p>
            <p style={s.meta}>Subtle shadow lifts the card off the page.</p>
          </Card>
          <Card variant="subtle" size="lg">
            <p style={s.title}>Subtle</p>
            <p style={s.meta}>Filled background for lower-emphasis grouping.</p>
          </Card>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Composition">
        <ShowcaseGrid cols={2}>
          <Card variant="outline">
            <CardHeader>
              <ShowcaseRow>
                <div style={s.avatar}>AJ</div>
                <div>
                  <p style={s.title}>Alex Johnson</p>
                  <p style={s.meta}>Product Designer</p>
                </div>
              </ShowcaseRow>
              <span style={s.badge}>Pro</span>
            </CardHeader>
            <CardBody>
              <p style={s.text}>
                Designing systems that scale. Currently building the Trioxygen component library.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary">Message</Button>
              <Button size="sm">Follow</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <p style={s.title}>Monthly active users</p>
              <span style={s.badge}>↑ 12%</span>
            </CardHeader>
            <CardBody>
              <p style={s.stat}>48,291</p>
              <p style={s.statLabel}>Users this month</p>
            </CardBody>
            <CardFooter>
              <p style={s.meta}>Compared to 43,112 last month</p>
            </CardFooter>
          </Card>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Flat — size shorthand">
        <ShowcaseGrid cols={3}>
          {(['sm', 'md', 'lg'] as const).map((p) => (
            <Card key={p} variant="outline" size={p}>
              <p style={s.title}>size="{p}"</p>
              <p style={s.meta}>Using the root size prop</p>
            </Card>
          ))}
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Callout">
        <Card variant="subtle">
          <CardBody size="md">
            <ShowcaseRow justify="between">
              <div>
                <p style={s.title}>Enable two-factor authentication</p>
                <p style={s.text}>Protect your account with an extra layer of security.</p>
              </div>
              <Button size="sm">Enable</Button>
            </ShowcaseRow>
          </CardBody>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>{`import { Card, CardHeader, CardBody, CardFooter } from '@components/Card/Card'`}</CodeBlock>
          <CodeBlock>{`// Simple card with size shorthand
<Card variant="elevated" size="lg">
  Plain content
</Card>`}</CodeBlock>
          <CodeBlock>{`// Composed card
<Card variant="outline">
  <CardHeader>
    <h3>Title</h3>
    <Button size="sm" variant="ghost">Edit</Button>
  </CardHeader>
  <CardBody>
    Main content area
  </CardBody>
  <CardFooter>
    <Button size="sm" variant="secondary">Cancel</Button>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>`}</CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
