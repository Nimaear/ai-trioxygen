import type React from 'react'
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from 'react-aria-components'
import type { DisclosureGroupProps, DisclosureProps } from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import { chevron, group, item, panel, panelInner, triggerButton, triggerHeading } from './accordion.css'

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface AccordionProps
  extends Omit<DisclosureGroupProps, 'className' | 'children'> {
  children: React.ReactNode
}

export function Accordion({ children, ...props }: AccordionProps) {
  return (
    <DisclosureGroup className={group} {...props}>
      {children}
    </DisclosureGroup>
  )
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface AccordionItemProps
  extends Omit<DisclosureProps, 'className' | 'children'> {
  children: React.ReactNode
}

Accordion.Item = function AccordionItem({ children, ...props }: AccordionItemProps) {
  return (
    <Disclosure className={item} {...props}>
      {children}
    </Disclosure>
  )
}

// ─── Trigger ──────────────────────────────────────────────────────────────────

interface AccordionTriggerProps {
  children: React.ReactNode
}

Accordion.Trigger = function AccordionTrigger({ children }: AccordionTriggerProps) {
  return (
    <Heading className={triggerHeading}>
      <Button slot="trigger" className={triggerButton}>
        <span>{children}</span>
        <ChevronDown size={16} className={chevron} />
      </Button>
    </Heading>
  )
}

// ─── Panel ────────────────────────────────────────────────────────────────────

interface AccordionPanelProps {
  children: React.ReactNode
}

Accordion.Panel = function AccordionPanel({ children }: AccordionPanelProps) {
  return (
    <DisclosurePanel className={panel}>
      <div className={panelInner}>{children}</div>
    </DisclosurePanel>
  )
}

Accordion.displayName = 'Accordion'
