import { createContext, useContext } from 'react'
import type React from 'react'
import { Heading } from '@components/Typography'
import type { HeadingProps } from '@components/Typography'
import type {
  GenericContentData,
  ImageWrapper,
  InformationCard,
  NavigationItem,
  RichTextDocument,
} from './types'

// ─── Context ───────────────────────────────────────────────────────────────

const GenericContentContext = createContext<GenericContentData | null>(null)

function useGenericContent(): GenericContentData {
  const ctx = useContext(GenericContentContext)
  if (!ctx) throw new Error('GenericContent compound components must be used inside <GenericContent>.')
  return ctx
}

// ─── Root ──────────────────────────────────────────────────────────────────

interface GenericContentProps {
  data: GenericContentData
  children: React.ReactNode
}

export function GenericContent({ data, children }: GenericContentProps) {
  return (
    <GenericContentContext.Provider value={data}>
      {children}
    </GenericContentContext.Provider>
  )
}

// ─── Headline ──────────────────────────────────────────────────────────────

interface HeadlineProps {
  /** Visual heading level. @default 2 */
  level?: HeadingProps['level']
  /** Rendered element. Defaults to h{level}. */
  as?: HeadingProps['as']
}

GenericContent.Headline = function Headline({ level = 2, as }: HeadlineProps) {
  const { headline } = useGenericContent()
  return <Heading level={level} as={as}>{headline}</Heading>
}

// ─── Body (Rich Text) ──────────────────────────────────────────────────────

interface BodyProps {
  children: (document: RichTextDocument) => React.ReactNode
}

GenericContent.Body = function Body({ children }: BodyProps) {
  const { body } = useGenericContent()
  if (!body) return null
  return <>{children(body)}</>
}

// ─── Body in Markdown ──────────────────────────────────────────────────────

interface BodyMdProps {
  children: (markdown: string) => React.ReactNode
}

GenericContent.BodyMd = function BodyMd({ children }: BodyMdProps) {
  const { bodyInMd } = useGenericContent()
  if (!bodyInMd) return null
  return <>{children(bodyInMd)}</>
}

// ─── Inline Media ──────────────────────────────────────────────────────────

interface MediaProps {
  children: (imageWrapper: ImageWrapper) => React.ReactNode
}

GenericContent.Media = function Media({ children }: MediaProps) {
  const { inlineMedia } = useGenericContent()
  if (!inlineMedia) return null
  return <>{children(inlineMedia)}</>
}

// ─── Link ──────────────────────────────────────────────────────────────────

interface LinkProps {
  children: (item: NavigationItem) => React.ReactNode
}

GenericContent.Link = function Link({ children }: LinkProps) {
  const { link } = useGenericContent()
  if (!link) return null
  return <>{children(link)}</>
}

// ─── Information ───────────────────────────────────────────────────────────

interface InformationProps {
  children: (card: InformationCard) => React.ReactNode
}

GenericContent.Information = function Information({ children }: InformationProps) {
  const { information } = useGenericContent()
  if (!information) return null
  return <>{children(information)}</>
}

// ─── Miscellaneous Actions ─────────────────────────────────────────────────

interface ActionsProps {
  children: (items: NavigationItem[]) => React.ReactNode
}

GenericContent.Actions = function Actions({ children }: ActionsProps) {
  const { miscActions } = useGenericContent()
  if (!miscActions?.length) return null
  return <>{children(miscActions)}</>
}

// ─── Type augmentation ─────────────────────────────────────────────────────

GenericContent.displayName = 'GenericContent'

declare module './GenericContent' {
  interface GenericContent {
    Headline: typeof GenericContent.Headline
    Body: typeof GenericContent.Body
    BodyMd: typeof GenericContent.BodyMd
    Media: typeof GenericContent.Media
    Link: typeof GenericContent.Link
    Information: typeof GenericContent.Information
    Actions: typeof GenericContent.Actions
  }
}
