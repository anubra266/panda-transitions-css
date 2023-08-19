<div align="center">

  <h1>
    <br/>
    <span>
    <svg width="120" height="120">
  <g transform="translate(0 30)">
    <text x="25%" y="25%" font-size="2em">
      <animateTransform attributeName="transform" type="rotate" from="90 60 30" to="450 60 30" dur="3" repeatCount="indefinite" />
      🐼
    </text>
  </g>
</svg>
</span><br />
panda-transitions-css
<br />
    <br />

  </h1>
  <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/panda-transitions-css?style=for-the-badge">
       <img src="https://img.shields.io/npm/v/panda-transitions-css.svg?style=for-the-badge" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/panda-transitions-css?style=for-the-badge">
      <img src="https://img.shields.io/npm/dw/panda-transitions-css.svg?style=for-the-badge" alt="npm  downloads" />
    </a>
<a>
    <img alt="NPM" src="https://img.shields.io/npm/l/panda-transitions-css?style=for-the-badge">
</a>

<a><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/anubra266/panda-transitions-css?logo=github&style=for-the-badge">

</a>
    <br />
   Drop-in CSS transitions from transition.css for Panda CSS.
    
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i -D <a href="https://www.npmjs.com/package/panda-transitions-css">panda-transitions-css</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

## About

It's a preset for [Panda CSS](https://panda-css.com) that adds [Transition.css](https://transition.style) transitions to your project.

## Install

```bash
npm i -D panda-transitions-css
#or
yarn add -D panda-transitions-css
#or
pnpm i -D panda-transitions-css
```

## Usage

Add as first item of presets in your [Panda](https://panda-css.com) config.

```ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Other config...
  presets: ['panda-transitions-css', '@pandacss/dev/presets'],
})
```

You can now use it in your project.

```jsx
<div
  className={css({
    animationName: 'in:circle:hesitate',

    // Optional attributes
    animationRepeat: 'infinite', // can also be a number
    animationDuration: '1s',
    animationDelay: '1s',
  })}
>
  Element with Transition
</div>
```

You can play around with the animations in the [docs](https://anubra266.github.io/panda-transitions-css/)

## Sponsors ✨

Thanks goes to these wonderful people

<p align="center">
  <a href="https://patreon.com/anubra266?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">
    <img src='https://cdn.jsdelivr.net/gh/anubra266/static@main/sponsors.svg'/>
  </a>
</p>
