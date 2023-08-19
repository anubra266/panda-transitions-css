import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: ['panda-transitions-css', '@shadow-panda/preset'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
})
