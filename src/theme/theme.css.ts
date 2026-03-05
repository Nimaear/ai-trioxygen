import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css'

/**
 * Design tokens for the Folksam-inspired color palette.
 *
 * Typography scale uses the golden ratio (φ ≈ 1.618):
 *   xs  = 1/φ² ≈ 0.618rem
 *   2xl = φ¹   = 1.618rem
 *   4xl = φ²   = 2.618rem
 *   5xl = φ³   = 4.236rem
 *
 * Line heights:
 *   relaxed = φ = 1.618 (body copy)
 *   tight   = 1.2 (large display headings)
 */
export const vars = createGlobalTheme(':root', {
  // ─── Colors (light mode defaults) ─────────────────────────────────────────
  color: {
    primary: {
      //      base: '#0075BC', // Folksam core blue
      base: '#074670', // Folksam core blue
      light: '#009CE0', // Brand cyan
      dark: '#074670', // Deep navy
      contrast: '#FFFFFF',
    },
    accent: {
      base: '#C3006F', // Folksam pink
      contrast: '#FFFFFF',
    },
    text: {
      default: '#22252B',
      muted: '#5D697E',
      inverted: '#FFFFFF',
      link: '#0075BC',
      linkHover: '#074670',
    },
    bg: {
      page: '#FFFFFF',
      subtle: '#F4F8FA',
      muted: '#E8F0F5',
    },
    border: {
      default: '#D1E2EC',
      subtle: '#E8F0F5',
      strong: '#A8C4D8',
    },
    surface: {
      default: '#FFFFFF',
      elevated: '#FFFFFF',
      overlay: '#F4F8FA',
    },
    status: {
      success: '#C9DC18',
      warning: '#E17919',
      error: '#D92D20',
      info: '#0075BC',
    },
  },

  // ─── Spacing (t-shirt scale, 4 px base grid) ─────────────────────────────
  space: {
    none: '0',
    xs: '0.25rem', //  4 px
    sm: '0.5rem', //  8 px
    md: '1rem', // 16 px
    lg: '1.5rem', // 24 px
    xl: '2rem', // 32 px
    '2xl': '3rem', // 48 px
    '3xl': '4rem', // 64 px
    '4xl': '6rem', // 96 px
    '5xl': '8rem', // 128 px
  },

  // ─── Font sizes (golden ratio scale, φ = 1.618) ───────────────────────────
  fontSize: {
    xs: '0.618rem', // ≈  10 px  (1/φ²)
    sm: '0.875rem', //   14 px
    base: '1rem', //   16 px
    lg: '1.125rem', //   18 px
    xl: '1.25rem', //   20 px
    '2xl': '1.618rem', // ≈  26 px  (φ¹)
    '3xl': '2rem', //   32 px
    '4xl': '2.618rem', // ≈  42 px  (φ²)
    '5xl': '4.236rem', // ≈  68 px  (φ³)
  },

  // ─── Line heights ─────────────────────────────────────────────────────────
  // relaxed = φ (golden ratio) — ideal for body copy
  lineHeight: {
    none: '1',
    tight: '1.2', // large display headings
    snug: '1.375', // mid-size headings
    normal: '1.5', // small headings / UI text
    relaxed: '1.618', // body copy  (= φ)
    loose: '2',
  },

  // ─── Typography ───────────────────────────────────────────────────────────
  fontFamily: {
    sans: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
    mono: '"Fira Code", "Cascadia Code", "JetBrains Mono", monospace',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
  },

  // ─── Border radius ────────────────────────────────────────────────────────
  borderRadius: {
    none: '0',
    sm: '0.25rem', //  4 px
    md: '0.5rem', //  8 px
    lg: '0.75rem', // 12 px
    xl: '1rem', // 16 px
    full: '9999px',
  },

  // ─── Heading scale (golden ratio) ─────────────────────────────────────────
  // Sizes: h1=φ², h2≈φ¹·³, h3=φ¹, h4=1.25rem, h5=1.125rem, h6=1rem
  // Line heights tighten as size grows (large text needs less leading)
  heading: {
    h1: { fontSize: '2.618rem', lineHeight: '1.2' }, // φ²
    h2: { fontSize: '2rem', lineHeight: '1.25' },
    h3: { fontSize: '1.618rem', lineHeight: '1.3' }, // φ¹
    h4: { fontSize: '1.25rem', lineHeight: '1.375' },
    h5: { fontSize: '1.125rem', lineHeight: '1.5' },
    h6: { fontSize: '1rem', lineHeight: '1.5' },
  },
})

// ─── Dark mode color overrides ──────────────────────────────────────────────
// The THEME_INIT_SCRIPT in __root.tsx adds class="dark" to <html>.
// Specificity of html.dark (0,1,1) beats :root (0,1,0) so overrides apply.
globalStyle('html.dark', {
  colorScheme: 'dark',
  vars: assignVars(vars.color, {
    primary: {
      base: '#009CE0',
      light: '#40B8E8',
      dark: '#0075BC',
      contrast: '#FFFFFF',
    },
    accent: {
      base: '#E5399E',
      contrast: '#FFFFFF',
    },
    text: {
      default: '#F0F6FA',
      muted: '#8FAFC7',
      inverted: '#22252B',
      link: '#40B8E8',
      linkHover: '#009CE0',
    },
    bg: {
      page: '#0D1520',
      subtle: '#131C2A',
      muted: '#1A2535',
    },
    border: {
      default: '#253447',
      subtle: '#1A2535',
      strong: '#354D66',
    },
    surface: {
      default: '#131C2A',
      elevated: '#1A2535',
      overlay: '#1F2E40',
    },
    status: {
      success: '#A8B814',
      warning: '#E17919',
      error: '#F04438',
      info: '#40B8E8',
    },
  }),
})

globalStyle(':root', {
  colorScheme: 'light',
})

// ─── Body defaults ────────────────────────────────────────────────────────
globalStyle('body', {
  fontFamily: vars.fontFamily.sans,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed, // φ
  color: vars.color.text.default,
  backgroundColor: vars.color.bg.page,
})

// ─── Heading defaults (golden ratio type scale) ────────────────────────────
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.default,
  letterSpacing: vars.letterSpacing.tight,
})

globalStyle('h1', {
  fontSize: vars.heading.h1.fontSize, // 2.618rem (φ²)
  lineHeight: vars.heading.h1.lineHeight, // 1.2
})

globalStyle('h2', {
  fontSize: vars.heading.h2.fontSize, // 2rem
  lineHeight: vars.heading.h2.lineHeight, // 1.25
})

globalStyle('h3', {
  fontSize: vars.heading.h3.fontSize, // 1.618rem (φ¹)
  lineHeight: vars.heading.h3.lineHeight, // 1.3
})

globalStyle('h4', {
  fontSize: vars.heading.h4.fontSize, // 1.25rem
  lineHeight: vars.heading.h4.lineHeight, // 1.375
  letterSpacing: vars.letterSpacing.normal,
})

globalStyle('h5', {
  fontSize: vars.heading.h5.fontSize, // 1.125rem
  lineHeight: vars.heading.h5.lineHeight, // 1.5
  letterSpacing: vars.letterSpacing.normal,
})

globalStyle('h6', {
  fontSize: vars.heading.h6.fontSize, // 1rem
  lineHeight: vars.heading.h6.lineHeight, // 1.5
  letterSpacing: vars.letterSpacing.normal,
})
