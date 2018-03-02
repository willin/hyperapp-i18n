import test from 'ava';
import i18n from '../src';

const JSONCompare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
const testData = {
  'zh-CN': {
    test: '你好'
  },
  'en-US': {
    test: 'Hello'
  }
};

test('with default lang', (t) => {
  const { state } = i18n(testData, 'zh-CN');
  t.truthy(JSONCompare(state, {
    defaultLocale: 'zh-CN',
    locale: 'zh-CN',
    messages: {
      test: '你好'
    }
  }));
});

test('without default lang', (t) => {
  const { state } = i18n(testData);
  t.truthy(JSONCompare(state, {
    defaultLocale: 'zh-CN',
    locale: 'zh-CN',
    messages: {
      test: '你好'
    }
  }));
});

test('actions', (t) => {
  const { actions } = i18n(testData);
  t.is(actions.set('test'), undefined);
  t.truthy(JSONCompare(actions.set('zh-CN'), {
    locale: 'zh-CN',
    defaultLocale: 'zh-CN',
    messages: {
      test: '你好'
    }
  }));
});
