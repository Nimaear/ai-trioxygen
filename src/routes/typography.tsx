import { createFileRoute } from '@tanstack/react-router'
import { Heading, Paragraph, Text } from '@components/Typography'
import {
  CodeBlock,
  ShowcaseDemoCard,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcasePanel,
  ShowcaseRow,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'

export const Route = createFileRoute('/typography')({ component: TypographyPage })

function TypographyPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Typography">
        Three primitives — <code>Heading</code>, <code>Text</code>, and{' '}
        <code>Paragraph</code> — built on the golden-ratio type scale. Visual
        level and rendered element are decoupled so semantic HTML and
        presentation stay independent.
      </ShowcaseHero>

      {/* ── Heading levels ──────────────────────────────────────── */}
      <ShowcaseSection label="Heading levels">
        <ShowcaseStack>
          {([1, 2, 3, 4, 5, 6] as const).map((level) => (
            <div key={level} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <code style={{ fontSize: '0.75rem', color: 'var(--color-text-muted, #5D697E)', width: '2rem', flexShrink: 0, fontFamily: 'monospace' }}>
                h{level}
              </code>
              <Heading level={level}>
                The quick brown fox jumps
              </Heading>
            </div>
          ))}
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Heading — semantic override ──────────────────────────── */}
      <ShowcaseSection label="Heading — semantic override">
        <ShowcasePanel>
          <Heading level={1} as="h2">
            Visual h1, rendered as &lt;h2&gt;
          </Heading>
          <Heading level={3} as="p">
            Visual h3, rendered as &lt;p&gt;
          </Heading>
        </ShowcasePanel>
      </ShowcaseSection>

      {/* ── Heading — color ─────────────────────────────────────── */}
      <ShowcaseSection label="Heading — color">
        <ShowcaseRow>
          <Heading level={3}>Default</Heading>
          <Heading level={3} color="muted">Muted</Heading>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* ── Text — sizes ────────────────────────────────────────── */}
      <ShowcaseSection label="Text — sizes">
        <ShowcaseStack>
          {(['xs', 'sm', 'base', 'lg', 'xl', '2xl'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <code style={{ fontSize: '0.75rem', color: 'var(--color-text-muted, #5D697E)', width: '2.5rem', flexShrink: 0, fontFamily: 'monospace' }}>
                {size}
              </code>
              <Text size={size}>The quick brown fox jumps over the lazy dog</Text>
            </div>
          ))}
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Text — weights ──────────────────────────────────────── */}
      <ShowcaseSection label="Text — weights">
        <ShowcaseStack>
          {(['normal', 'medium', 'semibold', 'bold'] as const).map((weight) => (
            <Text key={weight} as="p" size="lg" weight={weight}>
              {weight.charAt(0).toUpperCase() + weight.slice(1)} — The quick brown fox
            </Text>
          ))}
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Text — colors ───────────────────────────────────────── */}
      <ShowcaseSection label="Text — colors">
        <ShowcasePanel>
          <Text as="p" color="default">default — primary text for body copy and labels</Text>
          <Text as="p" color="muted">muted — secondary text, captions, and hints</Text>
          <Text as="p" color="link">link — interactive text and anchors</Text>
        </ShowcasePanel>
      </ShowcaseSection>

      {/* ── Text — alignment ────────────────────────────────────── */}
      <ShowcaseSection label="Text — alignment">
        <ShowcaseGrid cols={3}>
          {(['left', 'center', 'right'] as const).map((align) => (
            <ShowcaseDemoCard key={align}>
              <Text as="p" align={align} color="muted" size="sm">
                {align.charAt(0).toUpperCase() + align.slice(1)}-aligned text
              </Text>
            </ShowcaseDemoCard>
          ))}
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Text — truncation ───────────────────────────────────── */}
      <ShowcaseSection label="Text — truncation">
        <ShowcaseStack maxWidth="28rem">
          <ShowcaseDemoCard>
            <Text truncate>
              This text is much too long to fit on a single line and will be
              truncated with an ellipsis instead of wrapping.
            </Text>
          </ShowcaseDemoCard>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Paragraph ───────────────────────────────────────────── */}
      <ShowcaseSection label="Paragraph">
        <ShowcaseStack maxWidth="60ch">
          <Paragraph>
            Paragraph is a thin wrapper over Text with <code>as</code> fixed to{' '}
            <code>&lt;p&gt;</code>. It applies the base font size and the
            relaxed line height (φ&nbsp;=&nbsp;1.618) for comfortable reading.
            Use it wherever you need a block of body copy.
          </Paragraph>
          <Paragraph color="muted" size="sm">
            Muted small paragraph — useful for supporting copy, footnotes, or
            secondary descriptions that should recede visually behind primary content.
          </Paragraph>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <ShowcaseSection label="Usage">
        <ShowcaseStack>
          <CodeBlock>{`import { Heading, Text, Paragraph } from '@components/Typography'`}</CodeBlock>

          <CodeBlock>{`// Heading — level controls visual scale, as controls the tag
<Heading level={1}>Page title</Heading>
<Heading level={3} as="h2">Visual h3, semantic h2</Heading>
<Heading level={2} color="muted">Subdued heading</Heading>`}</CodeBlock>

          <CodeBlock>{`// Text — inline primitive, defaults to <span>
<Text size="sm" color="muted">Caption text</Text>
<Text size="lg" weight="semibold">Strong label</Text>
<Text as="p" size="base" align="center">Centred block</Text>
<Text truncate>Long string that will be clipped…</Text>`}</CodeBlock>

          <CodeBlock>{`// Paragraph — block text, always renders as <p>
<Paragraph>Body copy with relaxed line height.</Paragraph>
<Paragraph size="sm" color="muted">Supporting text.</Paragraph>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
