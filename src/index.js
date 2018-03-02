/**
 * @hyperapp/i18n plugin
 * @param {obj} locales {'en-US': {test:"Hello"}, 'zh-CN': {test: "你好"}}
 * @param {string} defaultLang default locale or the first in place
 * @returns {obj} {state, actions}
 */
export default (locales = {}, defaultLang = '') => {
  const langs = Object.keys(locales);
  const defaultLocale = ~langs.findIndex(lang => lang === defaultLang) ? defaultLang : langs[0];
  const state = {
    defaultLocale,
    locale: defaultLocale,
    messages: locales[defaultLocale]
  };
  const actions = {
    set: (locale) => {
      if (~langs.findIndex(lang => locale === lang)) {
        return {
          locale,
          defaultLocale,
          messages: locales[locale]
        };
      }
      return undefined;
    }
  };
  return {
    state,
    actions
  };
};
