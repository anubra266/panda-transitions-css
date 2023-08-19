import { definePreset } from '@pandacss/dev'
import { type Preset } from '@pandacss/types'

import { keyframes } from './keyframes'

const preset: Preset = definePreset({
  theme: {
    keyframes,
  },
  utilities: {
    extend: {
      animationName: {
        className: 'animation-name',
        values: 'animationName',
        transform(value: string) {
          return {
            animationName: value,
            animationDelay: '0s',
            animationDuration: '2.5s',
            animationTimingFunction: 'cubic-bezier(0.25, 1, 0.3, 1)',
            animationFillMode: 'both',
            willChange: 'clip-path',

            '@media (prefers-reduced-motion: reduce), print': Object.assign(
              {},
              {
                animationDuration: '1ms !important',
                transitionDuration: '1ms !important',
                animationIterationCount: '1 !important',
              },
              value.includes('Out') && { opacity: 0 },
            ),
          }
        },
      },
      animationRepeat: {
        className: 'animation-name',
        property: 'animationIterationCount',
        transform(value: string) {
          return {
            animationIterationCount: value,
          }
        },
      },
    },
  },
})

export default preset

export { keyframes }
