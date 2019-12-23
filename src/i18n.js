import langs from './langs';

export default function i18n(word, lang) {
  return (langs[lang] || {})[word] || word;
};
