const mergeMessages = (messages = {}, defaultMessages = {}) => {
  const keys = Object.keys(defaultMessages);
  return keys.reduce((r, key) => {
    if (typeof messages[key] === 'object') {
      Object.assign(r, {
        [key]: mergeMessages(messages[key], defaultMessages[key])
      });
    } else {
      Object.assign(r, {
        [key]: messages[key] || defaultMessages[key]
      });
    }
    return r;
  }, {});
};

export default (locales = {}, defaultLocale = '') => {
  console.log(locales);
  const langs = Object.keys(locales);
  console.log(langs);
  const defaultLang = ~langs.findIndex(lang => lang === defaultLocale) ? langs[0] : defaultLocale;
  const state = {
    lang: defaultLang,
    messages: locales[defaultLang]
  };
  const assignMessages = lang => mergeMessages(locales[lang], locales[defaultLang]);
  const actions = {
    setLocale: (lang) => {
      if (~langs.findIndex(locale => locale === lang)) {
        return {
          lang,
          messages: assignMessages(lang)
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
