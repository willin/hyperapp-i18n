# <img height=24 src=https://cdn.rawgit.com/jorgebucaran/f53d2c00bafcf36e84ffd862f0dc2950/raw/882f20c970ff7d61aa04d44b92fc3530fa758bc0/Hyperapp.svg> @hyperapp/i18n

[![Travis CI](https://img.shields.io/travis/hyperapp/i18n/master.svg)](https://travis-ci.org/hyperapp/i18n) [![Codecov](https://img.shields.io/codecov/c/github/hyperapp/i18n/master.svg)] [![npm](https://img.shields.io/npm/v/@hyperapp/i18n.svg)](https://www.npmjs.org/package/@hyperapp/i18n) [![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

I18n Plugin for [Hyperapp](https://github.com/hyperapp/hyperapp).

## Installation

Install with npm or Yarn.

```
npm i @hyperapp/i18n
```

If you don't want to set up a build environment, you can download Hyperapp Gizmo from a CDN like [unpkg.com](https://unpkg.com/@hyperapp/i18n) and it will be globally available through the window.gizmo object. If your library is a high-order-app, export it as window.i18n.

```html
<script src="https://unpkg.com/@hyperapp/i18n"></script>
```

## Usage

```js
// i18n.js
import i18n from '@hyperapp/i18n';

export const { state, actions } = i18n({
  'zh-CN': {
    hello: '你好'
  },
  'en-US': {
    hello: 'Hello'
  }
}, 'zh-CN');

// app.js
import { app, h } from 'hyperapp';
import * as i18n from './i18n';

const state = {
  i18n: i18n.state
};
const actions = {
  i18n: i18n.actions
};

const view = ({ i18n: { messages, locale } }) => (
  <div>
    <h2>Current Lang: {locale}</h2>
    <p>Test1: {messages.hello}</p>
  </div>
);

const main = app(state, actions, view, document.body);
main.i18n.set('en-US');
```

See the Example folder for more detailed useage info.

## LICENSE

MIT
