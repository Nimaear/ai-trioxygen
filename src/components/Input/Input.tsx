import {
  FieldError,
  Input as RACInput,
  Label,
  Text,
  TextField,
  type TextFieldProps,
  type ValidationResult,
} from 'react-aria-components'
import {
  description as descriptionStyle,
  errorMessage as errorMessageStyle,
  input,
  label as labelStyle,
  root,
  size as sizeVariants,
} from './input.css'

export interface InputProps extends Omit<TextFieldProps, 'className'> {
  label?: string
  description?: string
  errorMessage?: string | ((v: ValidationResult) => string)
  placeholder?: string
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
}

export function Input({
  label,
  description,
  errorMessage,
  placeholder,
  size = 'md',
  ...props
}: InputProps) {
  return (
    <TextField {...props} className={root}>
      {label && <Label className={labelStyle}>{label}</Label>}
      <RACInput className={[input, sizeVariants[size]].join(' ')} placeholder={placeholder} />
      {description && (
        <Text slot="description" className={descriptionStyle}>
          {description}
        </Text>
      )}
      <FieldError className={errorMessageStyle}>{errorMessage}</FieldError>
    </TextField>
  )
}
