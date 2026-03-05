// ─── Contentful Rich Text ──────────────────────────────────────────────────
// Minimal types matching the marks and node types allowed by the genericContent
// content type schema.

export type RichTextMark =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'code'
  | 'superscript'
  | 'subscript'
  | 'strikethrough'

export type RichTextNodeType =
  | 'document'
  | 'paragraph'
  | 'ordered-list'
  | 'unordered-list'
  | 'list-item'
  | 'hr'
  | 'blockquote'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'table-header-cell'
  | 'text'
  | 'hyperlink'
  | 'embedded-entry-inline'
  | 'embedded-asset-block'

export interface RichTextTextNode {
  nodeType: 'text'
  value: string
  marks: Array<{ type: RichTextMark }>
  data: Record<string, unknown>
}

export interface RichTextElementNode {
  nodeType: Exclude<RichTextNodeType, 'text'>
  content: RichTextNode[]
  data: Record<string, unknown>
}

export type RichTextNode = RichTextTextNode | RichTextElementNode

export interface RichTextDocument {
  nodeType: 'document'
  content: RichTextNode[]
  data: Record<string, unknown>
}

// ─── Contentful base ───────────────────────────────────────────────────────

export interface ContentfulSys {
  id: string
  contentType?: { sys: { id: string } }
}

export interface ContentfulEntry<TFields = Record<string, unknown>> {
  sys: ContentfulSys
  fields: TFields
}

// ─── Linked entry types ────────────────────────────────────────────────────
// Minimal shapes; extend these to match your full Contentful field definitions.

export interface ImageAssetFile {
  url: string
  details?: {
    image?: { width: number; height: number }
  }
}

export interface ImageWrapperFields {
  title?: string
  altText?: string
  image: ContentfulEntry<{
    title?: string
    file: ImageAssetFile
  }>
}

export type ImageWrapper = ContentfulEntry<ImageWrapperFields>

export interface NavigationItemFields {
  label: string
  /** External or absolute URL */
  url?: string
  /** Internal slug / path */
  slug?: string
}

export type NavigationItem = ContentfulEntry<NavigationItemFields>

export interface InformationCardFields {
  title?: string
  body?: RichTextDocument
  bodyInMd?: string
}

export type InformationCard = ContentfulEntry<InformationCardFields>

// ─── Generic Content ───────────────────────────────────────────────────────

export interface GenericContentData {
  /** CMS-internal identifier — not rendered */
  internalName: string
  headline: string
  body?: RichTextDocument
  bodyInMd?: string
  inlineMedia?: ImageWrapper
  link?: NavigationItem
  information?: InformationCard
  miscActions?: NavigationItem[]
}
