import { app, h } from 'hyperapp';
import * as i18n from './i18n';

const state = {
  i18n: i18n.state
};
const actions = {
  i18n: i18n.actions
};

const view = ({ i18n: { messages, locale, defaultLocale } }) => (
  <div>
    <h2>Current Lang: {locale}</h2>
    <h3>Message In Current Language</h3>
    <p>Test1: {messages.test1}</p>
    <h3>Message In Default Language ({defaultLocale})</h3>
    <p>Test21: {messages.test2.test21}</p>
    <p>Test22: {messages.test2.test22}</p>
  </div>
);

const main = app(state, actions, view, document.body);
main.i18n.set('en-US');
