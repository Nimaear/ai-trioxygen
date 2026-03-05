import { globalStyle } from '@vanilla-extract/css'

// ─── Box sizing ────────────────────────────────────────────────────────────

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

// ─── Document & body ───────────────────────────────────────────────────────

globalStyle('html', {
  lineHeight: '1.15',
  textSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
})

// ─── Typography ────────────────────────────────────────────────────────────

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('p', {
  margin: 0,
})

globalStyle('b, strong', {
  fontWeight: 'bolder',
})

globalStyle('small', {
  fontSize: '80%',
})

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
})

globalStyle('sub', {
  bottom: '-0.25em',
})

globalStyle('sup', {
  top: '-0.5em',
})

// ─── Lists ─────────────────────────────────────────────────────────────────

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

// ─── Links ─────────────────────────────────────────────────────────────────

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

// ─── Media ─────────────────────────────────────────────────────────────────

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

// ─── Forms ─────────────────────────────────────────────────────────────────

globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
})

globalStyle('button, select', {
  textTransform: 'none',
})

globalStyle('button', {
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
})

globalStyle('fieldset', {
  margin: 0,
  padding: 0,
  border: 'none',
})

globalStyle('legend', {
  padding: 0,
})

globalStyle('textarea', {
  resize: 'vertical',
})

// ─── Tables ────────────────────────────────────────────────────────────────

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

globalStyle('th, td', {
  padding: 0,
  textAlign: 'left',
})

// ─── Misc ──────────────────────────────────────────────────────────────────

globalStyle('hr', {
  height: 0,
  margin: 0,
  border: 'none',
  borderTop: '1px solid',
  color: 'inherit',
})

globalStyle('abbr[title]', {
  textDecoration: 'underline dotted',
})

globalStyle('pre, code, kbd, samp', {
  fontFamily: 'monospace',
  fontSize: '1em',
})

globalStyle('pre', {
  margin: 0,
  overflow: 'auto',
})

globalStyle('[hidden]', {
  display: 'none',
})
