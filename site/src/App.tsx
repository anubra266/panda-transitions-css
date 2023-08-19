import { keyframes } from 'panda-transitions-css'
import { useEffect, useState } from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { css, cx } from '../styled-system/css'
import { flex, grid, stack } from '../styled-system/patterns'
import { badge, button, link } from '../styled-system/recipes'
import { Code } from './code'
import { addToPreset, installScript, usageScript } from './codeblocks'
import { ColorModeButton } from './color-mode-button'

const listButton = cx('dark', button({ variant: 'ghost', size: 'sm' }), css({ w: 'fit-content' }))

function App() {
  const [transitionName, setTransitionName] = useState<string | undefined>('circle-in-hesitate')
  const [_transitionName, _setTransitionName] = useState(transitionName!)

  useEffect(() => {
    if (transitionName) _setTransitionName(transitionName)
  }, [transitionName])
  const [listIsOpen, setListIsOpen] = useState(false)

  const toggleTransition = () => {
    setTransitionName(
      _transitionName.includes('out')
        ? _transitionName.replace('out', 'in')
        : _transitionName.replace('in', 'out'),
    )
  }
  return (
    <>
      <article
        className={grid({
          h: 'calc(100vh - token(spacing.16))',
          overflow: 'hidden',
          maxW: 'full',
          position: 'relative',
          gridTemplateColumns: { base: '[callout] 1fr', md: '[callout] 1fr [sidebar]' },
          gridTemplateRows: '1fr auto',
          gridColumnGap: '0',
          columnGap: '0',
          gridRowGap: '0',
          rowGap: '0',
          gridTemplateAreas: "'callout animation-list' 'footer animation-list'",
          bg: 'hsl(208 50% 10%)',
        })}
      >
        {/* //* Callout 1 ----------------------------------------------------------------- */}
        <section
          className={flex({
            gridArea: 'callout',
            direction: 'column',
            align: 'center',
            justify: 'center',
            textAlign: 'center',
            flex: '1',

            bg: 'unset',
          })}
          onClick={toggleTransition}
        >
          <div className={flex({ gap: '3', w: 'full', align: 'center', justify: 'center' })}>
            <h1
              className={css({
                mb: '0',
                fontSize: '9xl',
                color: 'hsl(328 60% 58%)',
                fontWeight: '100',
              })}
            >
              🐼 transition{' '}
              <span
                className={css({
                  color: 'white',
                  fontWeight: '700',
                })}
              >
                css
              </span>
            </h1>
            <span
              className={css({
                color: 'hsl(328 60% 58%)',
                fontSize: 'min(13vmin, 7rem)',
              })}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={css({
                  w: '1em',
                })}
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <h2
            className={css({
              mt: '0',
              animationDelay: '0.3s',
              color: 'white',
              fontSize: 'min(10vw, 1.3333rem)',
            })}
          >
            Drop-in CSS transitions from transition.css for Panda CSS.
          </h2>
          <p
            className={css({
              mt: '2rem',
              display: { md: 'none' },
            })}
          >
            <button
              className={cx('dark', button({ variant: 'secondary' }))}
              onClick={() => setListIsOpen(true)}
            >
              See animations
            </button>
          </p>
        </section>
        {/* //* Callout 2 ----------------------------------------------------------------- */}
        <section
          className={flex({
            gridArea: 'callout',
            direction: 'column',
            align: 'center',
            justify: 'center',
            textAlign: 'center',
            flex: '1',

            bg: 'hsl(208 46% 52%)',

            animationDelay: '0',
            animationDuration: '2.5s',
            animationFillMode: 'both',
            willChange: 'clip-path',
          })}
          style={{ animationName: transitionName }}
          onClick={toggleTransition}
        >
          <div className={flex({ gap: '3', w: 'full', align: 'center', justify: 'center' })}>
            <h1
              className={css({
                mb: '0',
                fontSize: '9xl',
                color: 'white',
                fontWeight: '100',
              })}
            >
              🐼 transition{' '}
              <span
                className={css({
                  color: 'hsl(205 100% 20%)',
                  fontWeight: '700',
                })}
              >
                css
              </span>
            </h1>
            <span
              className={css({
                color: 'white',
                fontSize: 'min(13vmin, 7rem)',
              })}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={css({
                  w: '1em',
                })}
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <h2
            className={css({
              mt: '0',
              animationDelay: '0.3s',
              color: 'hsl(205 100% 20%)',
              fontSize: 'min(10vw, 1.3333rem)',
            })}
          >
            Drop-in CSS transitions from transition.css for Panda CSS.
          </h2>
          <p
            className={css({
              mt: '2rem',
              display: { md: 'none' },
            })}
          >
            <button
              className={cx('dark', button({ variant: 'secondary' }))}
              onClick={() => setListIsOpen(true)}
            >
              See animations
            </button>
          </p>
        </section>
        {/* //* Callout ----------------------------------------------------------------- */}

        <section
          data-state={listIsOpen ? 'open' : 'closed'}
          className={stack({
            position: { base: 'absolute', md: 'relative' },
            top: '0',
            left: { base: '100%', md: 'auto' },
            height: 'full',
            zIndex: '90',
            gridArea: 'animation-list',
            gridRow: '1 / 3',
            overflowY: 'auto',
            padding: '8',
            animationDelay: '0.7s',
            animationFillMode: 'backwards',
            transition: 'transform 0.2s ease-out',
            bg: 'hsl(208 50% 10%)',
            color: 'hsl(0 0% 98%)',

            textAlign: 'left',
            transform: { md: 'none !important' },
            _open: {
              transform: 'translateX(-100%)',
            },
            gap: '3',
          })}
        >
          <section
            className={flex({ gap: '1', position: 'sticky', top: '0', bg: 'hsl(208 50% 10%)' })}
          >
            <a
              href="https://github.com/anubra266"
              target="_blank"
              rel="noreferrer"
              className={listButton}
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/anubra266"
              target="_blank"
              rel="noreferrer"
              className={listButton}
            >
              <BsTwitter />
            </a>
            <ColorModeButton className={listButton} />
            <button
              className={cx(
                'dark',
                button({ variant: 'default', size: 'sm' }),
                css({ display: { md: 'none' }, w: 'fit-content', ml: 'auto' }),
              )}
              onClick={() => setListIsOpen(false)}
            >
              <IoClose />
            </button>
          </section>
          <section className={stack({ gap: '1' })}>
            {Object.keys(keyframes).map((animation) => (
              <button
                key={animation}
                className={cx(
                  'dark',
                  button({ variant: 'ghost' }),
                  css({ justifyContent: 'start' }),
                )}
                onClick={() => {
                  setTransitionName(undefined)
                  setTimeout(() => {
                    setTransitionName(animation)
                  }, 100)
                }}
              >
                {animation}
              </button>
            ))}
          </section>
        </section>
      </article>
      <div
        className={flex({
          align: 'center',
          pl: '4',
          h: '16',
          bg: 'hsl(208 50% 10%)',
          color: 'hsl(0 0% 98%)',
          pr: '20',
        })}
      >
        <h1 className={css({ textStyle: 'xl', fontWeight: 'bold' })}>Documentation</h1>
        <p
          className={css({
            ml: 'auto',
            fontSize: 'xs',
            mr: '4',
          })}
        >
          Created with ❤️ by{' '}
          <a
            href="https://twitter.com/anubra266"
            target="_blank"
            rel="noreferrer"
            className={link()}
          >
            anubra266
          </a>
        </p>
      </div>
      <div className={stack({ gap: '8', p: '12' })}>
        <div>
          <b>Panda Transition CSS</b> is a preset for{' '}
          <a href="https://panda-css.com" target="_blank" rel="noreferrer" className={link()}>
            PandaCSS
          </a>{' '}
          that lets you use{' '}
          <a href="https://transition.style/" target="_blank" rel="noreferrer" className={link()}>
            Transition.css
          </a>{' '}
          <span className={badge()}>transitions</span> in the library.
        </div>

        <div className={stack({ gap: '2' })}>
          <h2 className={css({ textStyle: 'h2', fontWeight: 'semibold' })}>Installation</h2>
          <Code lang="bash" code={installScript} />
        </div>

        <div className={stack({ gap: '4' })}>
          <h2 className={css({ textStyle: 'h2', fontWeight: 'semibold' })}>Usage</h2>

          <div className={stack({ gap: '2' })}>
            Add as first item of presets in your panda config
            <Code code={addToPreset} />
          </div>
          <div className={stack({ gap: '2' })}>
            You can now use it in your project.
            <Code code={usageScript} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
