import 'highlight.js/styles/atom-one-dark.css';
import Vue from 'vue';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import marked from 'marked/lib/marked';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

export function transpileMustache(code) {
  return code.replace(/\{\{\s*.+?\s*\}\}/g, (matched) => {
    return Function('i18n', `return ${matched.replace(/^\{\{|\}\}$/g, '')}`)(Vue.prototype.$i18n)
  });
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight(code, lang, a) {
    const codeStr = transpileMustache(code);
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, codeStr, true).value;
    }
    return hljs.highlightAuto(codeStr).value;
  },
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export function transpileMarkdown(preCode) {
  return marked(transpileMustache(preCode)).replace(/<pre>/g, '<pre class="hljs">');
}

export default marked;
