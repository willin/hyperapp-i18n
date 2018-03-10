import i18n from '../dist/i18n';
import zhCN from './zh-CN';
import enUS from './en-US';

/**
 * Deep Merge with default locale messages
 * @param {obj} messages Messages for specific locale
 * @param {obj} defaultMessages Messages for default locale
 */
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

export const { state, actions } = i18n({
  'zh-CN': zhCN,
  'en-US': mergeMessages(enUS, zhCN)
}, 'zh-CN');

