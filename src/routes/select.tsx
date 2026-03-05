import { createFileRoute } from '@tanstack/react-router'
import { Select, SelectItem } from '@components/Select/Select'
import {
  CodeBlock,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/select')({ component: SelectPage })

function SelectPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Select">
        Accessible single-selection dropdown built on React Aria's Select and
        Popover primitives. Three sizes aligned to the Input and Button scale,
        full keyboard navigation, and screen-reader support out of the box.
      </ShowcaseHero>

      <ShowcaseSection label="Size scale">
        <ShowcaseStack maxWidth="28rem">
          <Select size="sm" label="Small" placeholder="Choose one…">
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
            <SelectItem id="c">Option C</SelectItem>
          </Select>
          <Select size="md" label="Medium" placeholder="Choose one…">
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
            <SelectItem id="c">Option C</SelectItem>
          </Select>
          <Select size="lg" label="Large" placeholder="Choose one…">
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
            <SelectItem id="c">Option C</SelectItem>
          </Select>
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="States">
        <ShowcaseGrid>
          <Select label="Default" placeholder="Choose one…">
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
            <SelectItem id="c">Option C</SelectItem>
          </Select>
          <Select
            label="With description"
            description="Affects how notifications are sent."
            placeholder="Choose one…"
          >
            <SelectItem id="email">Email</SelectItem>
            <SelectItem id="sms">SMS</SelectItem>
            <SelectItem id="push">Push</SelectItem>
          </Select>
          <Select
            label="Pre-selected"
            defaultSelectedKey="dog"
            description="Default value set via defaultSelectedKey."
          >
            <SelectItem id="cat">Cat</SelectItem>
            <SelectItem id="dog">Dog</SelectItem>
            <SelectItem id="bird">Bird</SelectItem>
          </Select>
          <Select label="Disabled" placeholder="Not available" isDisabled>
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
          </Select>
          <Select
            label="With disabled item"
            placeholder="Choose one…"
            disabledKeys={['platypus']}
          >
            <SelectItem id="koala">Koala</SelectItem>
            <SelectItem id="kangaroo">Kangaroo</SelectItem>
            <SelectItem id="platypus">Platypus (unavailable)</SelectItem>
            <SelectItem id="wombat">Wombat</SelectItem>
          </Select>
          <Select
            label="Invalid"
            isInvalid
            placeholder="Choose one…"
            errorMessage="A selection is required."
          >
            <SelectItem id="a">Option A</SelectItem>
            <SelectItem id="b">Option B</SelectItem>
          </Select>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>{`import { Select, SelectItem } from '@components/Select'`}</CodeBlock>
          <CodeBlock>{`// Basic
<Select label="Animal" placeholder="Choose one…">
  <SelectItem id="cat">Cat</SelectItem>
  <SelectItem id="dog">Dog</SelectItem>
  <SelectItem id="bird">Bird</SelectItem>
</Select>`}</CodeBlock>
          <CodeBlock>{`// With description and default value
<Select
  label="Notification channel"
  description="Affects how alerts are delivered."
  defaultSelectedKey="email"
>
  <SelectItem id="email">Email</SelectItem>
  <SelectItem id="sms">SMS</SelectItem>
  <SelectItem id="push">Push</SelectItem>
</Select>`}</CodeBlock>
          <CodeBlock>{`// Controlled
const [value, setValue] = useState<string>('')

<Select
  label="Size"
  selectedKey={value}
  onSelectionChange={(key) => setValue(key as string)}
>
  <SelectItem id="sm">Small</SelectItem>
  <SelectItem id="md">Medium</SelectItem>
  <SelectItem id="lg">Large</SelectItem>
</Select>`}</CodeBlock>
          <CodeBlock>{`// Disabled items
<Select label="Country" disabledKeys={['cu', 'kp']}>
  <SelectItem id="us">United States</SelectItem>
  <SelectItem id="ca">Canada</SelectItem>
  <SelectItem id="cu">Cuba</SelectItem>
  <SelectItem id="kp">North Korea</SelectItem>
</Select>`}</CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
