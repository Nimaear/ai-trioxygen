# Key dependencies

## react-aria-components

Interactive components (buttons, dialogs, menus, selects, date pickers, etc.) are built on top of [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) from Adobe.

React Aria Components provides fully accessible, unstyled primitives that handle keyboard navigation, focus management, screen reader announcements, and ARIA attribute wiring. We style them with vanilla-extract; we do not reimplement their behaviour.

### Usage

Import directly from `react-aria-components` and apply vanilla-extract class names via the `className` prop.

```tsx
import { Button } from 'react-aria-components'
import { button } from './button.css'

export function PrimaryButton({ children, ...props }) {
  return (
    <Button className={button} {...props}>
      {children}
    </Button>
  )
}
```

### Data attributes for styling states

React Aria Components exposes interaction state as `data-*` attributes on the host element. Use these in vanilla-extract styles instead of managing state in JS.

```ts
// button.css.ts
import { style } from '@vanilla-extract/css'
import { vars } from '#/theme'

export const button = style({
  backgroundColor: vars.color.primary.base,
  color: vars.color.primary.contrast,

  selectors: {
    '&[data-hovered]': {
      backgroundColor: vars.color.primary.dark,
    },
    '&[data-pressed]': {
      opacity: 0.9,
    },
    '&[data-focused]': {
      outlineOffset: '2px',
      outline: `2px solid ${vars.color.primary.base}`,
    },
    '&[data-disabled]': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
})
```

Common data attributes: `data-hovered`, `data-pressed`, `data-focused`, `data-focus-visible`, `data-disabled`, `data-selected`, `data-indeterminate`, `data-open`, `data-placeholder`.

### Do not wrap with custom state logic

React Aria already handles pointer, keyboard, and touch events correctly across browsers and platforms. Do not add `onMouseEnter`/`onMouseLeave` hover state, manual `focus` tracking, or custom keyboard handlers to components that use React Aria primitives.
