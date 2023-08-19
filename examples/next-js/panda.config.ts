import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', 'panda-transitions-css'],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
})
