import { createFileRoute } from '@tanstack/react-router'
import { Combobox, ComboboxItem } from '@components/Combobox/Combobox'
import {
  CodeBlock,
  ShowcaseGrid,
  ShowcaseHero,
  ShowcasePage,
  ShowcaseSection,
  ShowcaseStack,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/combobox')({ component: ComboboxPage })

const COUNTRIES = [
  { id: 'au', name: 'Australia' },
  { id: 'br', name: 'Brazil' },
  { id: 'ca', name: 'Canada' },
  { id: 'cn', name: 'China' },
  { id: 'fr', name: 'France' },
  { id: 'de', name: 'Germany' },
  { id: 'in', name: 'India' },
  { id: 'jp', name: 'Japan' },
  { id: 'mx', name: 'Mexico' },
  { id: 'nl', name: 'Netherlands' },
  { id: 'nz', name: 'New Zealand' },
  { id: 'no', name: 'Norway' },
  { id: 'se', name: 'Sweden' },
  { id: 'ch', name: 'Switzerland' },
  { id: 'gb', name: 'United Kingdom' },
  { id: 'us', name: 'United States' },
]

function ComboboxPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Combobox">
        Searchable select built on React Aria's ComboBox primitive. Filters items
        as you type, supports keyboard navigation, and falls back gracefully to a
        "no results" state. Three sizes aligned to the Input and Select scale.
      </ShowcaseHero>

      <ShowcaseSection label="Size scale">
        <ShowcaseStack maxWidth="28rem">
          <Combobox size="sm" label="Small">
            <ComboboxItem id="a">Option A</ComboboxItem>
            <ComboboxItem id="b">Option B</ComboboxItem>
            <ComboboxItem id="c">Option C</ComboboxItem>
          </Combobox>
          <Combobox size="md" label="Medium">
            <ComboboxItem id="a">Option A</ComboboxItem>
            <ComboboxItem id="b">Option B</ComboboxItem>
            <ComboboxItem id="c">Option C</ComboboxItem>
          </Combobox>
          <Combobox size="lg" label="Large">
            <ComboboxItem id="a">Option A</ComboboxItem>
            <ComboboxItem id="b">Option B</ComboboxItem>
            <ComboboxItem id="c">Option C</ComboboxItem>
          </Combobox>
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="Filtering">
        <ShowcaseStack maxWidth="28rem">
          <Combobox label="Country" placeholder="Search countries…">
            {COUNTRIES.map((c) => (
              <ComboboxItem key={c.id} id={c.id}>
                {c.name}
              </ComboboxItem>
            ))}
          </Combobox>
        </ShowcaseStack>
      </ShowcaseSection>

      <ShowcaseSection label="States">
        <ShowcaseGrid>
          <Combobox label="Default">
            <ComboboxItem id="cat">Cat</ComboboxItem>
            <ComboboxItem id="dog">Dog</ComboboxItem>
            <ComboboxItem id="bird">Bird</ComboboxItem>
          </Combobox>
          <Combobox
            label="With description"
            description="Start typing to filter options."
          >
            <ComboboxItem id="email">Email</ComboboxItem>
            <ComboboxItem id="sms">SMS</ComboboxItem>
            <ComboboxItem id="push">Push</ComboboxItem>
          </Combobox>
          <Combobox label="Pre-selected" defaultSelectedKey="dog">
            <ComboboxItem id="cat">Cat</ComboboxItem>
            <ComboboxItem id="dog">Dog</ComboboxItem>
            <ComboboxItem id="bird">Bird</ComboboxItem>
          </Combobox>
          <Combobox label="Disabled" isDisabled>
            <ComboboxItem id="a">Option A</ComboboxItem>
            <ComboboxItem id="b">Option B</ComboboxItem>
          </Combobox>
          <Combobox
            label="With disabled item"
            disabledKeys={['platypus']}
          >
            <ComboboxItem id="koala">Koala</ComboboxItem>
            <ComboboxItem id="kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem id="platypus">Platypus (unavailable)</ComboboxItem>
            <ComboboxItem id="wombat">Wombat</ComboboxItem>
          </Combobox>
          <Combobox
            label="Invalid"
            isInvalid
            errorMessage="A selection is required."
          >
            <ComboboxItem id="a">Option A</ComboboxItem>
            <ComboboxItem id="b">Option B</ComboboxItem>
          </Combobox>
        </ShowcaseGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>{`import { Combobox, ComboboxItem } from '@components/Combobox'`}</CodeBlock>
          <CodeBlock>{`// Basic
<Combobox label="Animal" placeholder="Search…">
  <ComboboxItem id="cat">Cat</ComboboxItem>
  <ComboboxItem id="dog">Dog</ComboboxItem>
  <ComboboxItem id="bird">Bird</ComboboxItem>
</Combobox>`}</CodeBlock>
          <CodeBlock>{`// Dynamic list
<Combobox label="Country" placeholder="Search countries…">
  {countries.map((c) => (
    <ComboboxItem key={c.id} id={c.id}>
      {c.name}
    </ComboboxItem>
  ))}
</Combobox>`}</CodeBlock>
          <CodeBlock>{`// Controlled
const [value, setValue] = useState<Key | null>(null)

<Combobox
  label="Size"
  selectedKey={value}
  onSelectionChange={setValue}
>
  <ComboboxItem id="sm">Small</ComboboxItem>
  <ComboboxItem id="md">Medium</ComboboxItem>
  <ComboboxItem id="lg">Large</ComboboxItem>
</Combobox>`}</CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
