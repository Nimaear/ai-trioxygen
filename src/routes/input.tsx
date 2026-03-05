import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@components/Button/Button'
import { Input } from '@components/Input'
import {
  CodeBlock,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseRow,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/input')({ component: InputPage })

function SubscribeDemo() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <ShowcaseRow align="end">
        <Input
          size="md"
          label="Email address"
          value={value}
          isReadOnly
          description="You're subscribed!"
        />
        <Button
          size="md"
          variant="secondary"
          onPress={() => {
            setValue('')
            setSubmitted(false)
          }}
        >
          Reset
        </Button>
      </ShowcaseRow>
    )
  }

  return (
    <ShowcaseRow align="end">
      <Input
        size="md"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        value={value}
        onChange={setValue}
        description="We'll never share your email."
      />
      <Button
        size="md"
        isDisabled={!value.includes('@')}
        onPress={() => setSubmitted(true)}
      >
        Subscribe
      </Button>
    </ShowcaseRow>
  )
}

function InputPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Input">
        Three sizes aligned to the Button scale, full keyboard and screen-reader
        support via React Aria. Supports labels, descriptions, validation, and
        all standard HTML input types.
      </ShowcaseHero>

      <ShowcaseSection label="Size scale">
        <ShowcaseStack maxWidth="28rem">
          <Input size="sm" label="Small" placeholder="Small input" />
          <Input size="md" label="Medium" placeholder="Medium input" />
          <Input size="lg" label="Large" placeholder="Large input" />
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="States">
        <ShowcaseGrid>
          <Input label="Default" placeholder="Type something…" />
          <Input
            label="With description"
            placeholder="john@example.com"
            type="email"
            description="Used for login and notifications."
          />
          <Input
            label="Read only"
            value="read-only value"
            isReadOnly
            description="This value cannot be edited."
          />
          <Input label="Disabled" placeholder="Not available" isDisabled />
          <Input
            label="Invalid"
            defaultValue="bad-value"
            isInvalid
            errorMessage="Please enter a valid value."
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            description="Minimum 8 characters."
          />
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Paired with Button">
        <SubscribeDemo />
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>{`import { Input } from '@components/Input'`}</CodeBlock>
          <CodeBlock>{`// basic
<Input label="Name" placeholder="Jane Smith" />`}</CodeBlock>
          <CodeBlock>{`// small with description
<Input
  size="sm"
  label="Search"
  type="search"
  description="Results update as you type."
/>`}</CodeBlock>
          <CodeBlock>{`// invalid with error
<Input
  label="Email"
  isInvalid={!isValid}
  errorMessage="Enter a valid email address."
/>`}</CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
