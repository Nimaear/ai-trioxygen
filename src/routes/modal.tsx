import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { AlertTriangle, Info, Trash2 } from 'lucide-react'
import { Button } from '@components/Button/Button'
import { Modal } from '@components/Modal/Modal'
import {
  CodeBlock,
  ShowcaseHero,
  ShowcasePage,
  ShowcasePanel,
  ShowcaseRow,
  ShowcaseSection,
} from '@/styles/Showcase'

export const Route = createFileRoute('/modal')({ component: ModalPage })

// ─── Demos ────────────────────────────────────────────────────────────────────

function BasicModal() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button variant="secondary">
          <Button.Label>Open modal</Button.Label>
        </Button>
      </Modal.Trigger>
      <Modal.Panel>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          This is a basic modal. Press <kbd>Escape</kbd> or click outside to dismiss it.
          Focus is trapped inside while it is open.
        </Modal.Body>
        <Modal.Footer>
          <Modal.CloseButton>Cancel</Modal.CloseButton>
          <Button variant="primary">
            <Button.Label>Confirm</Button.Label>
          </Button>
        </Modal.Footer>
      </Modal.Panel>
    </Modal>
  )
}

function ConfirmDeleteModal() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button variant="ghost" aria-label="Delete item">
          <Button.Icon><Trash2 size={16} /></Button.Icon>
          <Button.Label>Delete</Button.Label>
        </Button>
      </Modal.Trigger>
      <Modal.Panel size="sm" isDismissable={false}>
        <Modal.Header>
          <Modal.Title>Delete item?</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          This action cannot be undone. The item will be permanently removed from your workspace.
        </Modal.Body>
        <Modal.Footer>
          <Modal.CloseButton>Cancel</Modal.CloseButton>
          <Button variant="primary">
            <Button.Icon><Trash2 size={16} /></Button.Icon>
            <Button.Label>Delete</Button.Label>
          </Button>
        </Modal.Footer>
      </Modal.Panel>
    </Modal>
  )
}

function AlertModal() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button variant="secondary">
          <Button.Icon><AlertTriangle size={16} /></Button.Icon>
          <Button.Label>Show alert</Button.Label>
        </Button>
      </Modal.Trigger>
      <Modal.Panel size="sm">
        <Modal.Header>
          <Modal.Title>Something went wrong</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          We encountered an unexpected error while processing your request. Please try again or
          contact support if the problem persists.
        </Modal.Body>
        <Modal.Footer>
          <Modal.CloseButton>Dismiss</Modal.CloseButton>
        </Modal.Footer>
      </Modal.Panel>
    </Modal>
  )
}

function ControlledModal() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Button variant="primary" onPress={() => setOpen(true)}>
        <Button.Icon><Info size={16} /></Button.Icon>
        <Button.Label>Open (controlled)</Button.Label>
      </Button>
      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Panel>
          <Modal.Header>
            <Modal.Title>Controlled modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            This modal is driven by external state (<code>isOpen</code> /{' '}
            <code>onOpenChange</code>). Useful when you need to open the modal
            programmatically without a trigger element.
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseButton>Close</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Panel>
      </Modal>
    </div>
  )
}

// ─── Sizes demo ───────────────────────────────────────────────────────────────

const SIZES = ['sm', 'md', 'lg'] as const

function SizesDemo() {
  return (
    <ShowcaseRow>
      {SIZES.map((size) => (
        <Modal key={size}>
          <Modal.Trigger>
            <Button variant="secondary" size="sm">
              <Button.Label>{size}</Button.Label>
            </Button>
          </Modal.Trigger>
          <Modal.Panel size={size}>
            <Modal.Header>
              <Modal.Title>Size: {size}</Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              The <code>{size}</code> panel constrains the max-width to{' '}
              {size === 'sm' ? '28rem' : size === 'md' ? '36rem' : '48rem'}.
              Content inside scrolls when it overflows.
            </Modal.Body>
            <Modal.Footer>
              <Modal.CloseButton>Close</Modal.CloseButton>
            </Modal.Footer>
          </Modal.Panel>
        </Modal>
      ))}
    </ShowcaseRow>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function ModalPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Modal">
        Headless compound component built on React Aria's Modal and Dialog primitives.
        Focus is trapped, Escape closes, and screen readers get full dialog semantics.
        Three sizes, dismissable or locked, and supports both controlled and uncontrolled usage.
      </ShowcaseHero>

      <ShowcaseSection label="Variants">
        <ShowcasePanel>
          <BasicModal />
          <ConfirmDeleteModal />
          <AlertModal />
        </ShowcasePanel>
      </ShowcaseSection>

      <ShowcaseSection label="Sizes">
        <SizesDemo />
      </ShowcaseSection>

      <ShowcaseSection label="Controlled">
        <ShowcasePanel>
          <ControlledModal />
        </ShowcasePanel>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <CodeBlock>
          {`import { Modal } from '@components/Modal/Modal'
import { Button } from '@components/Button/Button'

// Uncontrolled (trigger-based)
<Modal>
  <Modal.Trigger>
    <Button variant="secondary">
      <Button.Label>Open modal</Button.Label>
    </Button>
  </Modal.Trigger>
  <Modal.Panel size="md" isDismissable>
    <Modal.Header>
      <Modal.Title>Are you sure?</Modal.Title>
      <Modal.CloseButton />
    </Modal.Header>
    <Modal.Body>
      This action cannot be undone.
    </Modal.Body>
    <Modal.Footer>
      <Modal.CloseButton>Cancel</Modal.CloseButton>
      <Button variant="primary">
        <Button.Label>Confirm</Button.Label>
      </Button>
    </Modal.Footer>
  </Modal.Panel>
</Modal>

// Controlled
const [open, setOpen] = useState(false)

<Button onPress={() => setOpen(true)}>
  <Button.Label>Open</Button.Label>
</Button>

<Modal isOpen={open} onOpenChange={setOpen}>
  <Modal.Panel>...</Modal.Panel>
</Modal>`}
        </CodeBlock>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
