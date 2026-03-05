import { createFileRoute } from '@tanstack/react-router'
import { Accordion } from '@components/Accordion/Accordion'
import {
  CodeBlock,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/accordion')({ component: AccordionPage })

// ─── Demos ────────────────────────────────────────────────────────────────────

function BasicAccordion() {
  return (
    <Accordion>
      <Accordion.Item id="what">
        <Accordion.Trigger>What is Trioxygen?</Accordion.Trigger>
        <Accordion.Panel>
          Trioxygen is a focused set of accessible, composable components built on React Aria.
          Headless by default, styled with design tokens, with zero runtime CSS overhead.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="headless">
        <Accordion.Trigger>What does "headless" mean?</Accordion.Trigger>
        <Accordion.Panel>
          Headless means the component ships with no visual styles baked in — only
          behaviour, accessibility semantics, and keyboard interactions. You bring
          the design via design tokens or your own CSS.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="aria">
        <Accordion.Trigger>Why React Aria?</Accordion.Trigger>
        <Accordion.Panel>
          React Aria handles the hard parts of accessibility: ARIA attributes, keyboard
          navigation, focus management, and cross-browser quirks — so you can focus on
          building the product.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

function MultipleExpandedAccordion() {
  return (
    <Accordion allowsMultipleExpanded>
      <Accordion.Item id="design">
        <Accordion.Trigger>Design tokens</Accordion.Trigger>
        <Accordion.Panel>
          All visual properties — colour, spacing, typography, border radius — are defined
          as design tokens via Vanilla Extract. Swap the token values and the entire system
          updates consistently.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="a11y">
        <Accordion.Trigger>Accessibility</Accordion.Trigger>
        <Accordion.Panel>
          Every component passes WCAG 2.1 AA. Focus indicators, colour contrast, keyboard
          operability, and screen-reader announcements are all covered out of the box.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="ts">
        <Accordion.Trigger>TypeScript</Accordion.Trigger>
        <Accordion.Panel>
          Full TypeScript coverage with strict types. Props are inferred from the underlying
          React Aria primitives so you get accurate autocomplete and compile-time safety.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

function DefaultExpandedAccordion() {
  return (
    <Accordion defaultExpandedKeys={['first']}>
      <Accordion.Item id="first">
        <Accordion.Trigger>Open by default</Accordion.Trigger>
        <Accordion.Panel>
          Pass <code>defaultExpandedKeys</code> to the root with the <code>id</code> of
          any item you want pre-expanded on first render.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="second">
        <Accordion.Trigger>Collapsed by default</Accordion.Trigger>
        <Accordion.Panel>
          This panel starts collapsed. Click to expand.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="disabled" isDisabled>
        <Accordion.Trigger>Disabled item</Accordion.Trigger>
        <Accordion.Panel>
          This content is unreachable because the item is disabled.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function AccordionPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Accordion">
        Headless compound component built on React Aria's Disclosure and DisclosureGroup
        primitives. Supports single or multiple expanded panels, default-expanded items,
        disabled items, and full keyboard navigation.
      </ShowcaseHero>

      <ShowcaseSection label="Default (single expand)">
        <ShowcaseStack maxWidth="560px">
          <BasicAccordion />
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="Multiple expanded">
        <ShowcaseStack maxWidth="560px">
          <MultipleExpandedAccordion />
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="Default expanded & disabled item">
        <ShowcaseStack maxWidth="560px">
          <DefaultExpandedAccordion />
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>{`import { Accordion } from '@components/Accordion/Accordion'`}</CodeBlock>
          <CodeBlock>{`// Single expand (default)
<Accordion>
  <Accordion.Item id="q1">
    <Accordion.Trigger>Question one</Accordion.Trigger>
    <Accordion.Panel>Answer one</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item id="q2">
    <Accordion.Trigger>Question two</Accordion.Trigger>
    <Accordion.Panel>Answer two</Accordion.Panel>
  </Accordion.Item>
</Accordion>`}</CodeBlock>
          <CodeBlock>{`// Allow multiple panels open at once
<Accordion allowsMultipleExpanded>
  ...
</Accordion>`}</CodeBlock>
          <CodeBlock>{`// Pre-expand items by id
<Accordion defaultExpandedKeys={['q1']}>
  ...
</Accordion>`}</CodeBlock>
          <CodeBlock>{`// Disable an individual item
<Accordion.Item id="q3" isDisabled>
  ...
</Accordion.Item>`}</CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
