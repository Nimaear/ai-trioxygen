# Component authoring guidelines

## No external margin

Components must not set margin on their outermost element. This keeps components self-contained and reusable — a component has no knowledge of where it will be placed, so it should not claim space outside its own boundary.

**Wrong**

```tsx
// Card applies its own top margin, which breaks in any other context
export const card = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
})
```

**Correct**

```tsx
// Card owns only its internal layout
export const card = style({
  padding: vars.space.lg,
})
```

## Spacing is the layout's responsibility

All spacing *between* components — vertical rhythm, horizontal gaps, section padding — is controlled exclusively by layout primitives (`Stack`, `Inline`, `Container`). The parent decides how children are arranged; children never arrange themselves.

```tsx
// The layout controls spacing, not the components inside it
<Stack gap="xl">
  <Card />
  <Card />
</Stack>

<Inline gap="md" justify="between">
  <Button>Cancel</Button>
  <Button>Save</Button>
</Inline>

<Container size="lg" paddingX="md" paddingY="3xl">
  <HeroSection />
</Container>
```

## Internal spacing is fine

Components may freely use padding, gap, and other spacing properties *inside* their own boundary to control their internal layout.

```tsx
export const card = style({
  padding: vars.space.lg,        // ✓ internal padding
  gap: vars.space.md,            // ✓ gap between internal children
  borderRadius: vars.borderRadius.lg,
})
```

## Summary

| Property | Inside component | Outside component |
|---|---|---|
| `padding` | ✓ | — |
| `gap` | ✓ | — |
| `margin` | Avoid | Never |
| Spacing between siblings | — | Use `Stack` / `Inline` |
| Section padding | — | Use `Container` |
