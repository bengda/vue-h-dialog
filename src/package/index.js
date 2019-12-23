/**
 * @author huyk<bengda@outlook.com>
 * NOTE 使用cache特性时需要传入context上下文对象
 * 为什么需要context，这是因为在单页面路由情况下，路由切换后再回到先前的路由，宿主上下文环境已经发生了变化
 * @example
 * dialog({
 *   pId: 1,
 *   // 小心使用缓存特性
 *   cache: true,
 *   context: this,
 *   noCacheCompromise: true,
 *   appendToBody: false,
 *   title: '未命名标题',
 *   titleAlign: 'left',
 *   loading: false,
 *   loadingText: '',
 *   showMax: true,
 *   isMax: false,
 *   moveable: true,
 *   resize: true,
 *   shadowMove: false,
 *   overEdge: false,
 *   left: '20%',
 *   top: '20%',
 *   width: '50%',
 *   height: '50%',
 *   minWidth: 0,
 *   maxWidth: '100%',
 *   minHeight: 0,
 *   maxHeight: '100%',
 *   html: document.createElement('div'),
 *   router: this.$router,
 *   components: [
 *     {
 *       component() { return import('./test.vue') },
 *       propsData: { msg: 'hello world' },
 *       listeners: {},
 *     },
 *   ],
 *   showOkBtn: true,
 *   okBtnText: '确定',
 *   showCancelBtn: true,
 *   cancelBtnText: '取消',
 *   showClose: true,
 *   closeDelay: 0,
 *   showFooter: true,,
 *   okHandler(ins, resolve) {
 *     // do sth here ...
 *     // 下面两个方法都可以关闭弹窗，数字为延时关闭
 *     resolve('建议使用此种方式，使用promise时必需调用此方法', 2000);
 *     // 注意close方法不能使promise链变为fulfilled状态
 *     ins.close(2000);
 *   },
 *   closeHandler: (ins, reject) => any,
 *   cancelHandler: (ins, reject) => any,
 *   scrollHandler: (event, ins) => any,
 *   disableBodyScroll: true,
 *   listeners: {
 *     ['on-open']() {},
 *     ['on-close']() {},
 *     ['on-cancel']() {},
 *   },
 *   slots: {
 *     // vnodes
 *     title: [this.$createElement('span', '这是title')],
 *     default: [this.$createElement('p', '主体内容')],
 *     footer: [this.$createElement('ElButton', {
 *       on: {
 *         click() { alert(); },
 *       },
 *     }, '点击弹出alert')],
 *   },
 *  }).promise().then(res => { console.log(res) }).catch(err => { console.log(err) })
 */

import Vue from 'vue';
import './src/polyfills';
import { assertObject } from '@/utils/asserts';
import { isDom, isFunction } from '@/utils/types';
import template from './src/main';

/**
 * cache vue-componentInstance
 * set a unique key as the instance ident
 * to use this feature,the config params should set cache field to true and pass through a unique id via pId field
 * ps. disabled when openInNewTag field setted
 */
const CACHE_MAP = new Map();

function beforeDestroyHook() {
  const m = beforeDestroyHook._m;
  const t = m.get(this);
  if (t) {
    t.forEach((pId) => {
      const cacheIns = CACHE_MAP.get(pId);
      // destroy cache instance
      cacheIns.$el.parentNode.removeChild(cacheIns.$el);
      cacheIns.$destroy();
      // remove cache
      CACHE_MAP.delete(pId);
    });
    m.delete(this);
  }
}

const vueHDialog = function vueHDialog(props = {}) {
  assertObject(props);

  const html = isFunction(props.html) ? props.html() : props.html;

  // cache feature needs pId and cache, context fields
  // 使用缓存特性必需要传递PId和context字段，pId为映射键名，context为调用上下文，大部分情况下传this就可以了
  // 为什么需要context，这是因为在单页面路由情况下，路由切换后再回到先前的路由，宿主上下文环境已经发生了变化
  // 如果不做其它操作的话，我们得到的依然是缓存的组件弹窗，这完全不符合我们的预期
  if (props.cache && (!props.pId || !props.context)) {
    throw new Error('[vue-h-dialog] to use cache feature,the config params should pass through a unique ident via pId field and the vue-component instance(pass through "this" refer in most cases) via context field');
  } else if (props.pId && !props.cache) {
    // remove
    CACHE_MAP.delete(props.pId);
  }
  if (props.cache && CACHE_MAP.has(props.pId)) {
    const cacheIns = CACHE_MAP.get(props.pId);
    // reset handlers
    // ANCHOR 纠结~如果重置了处理方法是不是与设计缓存这一特性的初衷不符。但是在处理不同条件变量下的操作时，不缓存内部变量又显得很有必要
    if (!props.noCacheCompromise) {
      cacheIns.$props.okHandler = props.okHandler;
      cacheIns.$props.cancelHandler = props.cancelHandler;
      cacheIns.$props.closeHandler = props.closeHandler;
      cacheIns.$props.scrollHandler = props.scrollHandler;
    }
    //
    cacheIns.visible = true;
    return cacheIns;
  }
  const mountNode = document.createElement('div');

  if (isDom(html) && !props.appendToBody && html.parentNode) {
    if (html._vhd_html_parentNode) {
      html._vhd_html_parentNode.appendChild(mountNode);
    } else {
      html._vhd_html_parentNode = html.parentNode;
      html.parentNode.appendChild(mountNode);
    }
  } else {
    document.body.appendChild(mountNode);
  }

  // if (props.components && !props.router) {
  //   throw new Error('[vue-h-dialog] when passed components property,the router property is required,otherwise the inside components may can not access the VueRouter instance');
  // }

  const InsStructor = Vue.extend(template);
  const vcOpts = {
    el: mountNode,
    propsData: { ...props },
  };

  if (props.router) {
    // 当使用了components参数时，建议传递vueRouter实例，否则内部组件取不到$router
    vcOpts.router = props.router;
  }
  const ins = new InsStructor(vcOpts);
  ins.$slots = props.slots || {};
  // attach listeners
  for (let [event, handler] of Object.entries(props.listeners || {})) {
    ins.$on(event, handler);
  }

  // show the dialog
  ins.visible = true;

  ins.$watch('visible', function (v) {
    if (!v && !props.cache) {
      // 销毁
      ins.$el.parentNode.removeChild(ins.$el);
      ins.$destroy();
    }
  });

  if (props.cache) {
    CACHE_MAP.set(props.pId, ins);
    // SECTION inject beforeDestroy hook
    beforeDestroyHook._m = beforeDestroyHook._m  || new Map();
    if (!beforeDestroyHook._m.has(props.context)) {
      beforeDestroyHook._m.set(props.context, [props.pId]);
    } else if (!beforeDestroyHook._m.get(props.context).includes(props.pId)) {
      beforeDestroyHook._m.get(props.context).push(props.pId);
    }
    if (props.context.$options.beforeDestroy && !props.context.$options.beforeDestroy.includes(beforeDestroyHook)) {
      props.context.$options.beforeDestroy.push(beforeDestroyHook);
    } else if(!props.context.$options.beforeDestroy) {
      props.context.$options.beforeDestroy = [beforeDestroyHook];
    }
    // !SECTION
  }

  return ins;
}

/**
 * 清除缓存组件
 * @namespace {clearCache~vueHDialog}
 * @static
 * @public
 * @param {any} pId
 */
vueHDialog.clearCache = function clearCache(pId) {
  return pId ? CACHE_MAP.delete(pId) : CACHE_MAP.clear();
};

/**
 * 关闭指定弹窗
 */
vueHDialog.close = function close(...gIds) {
  gIds.forEach((gId) => {
    const dialog = template.CREATED_COLLECTIONS.get(gId);
    if (dialog) {
      dialog.close();
    }
  });
};

vueHDialog.install = function install(Vue, {
  compnentName = 'VueDialog',
  propertyName = 'hDialog',
  zIndex = 504,
  lang = 'zh-cn',
  i18n = {},
} = {}) {
  template.setZIndex(zIndex);
  template.i18n = i18n;
  template.lang = lang;

  Vue.prototype[`$${propertyName}`] = vueHDialog;
  Vue.component(compnentName || template.name, template);
};

vueHDialog.template = template;

export default vueHDialog;
