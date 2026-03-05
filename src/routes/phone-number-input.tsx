import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PhoneNumberInput } from '@components/PhoneNumberInput'
import {
  CodeBlock,
  ShowcaseDemoCard,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'

export const Route = createFileRoute('/phone-number-input')({ component: PhoneNumberInputPage })

function LiveDemo() {
  const [value, setValue] = useState('')
  return (
    <ShowcaseDemoCard>
      <PhoneNumberInput
        label="Phone number"
        description={value ? `E.164: ${value}` : 'Select a country, then type your number.'}
        onChange={setValue}
        defaultCountry="SE"
      />
    </ShowcaseDemoCard>
  )
}

function PhoneNumberInputPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Phone Number Input">
        A combined country-code selector and number input. The flag dropdown
        lists 90+ countries with their dial codes; selecting one prepends the
        code to the assembled E.164 value. Typing or pasting a full international
        number (e.g. <code>+46701234567</code>) auto-detects the country and
        updates the flag.
      </ShowcaseHero>

      {/* ── Live demo ───────────────────────────────────────────── */}
      <ShowcaseSection label="Live demo">
        <LiveDemo />
      </ShowcaseSection>

      {/* ── Size scale ──────────────────────────────────────────── */}
      <ShowcaseSection label="Size scale">
        <ShowcaseStack maxWidth="22rem">
          <PhoneNumberInput size="sm" label="Small"  defaultCountry="GB" />
          <PhoneNumberInput size="md" label="Medium" defaultCountry="DE" />
          <PhoneNumberInput size="lg" label="Large"  defaultCountry="JP" />
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── States ──────────────────────────────────────────────── */}
      <ShowcaseSection label="States">
        <ShowcaseGrid>
          <PhoneNumberInput
            label="Default"
            defaultCountry="US"
          />
          <PhoneNumberInput
            label="With description"
            description="Include country code if calling internationally."
            defaultCountry="FR"
          />
          <PhoneNumberInput
            label="Disabled"
            isDisabled
            defaultCountry="AU"
          />
          <PhoneNumberInput
            label="Invalid"
            isInvalid
            errorMessage="Please enter a valid phone number."
            defaultCountry="IN"
          />
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Auto-detect ─────────────────────────────────────────── */}
      <ShowcaseSection label="Auto-detect dial code">
        <ShowcaseStack maxWidth="22rem">
          <ShowcaseDemoCard>
            <PhoneNumberInput
              label="Paste a full international number"
              description='Try pasting "+44 20 7946 0958" or "+81 3 1234 5678"'
              defaultCountry="US"
            />
          </ShowcaseDemoCard>
        </ShowcaseStack>
      </ShowcaseSection>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <ShowcaseSection label="Usage">
        <ShowcaseStack>
          <CodeBlock>{`import { PhoneNumberInput } from '@components/PhoneNumberInput'`}</CodeBlock>

          <CodeBlock>{`// Basic — onChange receives the full E.164 string
<PhoneNumberInput
  label="Phone number"
  defaultCountry="SE"
  onChange={(e164) => console.log(e164)}  // "+46701234567"
/>`}</CodeBlock>

          <CodeBlock>{`// With validation
<PhoneNumberInput
  label="Mobile number"
  description="Used for 2-factor authentication."
  isInvalid={!isValid}
  errorMessage="Enter a valid international number."
/>`}</CodeBlock>

          <CodeBlock>{`// In a form (hidden input carries E.164 value)
<PhoneNumberInput
  label="Contact number"
  name="phone"    // submits full E.164 via native form
  defaultCountry="GB"
/>`}</CodeBlock>
        </ShowcaseStack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
