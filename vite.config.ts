import path from 'node:path'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'

const srcDir = path.join(import.meta.dirname, 'src')

// TanStack Start's code-split virtual modules (e.g. `route.tsx?tsr-split=component`)
// bypass vite-tsconfig-paths, so path aliases aren't resolved inside them.
// This Rollup-level plugin resolves the project aliases using the file system
// directly, before Rollup's own resolution logic runs.
function tsAliasPlugin() {
  const aliases: [prefix: string, base: string][] = [
    ['#/', srcDir + '/'],
    ['@/', srcDir + '/'],
    ['@components/', srcDir + '/components/'],
  ]
  const exts = ['.tsx', '.ts', '.js', '/index.tsx', '/index.ts', '']

  return {
    name: 'ts-alias-resolve',
    enforce: 'pre' as const,
    resolveId(id: string) {
      for (const [prefix, base] of aliases) {
        if (id.startsWith(prefix)) {
          const rest = id.slice(prefix.length)
          for (const ext of exts) {
            const candidate = base + rest + ext
            if (fs.existsSync(candidate)) return candidate
          }
        }
      }
      return null
    },
  }
}

const config = defineConfig({
  plugins: [
    tsAliasPlugin(),
    vanillaExtractPlugin(),
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
})

export default config
