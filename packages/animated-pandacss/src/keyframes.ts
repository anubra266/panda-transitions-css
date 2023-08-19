import { defineKeyframes } from '@pandacss/dev'

const paths = {
  'circle-center-center-out': 'circle(0%)',
  'circle-center-center-in': 'circle(125%)',
  'circle-hesitate': 'circle(40%)',
  'circle-top-left-out': 'circle(0% at top left)',
  'circle-top-right-out': 'circle(0% at top right)',
  'circle-bottom-right-out': 'circle(0% at bottom right)',
  'circle-bottom-left-out': 'circle(0% at bottom left)',
  'circle-top-left-in': 'circle(150% at top left)',
  'circle-top-right-in': 'circle(150% at top right)',
  'circle-bottom-right-in': 'circle(150% at bottom right)',
  'circle-bottom-left-in': 'circle(150% at bottom left)',
  'wipe-in': 'inset(0 0 0 0)',
  'wipe-bottom': 'inset(100% 0 0 0)',
  'wipe-left': 'inset(0 100% 0 0)',
  'wipe-top': 'inset(0 0 100% 0)',
  'wipe-right': 'inset(0 0 0 100%)',
  'wipe-top-left-in': 'polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)',
  'wipe-top-right-in': 'polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)',
  'wipe-bottom-left-in': 'polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)',
  'wipe-bottom-right-in': 'polygon(-50% 0%, 200% 0, 0 200%, 0 -50%)',
  'wipe-top-left-out': 'polygon(0 0, 0 0, 0 0, 0 50%)',
  'wipe-top-right-out': 'polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%)',
  'wipe-bottom-left-out': 'polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)',
  'wipe-bottom-right-out': 'polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%)',
  'wipe-cinematic-out': 'inset(100% 0 100% 0)',
  'wipe-cinematic-mid': 'inset(10% 0 10% 0)',
  'square-hesitate': 'inset(33% 33% 33% 33%)',
  'square-out': 'inset(100% 100% 100% 100%)',
  'square-in': 'var(--wipe-in)',
  'square-top-left-out': 'inset(0 100% 100% 0)',
  'square-top-right-out': 'inset(0 0 100% 100%)',
  'square-bottom-left-out': 'inset(100% 100% 0 0)',
  'square-bottom-right-out': 'inset(100% 0 0 100%)',
  'diamond-center-in': 'polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)',
  'diamond-center-out': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
  'diamond-hesitate': 'polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%)',
  'opposing-corners-in': 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
  'opposing-corners-out': 'polygon(0 0, 50% 50%, 100% 100%, 50% 50%)',
}

export const keyframes = defineKeyframes({
  'wipe-out-top': {
    '0%': { clipPath: paths['wipe-in'] },
    to: { clipPath: paths['wipe-top'] },
  },

  'wipe-out-right': {
    '0%': { clipPath: paths['wipe-in'] },
    to: { clipPath: paths['wipe-right'] },
  },

  'wipe-out-bottom': {
    '0%': { clipPath: paths['wipe-in'] },
    to: {
      clipPath: paths['wipe-bottom'],
    },
  },

  'wipe-out-left': {
    '0%': { clipPath: paths['wipe-in'] },
    to: { clipPath: paths['wipe-left'] },
  },

  'wipe-in-top': {
    '0%': { clipPath: paths['wipe-top'] },
    to: { clipPath: paths['wipe-in'] },
  },

  'wipe-in-right': {
    '0%': { clipPath: paths['wipe-left'] },
    to: { clipPath: paths['wipe-in'] },
  },

  'wipe-in-bottom': {
    '0%': {
      clipPath: paths['wipe-bottom'],
    },
    to: { clipPath: paths['wipe-in'] },
  },

  'wipe-in-left': {
    '0%': {
      clipPath: paths['wipe-right'],
    },
    to: { clipPath: paths['wipe-in'] },
  },

  'wipe-in-top-right': {
    '0%': {
      clipPath: paths['wipe-bottom-left-out'],
    },
    to: {
      clipPath: paths['wipe-top-right-in'],
    },
  },

  'wipe-in-top-left': {
    '0%': {
      clipPath: paths['wipe-bottom-right-out'],
    },
    to: {
      clipPath: paths['wipe-top-left-in'],
    },
  },

  'wipe-in-bottom-right': {
    '0%': {
      clipPath: paths['wipe-top-left-out'],
    },
    to: {
      clipPath: paths['wipe-bottom-right-in'],
    },
  },

  'wipe-in-bottom-left': {
    '0%': {
      clipPath: paths['wipe-top-right-out'],
    },
    to: {
      clipPath: paths['wipe-bottom-left-in'],
    },
  },

  'wipe-out-top-right': {
    '0%': {
      clipPath: paths['wipe-bottom-left-in'],
    },
    to: {
      clipPath: paths['wipe-top-right-out'],
    },
  },

  'wipe-out-top-left': {
    '0%': {
      clipPath: paths['wipe-bottom-right-in'],
    },
    to: {
      clipPath: paths['wipe-top-left-out'],
    },
  },

  'wipe-out-bottom-right': {
    '0%': {
      clipPath: paths['wipe-top-left-in'],
    },
    to: {
      clipPath: paths['wipe-bottom-right-out'],
    },
  },

  'wipe-out-bottom-left': {
    '0%': {
      clipPath: paths['wipe-top-right-in'],
    },
    to: {
      clipPath: paths['wipe-bottom-left-out'],
    },
  },

  'wipe-cinematic-out': {
    '0%': { clipPath: paths['wipe-in'] },
    '30%,\n  70%': {
      clipPath: paths['wipe-cinematic-mid'],
    },
    to: {
      clipPath: paths['wipe-cinematic-out'],
    },
  },

  'wipe-cinematic-in': {
    '0%': {
      clipPath: paths['wipe-cinematic-out'],
    },
    '30%,\n  70%': {
      clipPath: paths['wipe-cinematic-mid'],
    },
    to: { clipPath: paths['wipe-in'] },
  },

  'circle-in-hesitate': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    '40%': {
      clipPath: paths['circle-hesitate'],
    },
    to: {
      clipPath: paths['circle-center-center-in'],
    },
  },

  'circle-out-hesitate': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    '40%': {
      clipPath: paths['circle-hesitate'],
    },
    to: {
      clipPath: paths['circle-center-center-out'],
    },
  },

  'circle-in-center': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    to: {
      clipPath: paths['circle-center-center-in'],
    },
  },

  'circle-out-center': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    to: {
      clipPath: paths['circle-center-center-out'],
    },
  },

  'circle-out-top-left': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    to: {
      clipPath: paths['circle-top-left-out'],
    },
  },

  'circle-out-top-right': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    to: {
      clipPath: paths['circle-top-right-out'],
    },
  },

  'circle-out-bottom-left': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    to: {
      clipPath: paths['circle-bottom-left-out'],
    },
  },

  'circle-out-bottom-right': {
    '0%': {
      clipPath: paths['circle-center-center-in'],
    },
    to: {
      clipPath: paths['circle-bottom-right-out'],
    },
  },

  'circle-in-top-left': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    to: {
      clipPath: paths['circle-top-left-in'],
    },
  },

  'circle-in-top-right': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    to: {
      clipPath: paths['circle-top-right-in'],
    },
  },

  'circle-in-bottom-left': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    to: {
      clipPath: paths['circle-bottom-left-in'],
    },
  },

  'circle-in-bottom-right': {
    '0%': {
      clipPath: paths['circle-center-center-out'],
    },
    to: {
      clipPath: paths['circle-bottom-right-in'],
    },
  },

  'square-in-hesitate': {
    '0%': {
      clipPath: paths['square-out'],
    },
    '40%': {
      clipPath: paths['square-hesitate'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'square-out-hesitate': {
    '0%': { clipPath: paths['square-in'] },
    '40%': {
      clipPath: paths['square-hesitate'],
    },
    to: { clipPath: paths['square-out'] },
  },

  'square-in-center': {
    '0%': {
      clipPath: paths['square-out'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'square-out-center': {
    '0%': { clipPath: paths['square-in'] },
    to: { clipPath: paths['square-out'] },
  },

  'square-out-top-left': {
    '0%': { clipPath: paths['square-in'] },
    to: {
      clipPath: paths['square-top-left-out'],
    },
  },

  'square-out-top-right': {
    '0%': { clipPath: paths['square-in'] },
    to: {
      clipPath: paths['square-top-right-out'],
    },
  },

  'square-out-bottom-left': {
    '0%': { clipPath: paths['square-in'] },
    to: {
      clipPath: paths['square-bottom-left-out'],
    },
  },

  'square-out-bottom-right': {
    '0%': { clipPath: paths['square-in'] },
    to: {
      clipPath: paths['square-bottom-right-out'],
    },
  },

  'square-in-top-left': {
    '0%': {
      clipPath: paths['square-bottom-right-out'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'square-in-top-right': {
    '0%': {
      clipPath: paths['square-bottom-left-out'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'square-in-bottom-left': {
    '0%': {
      clipPath: paths['square-top-right-out'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'square-in-bottom-right': {
    '0%': {
      clipPath: paths['square-top-left-out'],
    },
    to: { clipPath: paths['square-in'] },
  },

  'polygon-in-opposing-corners': {
    '0%': {
      clipPath: paths['opposing-corners-out'],
    },
    to: {
      clipPath: paths['opposing-corners-in'],
    },
  },

  'polygon-out-opposing-corners': {
    '0%': {
      clipPath: paths['opposing-corners-in'],
    },
    to: {
      clipPath: paths['opposing-corners-out'],
    },
  },

  'diamond-in-center': {
    '0%': {
      clipPath: paths['diamond-center-out'],
    },
    to: {
      clipPath: paths['diamond-center-in'],
    },
  },

  'diamond-out-center': {
    '0%': {
      clipPath: paths['diamond-center-in'],
    },
    to: {
      clipPath: paths['diamond-center-out'],
    },
  },

  'diamond-in-double-scale': {
    '0%': {
      clipPath: paths['diamond-center-out'],
    },
    '40%': {
      clipPath: paths['diamond-hesitate'],
    },
    to: {
      clipPath: paths['diamond-center-in'],
    },
  },

  'diamond-out-double-scale': {
    '0%': {
      clipPath: paths['diamond-center-in'],
    },
    '40%': {
      clipPath: paths['diamond-hesitate'],
    },
    to: {
      clipPath: paths['diamond-center-out'],
    },
  },
})
