import type React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { GenericContent } from '@components/GenericContent/GenericContent'
import type { GenericContentData, RichTextNode } from '@components/GenericContent/types'
import { vars } from '@/theme'
import {
  CodeBlock,
  ShowcaseDemoCard,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcaseLink,
  ShowcasePage,
  ShowcaseRow,
  ShowcaseSection,
} from '@/styles/Showcase'

export const Route = createFileRoute('/generic-content')({ component: GenericContentPage })

// ─── Sample data ───────────────────────────────────────────────────────────

const minimal: GenericContentData = {
  internalName: 'minimal-example',
  headline: 'Headline only',
}

const withBody: GenericContentData = {
  internalName: 'body-example',
  headline: 'Rich text body',
  body: {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          { nodeType: 'text', value: 'A paragraph with ', marks: [], data: {} },
          { nodeType: 'text', value: 'bold', marks: [{ type: 'bold' }], data: {} },
          { nodeType: 'text', value: ' and ', marks: [], data: {} },
          { nodeType: 'text', value: 'italic', marks: [{ type: 'italic' }], data: {} },
          { nodeType: 'text', value: ' text.', marks: [], data: {} },
        ],
      },
    ],
  },
}

const withMarkdown: GenericContentData = {
  internalName: 'markdown-example',
  headline: 'Markdown body',
  bodyInMd: `This is **bold**, _italic_, and \`inline code\`. A second sentence to show line length.`,
}

const withMedia: GenericContentData = {
  internalName: 'media-example',
  headline: 'Inline media',
  inlineMedia: {
    sys: { id: 'img-wrapper-1', contentType: { sys: { id: 'imageWrapper' } } },
    fields: {
      title: 'Sample image',
      altText: 'A placeholder image',
      image: {
        sys: { id: 'asset-1' },
        fields: {
          title: 'Placeholder',
          file: {
            url: 'https://placehold.co/800x450/1a1a1a/666?text=inlineMedia',
            details: { image: { width: 800, height: 450 } },
          },
        },
      },
    },
  },
}

const withLink: GenericContentData = {
  internalName: 'link-example',
  headline: 'CTA link',
  link: {
    sys: { id: 'nav-1', contentType: { sys: { id: 'navigationItem' } } },
    fields: { label: 'Learn more', url: 'https://example.com' },
  },
}

const withInformation: GenericContentData = {
  internalName: 'info-example',
  headline: 'Information card',
  information: {
    sys: { id: 'info-1', contentType: { sys: { id: 'informationCard' } } },
    fields: {
      title: 'Did you know?',
      bodyInMd: 'A headless compound component — renders nothing itself, delegates all display to the consumer.',
    },
  },
}

const withActions: GenericContentData = {
  internalName: 'actions-example',
  headline: 'Misc actions',
  miscActions: [
    {
      sys: { id: 'action-1', contentType: { sys: { id: 'navigationItem' } } },
      fields: { label: 'Primary action', url: '#' },
    },
    {
      sys: { id: 'action-2', contentType: { sys: { id: 'navigationItem' } } },
      fields: { label: 'Secondary action', url: '#' },
    },
  ],
}

// ─── Inline demo styles ────────────────────────────────────────────────────

const bodyStyle: React.CSSProperties = {
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.muted,
  margin: 0,
}

const infoCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
  padding: vars.space.md,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.bg.subtle,
  borderLeft: `3px solid ${vars.color.primary.base}`,
}

const infoTitleStyle: React.CSSProperties = {
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.default,
  margin: 0,
}

// ─── Minimal rich-text renderer ────────────────────────────────────────────

function renderNodes(nodes: RichTextNode[]): React.ReactNode {
  return nodes.map((node, i) => {
    if (node.nodeType === 'text') {
      let el: React.ReactNode = node.value
      for (const mark of node.marks) {
        if (mark.type === 'bold') el = <strong key={i}>{el}</strong>
        else if (mark.type === 'italic') el = <em key={i}>{el}</em>
        else if (mark.type === 'code') el = <code key={i}>{el}</code>
      }
      return el
    }
    if (node.nodeType === 'paragraph')
      return <p key={i} style={bodyStyle}>{renderNodes(node.content)}</p>
    if (node.nodeType === 'hyperlink')
      return <a key={i} href={String(node.data.uri)}>{renderNodes(node.content)}</a>
    return null
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────

function GenericContentPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="GenericContent">
        A headless compound component for Contentful-driven content blocks. Provides data via
        context and exposes render-prop slots for each field — leaving all rendering decisions to
        the consumer.
      </ShowcaseHero>

      <ShowcaseSection label="Text slots">
        <ShowcaseGrid cols={2}>
          <GenericContent data={minimal}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
            </ShowcaseDemoCard>
          </GenericContent>

          <GenericContent data={withBody}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
              <GenericContent.Body>
                {(doc) => <div>{renderNodes(doc.content)}</div>}
              </GenericContent.Body>
            </ShowcaseDemoCard>
          </GenericContent>

          <GenericContent data={withMarkdown}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
              <GenericContent.BodyMd>
                {(md) => <p style={bodyStyle}>{md}</p>}
              </GenericContent.BodyMd>
            </ShowcaseDemoCard>
          </GenericContent>

          <GenericContent data={withMedia}>
            <ShowcaseDemoCard>
              <GenericContent.Media>
                {(wrapper) => (
                  <img
                    style={{ width: '100%', borderRadius: vars.borderRadius.md, display: 'block' }}
                    src={wrapper.fields.image.fields.file.url}
                    alt={wrapper.fields.altText ?? wrapper.fields.title ?? ''}
                    width={wrapper.fields.image.fields.file.details?.image?.width}
                    height={wrapper.fields.image.fields.file.details?.image?.height}
                  />
                )}
              </GenericContent.Media>
              <GenericContent.Headline />
            </ShowcaseDemoCard>
          </GenericContent>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Linked content">
        <ShowcaseGrid cols={3}>
          <GenericContent data={withLink}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
              <GenericContent.Link>
                {(item) => (
                  <ShowcaseLink href={item.fields.url ?? item.fields.slug ?? '#'}>
                    {item.fields.label} →
                  </ShowcaseLink>
                )}
              </GenericContent.Link>
            </ShowcaseDemoCard>
          </GenericContent>

          <GenericContent data={withInformation}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
              <GenericContent.Information>
                {(card) => (
                  <div style={infoCardStyle}>
                    {card.fields.title && <p style={infoTitleStyle}>{card.fields.title}</p>}
                    {card.fields.bodyInMd && <p style={bodyStyle}>{card.fields.bodyInMd}</p>}
                  </div>
                )}
              </GenericContent.Information>
            </ShowcaseDemoCard>
          </GenericContent>

          <GenericContent data={withActions}>
            <ShowcaseDemoCard>
              <GenericContent.Headline />
              <GenericContent.Actions>
                {(items) => (
                  <ShowcaseRow>
                    {items.map((item) => (
                      <ShowcaseLink
                        key={item.sys.id}
                        href={item.fields.url ?? item.fields.slug ?? '#'}
                      >
                        {item.fields.label}
                      </ShowcaseLink>
                    ))}
                  </ShowcaseRow>
                )}
              </GenericContent.Actions>
            </ShowcaseDemoCard>
          </GenericContent>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <CodeBlock>
          {`import { GenericContent } from '@components/GenericContent/GenericContent'

<GenericContent data={data}>
  {/* Renders headline directly */}
  <GenericContent.Headline as="h2" />

  {/* Render-prop slots — null when field is absent */}
  <GenericContent.Body>
    {(doc) => <RichTextRenderer document={doc} />}
  </GenericContent.Body>

  <GenericContent.BodyMd>
    {(md) => <Markdown>{md}</Markdown>}
  </GenericContent.BodyMd>

  <GenericContent.Media>
    {(wrapper) => (
      <img
        src={wrapper.fields.image.fields.file.url}
        alt={wrapper.fields.altText}
      />
    )}
  </GenericContent.Media>

  <GenericContent.Link>
    {(item) => <a href={item.fields.url}>{item.fields.label}</a>}
  </GenericContent.Link>

  <GenericContent.Information>
    {(card) => <InfoCard title={card.fields.title} body={card.fields.bodyInMd} />}
  </GenericContent.Information>

  <GenericContent.Actions>
    {(items) =>
      items.map(item => (
        <a key={item.sys.id} href={item.fields.url}>{item.fields.label}</a>
      ))
    }
  </GenericContent.Actions>
</GenericContent>`}
        </CodeBlock>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
