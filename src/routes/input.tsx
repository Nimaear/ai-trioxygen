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
          onPress={() => { setValue(''); setSubmitted(false) }}
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
        Three sizes aligned to the Button scale, full keyboard and screen-reader support via
        React Aria. Supports labels, descriptions, validation, and all standard HTML input types.
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
        <CodeBlock>
          <span className="kw">import</span>{' { Input } '}
          <span className="kw">from</span>{' '}
          <span className="str">'@components/Input'</span>
          {'\\n\\n'}
          <span className="cmt">{'// basic'}</span>{'\\n'}
          {'<Input label="Name" placeholder="Jane Smith" />'}
          {'\\n\\n'}
          <span className="cmt">{'// small with description'}</span>{'\\n'}
          {'<Input\\n  size='}<span className="str">"sm"</span>
          {'\\n  label='}<span className="str">"Search"</span>
          {'\\n  type='}<span className="str">"search"</span>
          {'\\n  description='}<span className="str">"Results update as you type."</span>
          {'\\n/>'}
          {'\\n\\n'}
          <span className="cmt">{'// invalid with error'}</span>{'\\n'}
          {'<Input\\n  label='}<span className="str">"Email"</span>
          {'\\n  isInvalid={!isValid}'}
          {'\\n  errorMessage='}<span className="str">"Enter a valid email address."</span>
          {'\\n/>'}
        </CodeBlock>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
