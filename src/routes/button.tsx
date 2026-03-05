import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Check, Download, Plus, Save, Trash2 } from 'lucide-react'
import { Button } from '@components/Button/Button'
import {
  CodeBlock,
  ShowcaseHero,
  ShowcaseMatrix,
  ShowcasePage,
  ShowcasePanel,
  ShowcaseRow,
  ShowcaseSection,
} from '@/styles/Showcase'
import { Stack } from '@/components/layout/Stack'

export const Route = createFileRoute('/button')({ component: ButtonPage })

const VARIANTS = ['primary', 'secondary', 'ghost'] as const
const SIZES = ['sm', 'md', 'lg'] as const

// Icon sizes matched to button size variants
const ICON_SIZE = { sm: 14, md: 16, lg: 18 } as const

function PendingDemo() {
  const [pending, setPending] = useState(false)
  return (
    <Button
      variant="primary"
      isPending={pending}
      onPress={() => {
        setPending(true)
        setTimeout(() => setPending(false), 2500)
      }}
    >
      <Button.Icon>
        <Save size={16} />
      </Button.Icon>
      <Button.Label>{pending ? 'Saving…' : 'Save changes'}</Button.Label>
    </Button>
  )
}

function ButtonPage() {
  return (
    <ShowcasePage>
      <ShowcaseHero name="Button">
        Headless compound component — compose icons, labels, and other elements
        freely. Three variants, three sizes, full keyboard and screen-reader
        support via React Aria.
      </ShowcaseHero>

      <ShowcaseSection label="Variants & sizes">
        <ShowcaseMatrix rows={VARIANTS} cols={SIZES}>
          {(variant, size) => (
            <Button variant={variant} size={size}>
              <Button.Icon>
                <Save size={ICON_SIZE[size]} />
              </Button.Icon>
              <Button.Label>Button</Button.Label>
            </Button>
          )}
        </ShowcaseMatrix>
      </ShowcaseSection>

      <ShowcaseSection label="Composition">
        <ShowcaseRow>
          <Button variant="primary">
            <Button.Icon>
              <Save size={16} />
            </Button.Icon>
            <Button.Label>Save</Button.Label>
          </Button>
          <Button variant="secondary">
            <Button.Icon>
              <Download size={16} />
            </Button.Icon>
            <Button.Label>Export</Button.Label>
          </Button>
          <Button variant="secondary">
            <Button.Label>Next</Button.Label>
            <Button.Icon>
              <ArrowRight size={16} />
            </Button.Icon>
          </Button>
          <Button variant="ghost">
            <Button.Icon>
              <Plus size={16} />
            </Button.Icon>
            <Button.Label>Add item</Button.Label>
          </Button>
          <Button variant="ghost" aria-label="Delete">
            <Button.Icon>
              <Trash2 size={16} />
            </Button.Icon>
          </Button>
        </ShowcaseRow>
      </ShowcaseSection>

      <ShowcaseSection label="States">
        <ShowcasePanel>
          <Button variant="primary">
            <Button.Icon>
              <Check size={16} />
            </Button.Icon>
            <Button.Label>Default</Button.Label>
          </Button>
          <Button variant="primary" isDisabled>
            <Button.Label>Disabled</Button.Label>
          </Button>
          <PendingDemo />
          <Button variant="secondary">
            <Button.Label>Secondary</Button.Label>
          </Button>
          <Button variant="secondary" isDisabled>
            <Button.Label>Disabled</Button.Label>
          </Button>
          <Button variant="ghost">
            <Button.Label>Ghost</Button.Label>
          </Button>
          <Button variant="ghost" isDisabled>
            <Button.Label>Disabled</Button.Label>
          </Button>
        </ShowcasePanel>
      </ShowcaseSection>

      <ShowcaseSection label="Size scale">
        <ShowcaseRow>
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              <Button.Icon>
                <Save size={ICON_SIZE[size]} />
              </Button.Icon>
              <Button.Label>{size}</Button.Label>
            </Button>
          ))}
        </ShowcaseRow>
      </ShowcaseSection>

      <ShowcaseSection label="Usage">
        <Stack>
          <CodeBlock>
            {`import { Save, ArrowRight, Trash2 } from 'lucide-react'
import { Button } from '@components/Button/Button'`}
          </CodeBlock>
          <CodeBlock>
            {`// Label only
<Button onPress={handleSave}>
  <Button.Label>Save changes</Button.Label>
</Button>
`}
          </CodeBlock>
          <CodeBlock>
            {`// Icon + label
<Button variant="primary">
  <Button.Icon><Save size={16} /></Button.Icon>
  <Button.Label>Save</Button.Label>
</Button>
`}
          </CodeBlock>
          <CodeBlock>
            {`// Label + trailing icon
<Button variant="secondary" size="sm">
  <Button.Label>Next</Button.Label>
  <Button.Icon><ArrowRight size={14} /></Button.Icon>
</Button>
`}
          </CodeBlock>
          <CodeBlock>
            {`// Icon only — add aria-label for accessibility
<Button variant="ghost" aria-label="Delete item">
  <Button.Icon><Trash2 size={16} /></Button.Icon>
</Button>`}
          </CodeBlock>
        </Stack>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
