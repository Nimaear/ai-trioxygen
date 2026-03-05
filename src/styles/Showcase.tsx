import { Fragment } from 'react'
import type React from 'react'
import { Sidebar } from '@components/Sidebar/Sidebar'
import {
  codeBlock,
  divider,
  eyebrow,
  eyebrowDot,
  grid2,
  grid3,
  gridAuto,
  inner,
  lead,
  matrixCell,
  matrixColLabel,
  matrixGrid,
  matrixRowLabel,
  page,
  pageLayout,
  section,
  sectionHeader,
  sectionLine,
  sectionTitle,
  showcaseDemoCard,
  showcaseLink,
  showcasePanel,
  showcaseRowAlignEnd,
  showcaseRowBase,
  showcaseRowSpaceBetween,
  showcaseStack,
  title,
  titleAccent,
} from './showcase.css'

// ─── ShowcasePage ──────────────────────────────────────────────────────────

export function ShowcasePage({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageLayout}>
      <Sidebar />
      <main className={page}>
        <div className={inner}>{children}</div>
      </main>
    </div>
  )
}

// ─── ShowcaseHero ──────────────────────────────────────────────────────────

interface ShowcaseHeroProps {
  name: string
  eyebrow?: string
  children: React.ReactNode
}

export function ShowcaseHero({
  name,
  eyebrow: eyebrowText = 'Component reference',
  children,
}: ShowcaseHeroProps) {
  return (
    <>
      <div className={eyebrow}>
        <span className={eyebrowDot} />
        {eyebrowText}
      </div>
      <h1 className={title}>
        The <span className={titleAccent}>{name}</span>
      </h1>
      <p className={lead}>{children}</p>
      <div className={divider} />
    </>
  )
}

// ─── ShowcaseSection ───────────────────────────────────────────────────────

interface ShowcaseSectionProps {
  label: string
  children: React.ReactNode
}

export function ShowcaseSection({ label, children }: ShowcaseSectionProps) {
  return (
    <section className={section}>
      <div className={sectionHeader}>
        <span className={sectionTitle}>{label}</span>
        <span className={sectionLine} />
      </div>
      {children}
    </section>
  )
}

// ─── CodeBlock ─────────────────────────────────────────────────────────────

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return <div className={codeBlock}>{children}</div>
}

// ─── ShowcaseMatrix ────────────────────────────────────────────────────────
// Renders a rows × cols grid with axis labels.
//
// Usage:
//   <ShowcaseMatrix rows={VARIANTS} cols={SIZES}>
//     {(variant, size) => <Button variant={variant} size={size} />}
//   </ShowcaseMatrix>

interface ShowcaseMatrixProps<TRow extends string, TCol extends string> {
  rows: readonly TRow[]
  cols: readonly TCol[]
  children: (row: TRow, col: TCol) => React.ReactNode
}

export function ShowcaseMatrix<TRow extends string, TCol extends string>({
  rows,
  cols,
  children,
}: ShowcaseMatrixProps<TRow, TCol>) {
  return (
    <div
      className={matrixGrid}
      style={{ gridTemplateColumns: `auto repeat(${cols.length}, 1fr)` }}
    >
      {/* Column header row */}
      <span />
      {cols.map((col) => (
        <span key={col} className={matrixColLabel}>{col}</span>
      ))}
      {/* Data rows */}
      {rows.map((row) => (
        <Fragment key={row}>
          <span className={matrixRowLabel}>{row}</span>
          {cols.map((col) => (
            <div key={col} className={matrixCell}>
              {children(row, col)}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

// ─── ShowcaseGrid ──────────────────────────────────────────────────────────
// Responsive CSS grid. cols=2|3 are fixed; cols="auto" fills with 18rem min.

interface ShowcaseGridProps {
  cols?: 2 | 3 | 'auto'
  children: React.ReactNode
}

export function ShowcaseGrid({ cols = 'auto', children }: ShowcaseGridProps) {
  const cls = cols === 2 ? grid2 : cols === 3 ? grid3 : gridAuto
  return <div className={cls}>{children}</div>
}

// ─── ShowcaseRow ───────────────────────────────────────────────────────────
// Flex row with optional alignment and justification.

interface ShowcaseRowProps {
  align?: 'center' | 'end'
  justify?: 'between'
  children: React.ReactNode
}

export function ShowcaseRow({ align = 'center', justify, children }: ShowcaseRowProps) {
  const classes = [
    showcaseRowBase,
    align === 'end' && showcaseRowAlignEnd,
    justify === 'between' && showcaseRowSpaceBetween,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

// ─── ShowcasePanel ─────────────────────────────────────────────────────────
// Subtle background container for grouped items (e.g. states demo).

export function ShowcasePanel({ children }: { children: React.ReactNode }) {
  return <div className={showcasePanel}>{children}</div>
}

// ─── ShowcaseStack ─────────────────────────────────────────────────────────
// Flex column with optional max-width constraint.

interface ShowcaseStackProps {
  maxWidth?: string
  children: React.ReactNode
}

export function ShowcaseStack({ maxWidth, children }: ShowcaseStackProps) {
  return (
    <div className={showcaseStack} style={maxWidth ? { maxWidth } : undefined}>
      {children}
    </div>
  )
}

// ─── ShowcaseDemoCard ──────────────────────────────────────────────────────
// Bordered, padded card for wrapping component demo instances.

export function ShowcaseDemoCard({ children }: { children: React.ReactNode }) {
  return <div className={showcaseDemoCard}>{children}</div>
}

// ─── ShowcaseLink ──────────────────────────────────────────────────────────
// Styled anchor for use in component demos.

interface ShowcaseLinkProps {
  href?: string
  children: React.ReactNode
}

export function ShowcaseLink({ href = '#', children }: ShowcaseLinkProps) {
  return (
    <a href={href} className={showcaseLink}>
      {children}
    </a>
  )
}
