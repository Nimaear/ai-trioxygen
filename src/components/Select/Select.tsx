import { Check, ChevronDown } from 'lucide-react'
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover,
  Select as RACSelect,
  type SelectProps as RACSelectProps,
  SelectValue,
  Text,
  type ValidationResult,
} from 'react-aria-components'
import {
  chevron,
  description as descriptionStyle,
  errorMessage as errorMessageStyle,
  item,
  itemCheck,
  label as labelStyle,
  listbox,
  placeholder as placeholderStyle,
  popover,
  root,
  size as sizeVariants,
  trigger,
  value,
} from './select.css'

// ─── SelectItem ─────────────────────────────────────────────────────────────

export interface SelectItemProps extends Omit<ListBoxItemProps, 'className'> {
  children: React.ReactNode
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <ListBoxItem {...props} className={item}>
      <Check size={12} className={itemCheck} />
      {children}
    </ListBoxItem>
  )
}

// ─── Select ─────────────────────────────────────────────────────────────────

export interface SelectProps<T extends object>
  extends Omit<RACSelectProps<T>, 'className' | 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((v: ValidationResult) => string)
  placeholder?: string
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  placeholder = 'Select an option',
  size = 'md',
  children,
  ...props
}: SelectProps<T>) {
  return (
    <RACSelect {...props} className={root}>
      {label && <Label className={labelStyle}>{label}</Label>}
      <Button className={[trigger, sizeVariants[size]].join(' ')}>
        <SelectValue className={value}>
          {({ isPlaceholder, selectedText }) =>
            isPlaceholder ? (
              <span className={placeholderStyle}>{placeholder}</span>
            ) : (
              selectedText
            )
          }
        </SelectValue>
        <ChevronDown size={14} className={chevron} />
      </Button>
      {description && (
        <Text slot="description" className={descriptionStyle}>
          {description}
        </Text>
      )}
      <FieldError className={errorMessageStyle}>{errorMessage}</FieldError>
      <Popover className={popover}>
        <ListBox className={listbox}>{children}</ListBox>
      </Popover>
    </RACSelect>
  )
}
