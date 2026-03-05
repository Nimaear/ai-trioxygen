import { createContext, useContext } from 'react'
import type React from 'react'
import {
  Button as RACButton,
  Dialog,
  DialogTrigger,
  Heading,
  Modal as RACModal,
  ModalOverlay,
} from 'react-aria-components'
import type { ModalOverlayProps } from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '@components/Button/Button'
import {
  body,
  closeButton,
  footer,
  header,
  overlay,
  panel,
  size as sizeVariants,
  titleStyle,
} from './modal.css'

// ─── Close context ────────────────────────────────────────────────────────────

const ModalCloseContext = createContext<(() => void) | null>(null)

function useModalClose() {
  const close = useContext(ModalCloseContext)
  if (!close) throw new Error('Modal.CloseButton must be used inside Modal.Panel')
  return close
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface ModalRootProps {
  children: React.ReactNode
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export function Modal({ children, isOpen, defaultOpen, onOpenChange }: ModalRootProps) {
  return (
    <DialogTrigger isOpen={isOpen} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </DialogTrigger>
  )
}

// ─── Trigger ──────────────────────────────────────────────────────────────────

Modal.Trigger = function ModalTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export interface ModalPanelProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
  /** @default 'md' */
  size?: keyof typeof sizeVariants
  /** Required when there is no visible Modal.Title */
  'aria-label'?: string
  children: React.ReactNode
}

Modal.Panel = function ModalPanel({
  size = 'md',
  isDismissable = true,
  children,
  'aria-label': ariaLabel,
  ...props
}: ModalPanelProps) {
  return (
    <ModalOverlay className={overlay} isDismissable={isDismissable} {...props}>
      <RACModal className={[panel, sizeVariants[size]].join(' ')}>
        <Dialog aria-label={ariaLabel}>
          {({ close }) => (
            <ModalCloseContext.Provider value={close}>
              {children}
            </ModalCloseContext.Provider>
          )}
        </Dialog>
      </RACModal>
    </ModalOverlay>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

Modal.Header = function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className={header}>{children}</div>
}

// ─── Title ────────────────────────────────────────────────────────────────────

Modal.Title = function ModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <Heading slot="title" className={titleStyle}>
      {children}
    </Heading>
  )
}

// ─── Close button ─────────────────────────────────────────────────────────────
// Without children: renders an X icon (for the header).
// With children: renders text (for footer cancel actions).

interface CloseButtonProps {
  'aria-label'?: string
  children?: React.ReactNode
}

Modal.CloseButton = function ModalCloseButton({
  'aria-label': ariaLabel,
  children,
}: CloseButtonProps) {
  const close = useModalClose()
  if (children) {
    return (
      <Button variant="secondary" onPress={close}>
        <Button.Label>{children}</Button.Label>
      </Button>
    )
  }
  return (
    <RACButton
      className={closeButton}
      onPress={close}
      aria-label={ariaLabel ?? 'Close dialog'}
    >
      <X size={16} />
    </RACButton>
  )
}

// ─── Body ─────────────────────────────────────────────────────────────────────

Modal.Body = function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className={body}>{children}</div>
}

// ─── Footer ───────────────────────────────────────────────────────────────────

Modal.Footer = function ModalFooter({ children }: { children: React.ReactNode }) {
  return <div className={footer}>{children}</div>
}

Modal.displayName = 'Modal'
