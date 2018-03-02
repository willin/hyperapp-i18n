import { app, h } from 'hyperapp';
import * as i18n from './i18n';

const state = {
  i18n: i18n.state
};
const actions = {
  i18n: i18n.actions
};

const view = ({ i18n: { messages, lang } }) => (
  <div>
    <h2>Current Lang: {lang}</h2>
    <p>Test1: {messages.test1}</p>
    <p>Test21: {messages.test2.test21}</p>
    <p>Test22: {messages.test2.test22}</p>
  </div>
);

app(state, actions, view, document.body);

