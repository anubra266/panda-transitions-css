export const installScript = `npm i -D panda-transitions-css
yarn add -D panda-transitions-css
pnpm i -D panda-transitions-css`

export const addToPreset = `import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Other config...
  presets: ['panda-transitions-css', '@pandacss/dev/presets'],
})
`

export const usageScript = `<div
  className={css({
    animationName: 'in:circle:hesitate',

    // Optional attributes
    animationRepeat: 'infinite', // can also be a number
    animationDuration: '1s',
    animationDelay: '1s',
  })}
>
  Element with Transition
</div>`
