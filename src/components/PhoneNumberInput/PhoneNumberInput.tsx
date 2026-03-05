import { useState, useId } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select as RACSelect,
} from 'react-aria-components'
import type { Key } from 'react-aria-components'
import { COUNTRIES, COUNTRIES_BY_DIAL_CODE, type Country } from './countries'
import {
  chevron,
  countryTrigger,
  description as descriptionStyle,
  dialCodeText,
  errorMessage as errorMessageStyle,
  flagText,
  inputGroup,
  inputGroupDisabled,
  inputGroupInvalid,
  inputGroupNormal,
  item,
  itemCheck,
  itemDialCode,
  itemFlag,
  itemName,
  label as labelStyle,
  listbox,
  numberInput,
  numberInputSize,
  popover,
  root,
  selectRoot,
  size as sizeVariants,
  triggerSize,
} from './phone-number-input.css'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function findByCode(code: string): Country {
  return COUNTRIES.find(c => c.code === code) ?? COUNTRIES[0]
}

function detectCountry(value: string): Country | null {
  if (!value.startsWith('+')) return null
  // COUNTRIES_BY_DIAL_CODE is sorted longest-first; first match wins
  const match = COUNTRIES_BY_DIAL_CODE.find(
    c => value.startsWith(c.dialCode) && value.length > c.dialCode.length,
  )
  return match ?? null
}

// ─── Component ───────────────────────────────────────────────────────────────

export interface PhoneNumberInputProps {
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  /** ISO 3166-1 alpha-2 country code for the initial selection. @default 'US' */
  defaultCountry?: string
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg'
  /** Called with the full E.164 number, e.g. "+46701234567" */
  onChange?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
  name?: string
}

export function PhoneNumberInput({
  label,
  description,
  errorMessage,
  placeholder = 'Phone number',
  defaultCountry = 'US',
  size = 'md',
  onChange,
  isDisabled,
  isInvalid,
  name,
}: PhoneNumberInputProps) {
  const [country, setCountry] = useState<Country>(() => findByCode(defaultCountry))
  const [number, setNumber] = useState('')
  const labelId = useId()

  function handleCountryChange(key: Key) {
    const next = COUNTRIES.find(c => c.code === key)
    if (!next) return
    setCountry(next)
    onChange?.(next.dialCode + number)
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value

    // Auto-detect country when the user types or pastes a full +dialCode prefix
    const detected = detectCountry(raw)
    if (detected) {
      const local = raw.slice(detected.dialCode.length).replace(/^\s+/, '')
      setCountry(detected)
      setNumber(local)
      onChange?.(detected.dialCode + local)
      return
    }

    setNumber(raw)
    onChange?.(country.dialCode + raw)
  }

  const groupClass = [
    inputGroup,
    sizeVariants[size],
    isInvalid ? inputGroupInvalid : inputGroupNormal,
    isDisabled ? inputGroupDisabled : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={root} role="group" aria-labelledby={label ? labelId : undefined}>
      {/* Hidden input for native form submission */}
      {name && <input type="hidden" name={name} value={country.dialCode + number} />}

      {label && (
        <label id={labelId} className={labelStyle}>
          {label}
        </label>
      )}

      <div className={groupClass}>
        {/* ── Country selector ── */}
        <RACSelect
          selectedKey={country.code}
          onSelectionChange={handleCountryChange}
          isDisabled={isDisabled}
          aria-label="Select country code"
          className={selectRoot}
        >
          <Button className={[countryTrigger, triggerSize[size]].join(' ')}>
            <span className={flagText}>{country.flag}</span>
            <span className={dialCodeText}>{country.dialCode}</span>
            <ChevronDown size={12} className={chevron} />
          </Button>
          <Popover className={popover}>
            <ListBox className={listbox}>
              {COUNTRIES.map(c => (
                <ListBoxItem
                  key={c.code}
                  id={c.code}
                  textValue={`${c.name} ${c.dialCode}`}
                  className={item}
                >
                  <span className={itemFlag}>{c.flag}</span>
                  <span className={itemName}>{c.name}</span>
                  <span className={itemDialCode}>{c.dialCode}</span>
                  <Check size={12} className={itemCheck} />
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </RACSelect>

        {/* ── Phone number input ── */}
        <input
          type="tel"
          className={[numberInput, numberInputSize[size]].join(' ')}
          placeholder={placeholder}
          value={number}
          onChange={handleNumberChange}
          disabled={isDisabled}
          aria-invalid={isInvalid || undefined}
          aria-label={label ? 'Phone number' : undefined}
        />
      </div>

      {description && <span className={descriptionStyle}>{description}</span>}
      {errorMessage && <span className={errorMessageStyle}>{errorMessage}</span>}
    </div>
  )
}
