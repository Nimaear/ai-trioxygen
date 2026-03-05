import { Check, ChevronDown } from 'lucide-react'
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  ComboBox as RACComboBox,
  Text,
} from 'react-aria-components'
import type {
  ListBoxItemProps,
  ComboBoxProps as RACComboBoxProps,
  ValidationResult,
} from 'react-aria-components'
import {
  chevron,
  description as descriptionStyle,
  emptyState,
  errorMessage as errorMessageStyle,
  input,
  inputGroup,
  inputSize,
  item,
  itemCheck,
  label as labelStyle,
  listbox,
  popover,
  root,
  size as sizeVariants,
  toggleButton,
  toggleSize,
} from './combobox.css'

// ─── ComboboxItem ───────────────────────────────────────────────────────────

export interface ComboboxItemProps extends Omit<ListBoxItemProps, 'className'> {
  children: string
}

export function ComboboxItem({ children, ...props }: ComboboxItemProps) {
  return (
    <ListBoxItem {...props} className={item} textValue={children}>
      <Check size={12} className={itemCheck} />
      {children}
    </ListBoxItem>
  )
}

// ─── Combobox ───────────────────────────────────────────────────────────────

export interface ComboboxProps<T extends object> extends Omit<
  RACComboBoxProps<T>,
  'className' | 'children'
> {
  label?: string
  description?: string
  errorMessage?: string | ((v: ValidationResult) => string)
  placeholder?: string
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Combobox<T extends object>({
  label,
  description,
  errorMessage,
  placeholder = 'Type to search…',
  size = 'md',
  children,
  ...props
}: ComboboxProps<T>) {
  return (
    <RACComboBox
      menuTrigger="focus"
      allowsEmptyCollection
      {...props}
      className={root}
    >
      {label && <Label className={labelStyle}>{label}</Label>}
      <div className={[inputGroup, sizeVariants[size]].join(' ')}>
        <Input
          className={[input, inputSize[size]].join(' ')}
          placeholder={placeholder}
        />
        <Button className={[toggleButton, toggleSize[size]].join(' ')}>
          <ChevronDown size={14} className={chevron} />
        </Button>
      </div>
      {description && (
        <Text slot="description" className={descriptionStyle}>
          {description}
        </Text>
      )}
      <FieldError className={errorMessageStyle}>{errorMessage}</FieldError>
      <Popover className={popover}>
        <ListBox
          className={listbox}
          renderEmptyState={() => (
            <div className={emptyState}>No results found.</div>
          )}
        >
          {children}
        </ListBox>
      </Popover>
    </RACComboBox>
  )
}
