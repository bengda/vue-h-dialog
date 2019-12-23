export const dictionary = {
  'zh-cn': {},
  'en-us': {
    '未命名标题': 'Untitled',
    '取消': 'Cancel',
    '确定': 'Confirm',
    '还原': 'Restore',
    '最大化': 'Maximize',
    '关闭': 'Close',
    '加载中': 'Loading',
  },
};

export default function i18n (word, lang = 'zh-cn', dic = {}) {
  return dic[word] || (dictionary[lang] || {})[word] || word;
}
