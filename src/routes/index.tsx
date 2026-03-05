import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, ChevronDown, LayoutTemplate, MousePointerClick, PanelTop, Save, SlidersHorizontal, Type } from 'lucide-react'
import { Button } from '@components/Button/Button'
import { Card, CardBody } from '@components/Card/Card'
import { Heading, Paragraph, Text } from '@components/Typography'
import { ShowcasePage } from '@/styles/Showcase'
import {
  badge,
  badgeDot,
  componentCard,
  componentCardArrow,
  componentCardBody,
  componentCardFooter,
  componentCardPreview,
  grid,
  gridLabel,
  gridLabelLine,
  gridSection,
  heroDemos,
  heroLead,
  heroTitle,
  heroAccent,
  hero,
  highlightItem,
  highlightLabel,
  highlights,
  highlightValue,
} from '@/views/home/home.css'
import { Input } from '@components/Input/Input'

export const Route = createFileRoute('/')({ component: App })

const COMPONENTS = [
  {
    to: '/button',
    label: 'Button',
    description: '3 variants · 3 sizes · pending state · compound API',
    icon: <MousePointerClick size={14} />,
    preview: (
      <>
        <Button variant="primary" size="sm">
          <Button.Icon><Save size={14} /></Button.Icon>
          <Button.Label>Save</Button.Label>
        </Button>
        <Button variant="secondary" size="sm">
          <Button.Label>Cancel</Button.Label>
        </Button>
        <Button variant="ghost" size="sm">
          <Button.Label>Skip</Button.Label>
        </Button>
      </>
    ),
  },
  {
    to: '/input',
    label: 'Text Field',
    description: 'Label · description · error · validation built-in',
    icon: <Type size={14} />,
    preview: (
      <div style={{ width: '100%', maxWidth: '220px' }}>
        <Input label="Email" placeholder="you@example.com" />
      </div>
    ),
  },
  {
    to: '/card',
    label: 'Card',
    description: '3 variants · header · body · footer slots',
    icon: <LayoutTemplate size={14} />,
    preview: (
      <Card variant="elevated" style={{ width: '100%', maxWidth: '220px' }}>
        <CardBody size="md">
          <Text size="sm" weight="medium">Card title</Text>
          <br />
          <Text size="sm" color="muted">A short description.</Text>
        </CardBody>
      </Card>
    ),
  },
  {
    to: '/generic-content',
    label: 'Generic Content',
    description: 'Headline · body · media · link · actions slots',
    icon: <SlidersHorizontal size={14} />,
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', maxWidth: '220px' }}>
        <div style={{ height: '10px', borderRadius: '4px', backgroundColor: 'var(--color-border-default, #D1E2EC)', width: '60%' }} />
        <div style={{ height: '8px', borderRadius: '4px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '90%' }} />
        <div style={{ height: '8px', borderRadius: '4px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '75%' }} />
      </div>
    ),
  },
  {
    to: '/modal',
    label: 'Modal',
    description: 'Overlay · focus trap · 3 sizes · controlled API',
    icon: <PanelTop size={14} />,
    preview: (
      <div style={{ width: '100%', maxWidth: '220px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ height: '10px', borderRadius: '4px', backgroundColor: 'var(--color-border-default, #D1E2EC)', width: '50%' }} />
        <div style={{ height: '7px', borderRadius: '4px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '85%' }} />
        <div style={{ height: '7px', borderRadius: '4px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '70%' }} />
        <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
          <div style={{ height: '20px', borderRadius: '9999px', backgroundColor: 'var(--color-border-default, #D1E2EC)', width: '52px' }} />
          <div style={{ height: '20px', borderRadius: '9999px', backgroundColor: 'var(--color-primary-base, #074670)', width: '52px' }} />
        </div>
      </div>
    ),
  },
  {
    to: '/accordion',
    label: 'Accordion',
    description: 'Single or multi-expand · disabled items · default open',
    icon: <ChevronDown size={14} />,
    preview: (
      <div style={{ width: '100%', maxWidth: '220px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {[['60%', true], ['85%', false], ['70%', false]].map(([w, expanded], i) => (
          <div key={i} style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--color-border-subtle, #E8F0F5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', backgroundColor: expanded ? 'var(--color-bg-subtle, #F4F8FA)' : 'transparent' }}>
              <div style={{ height: '8px', borderRadius: '4px', backgroundColor: 'var(--color-border-default, #D1E2EC)', width: w as string }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: 'var(--color-border-default, #D1E2EC)', transform: expanded ? 'rotate(180deg)' : 'none' }} />
            </div>
            {expanded && (
              <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '90%' }} />
                <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--color-border-subtle, #E8F0F5)', width: '75%' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
] as const

function App() {
  return (
    <ShowcasePage>
      {/* ── Hero ── */}
      <section className={hero}>
        <div className={badge}>
          <span className={badgeDot} />
          Design system
        </div>

        <h1 className={heroTitle}>
          Build with <span className={heroAccent}>intention.</span>
        </h1>

        <p className={heroLead}>
          Trioxygen is a focused set of accessible, composable components.
          Headless by default, styled with design tokens, built on React&nbsp;Aria.
        </p>

        <div className={heroDemos}>
          <Button variant="primary">
            <Button.Icon><Save size={16} /></Button.Icon>
            <Button.Label>Save changes</Button.Label>
          </Button>
          <Button variant="secondary">
            <Button.Label>Discard</Button.Label>
          </Button>
          <Button variant="ghost">
            <Button.Icon><Check size={16} /></Button.Icon>
            <Button.Label>Approve</Button.Label>
          </Button>
        </div>
      </section>

      {/* ── Highlights ── */}
      <div className={highlights}>
        <div className={highlightItem}>
          <span className={highlightValue}>6</span>
          <span className={highlightLabel}>Components</span>
        </div>
        <div className={highlightItem}>
          <span className={highlightValue}>A11y</span>
          <span className={highlightLabel}>React Aria</span>
        </div>
        <div className={highlightItem}>
          <span className={highlightValue}>TS</span>
          <span className={highlightLabel}>Fully typed</span>
        </div>
        <div className={highlightItem}>
          <span className={highlightValue}>VE</span>
          <span className={highlightLabel}>Zero runtime CSS</span>
        </div>
      </div>

      {/* ── Component grid ── */}
      <section className={gridSection}>
        <div className={gridLabel}>
          Components
          <span className={gridLabelLine} />
        </div>

        <div className={grid}>
          {COMPONENTS.map(({ to, label, description, preview }) => (
            <Link key={to} to={to} className={componentCard}>
              <div className={componentCardPreview}>{preview}</div>
              <div className={componentCardBody}>
                <Heading level={6} as="h3">{label}</Heading>
                <Paragraph size="sm" color="muted">{description}</Paragraph>
              </div>
              <div className={componentCardFooter}>
                <Text size="xs" color="link" weight="medium">View component</Text>
                <span className={componentCardArrow}>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ShowcasePage>
  )
}
