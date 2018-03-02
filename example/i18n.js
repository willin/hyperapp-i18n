import i18n from '../src';
import zhCN from './zh-CN';
import enUS from './en-US';

export const { state, actions } = i18n({
  'zh-CN': zhCN,
  'en-US': enUS
}, 'zh-CN');

