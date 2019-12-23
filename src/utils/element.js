/**
 * 对dom元素的相关操作方法
 * @author huyk<bengda@outlook.com>
 * @module Element
*/
/* eslint-disable */
import {
  hasOwn,
  camelCase,
  kebabCase,
} from './helper';

import {
  assertDom,
  assertString,
  assertFunction,
  composeAssert,
} from './asserts';

import {
  isString,
  isArray,
  isPlainObject,
  isDom as isDomAlias,
} from './types';

/**
 * polyfill CustomEvent constructor for IE
 * @see {@link:https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent}
 */
(function() {
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch(e) {
    var CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };

      var evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }
})();

export const isDom = isDomAlias;

/**
 * 创建dom元素
 * @param {string} tag - 合法的dom元素标签名
 * @param {{[propName: string]: any}} [attrs={}] - 元素属性。style支持传递对象
 * @param {...(string | HTMLElement)} [children] - 子级元素
 * @returns {HTMLElement}
 */
export function createElement(tag, attrs = {}, ...children) {
  assertString(tag);

  const el = document.createElement(tag);

  // handle attrs
  Object.keys(attrs).forEach((attr) => {
    if (attr === 'style' && isPlainObject(attrs.style)) {
      setStyle(el, attrs.style);
    } else {
      el.setAttribute(kebabCase(attr), attrs[attr]);
    }
  });

  // handle children elements
  const childrenFrag = document.createDocumentFragment();
  children.forEach((child) => {
    let childEle = child;
    if (isString(child)) {
      // textnode
      childEle = document.createTextNode(child);
    }
    if (isDom(childEle)) {
      childrenFrag.appendChild(childEle);
    }
  });
  el.appendChild(childrenFrag);

  return el;
}

/**
 * 移除dom元素
 * @param {HTMLElement|string} ele
 * @param {HTMLElement} [root=document] - 根节点
 * @param {boolean} [loop=false] - 是否移除所有的找到的dom节点
 */
export function removeElement(ele, root = document, loop = false) {
  composeAssert(ele, [isString, isDom]);

  const eles = isDom(ele)
    ? [ele]
    : (loop ? root.querySelectorAll(ele) : [root.querySelector(ele)]);
  [].slice.call(eles).forEach((node) => {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

export function show(el) {
  el.style.display = '';
}

export function hide(el) {
  el.style.display = 'none';
}

/**
 * addEventListener 是否支持passive
 */
export function isListenerSurpportPassive() {
  // eslint-disable-next-line
  let supportsOption = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get() {
        supportsOption = true;
      }
    }));
  } catch(e) {}
  return supportsOption;
}

/**
 * addEventListener 是否支持once，事件只执行一次
 */
export function isListenerSurpportOnce() {
  // eslint-disable-next-line
  let supportsOption = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'once', {
      get() {
        supportsOption = true;
      }
    }));
  } catch(e) {}
  return supportsOption;
}

/**
 * 将dom字符串转为dom元素
 * 如果参数html不是有效的dom结构则会生成文本节点，这时会返回一个div包裹的dom元素
 * @param {string|HTMLElement} htmlStr
 * @returns {HTMLElement}
 */
export function transformToDom(htmlStr) {
  const wrap = document.createElement('div');
  const fragment = document.createDocumentFragment();

  wrap.innerHTML = htmlStr;
  fragment.appendChild(wrap);

  const firstEL = fragment.firstChild;
  return firstEL.firstChild.nodeType !== 1 ? firstEL : firstEL.firstChild;
}

/**
 * 事件
 * 这里备注一下额外的东西：使用console打印dom元素，很有可能看到currentTarget为null，但是取出来又有值，这是console的设计机制导致的。
 * https://stackoverflow.com/questions/26496176/when-logging-an-event-object-currenttarget-is-null-but-when-logging-event-curr
 */
export const event = {
  /**
   * 监听事件
   * @method on
   * @param {HTMLElement} el - 需绑定元素
   * @param {string} event - 绑定事件名称
   * @param {function} handler - 事件执行函数
   * @param {{ capture: boolean, passive: boolean, once: boolean }|boolean} [option] - addEventListener的第三个option参数 { capture: false, passive: false, once: false }
   */
  on(el, event, handler, option) {
    assertDom(el);
    assertString(event);
    assertFunction(handler);
    return el.addEventListener(event, handler, option);
  },

  /**
   * 取消监听事件
   * 注意如果捕获型事件和冒泡型事件分别注册了，需要分别移除，两者互不干扰
   * @method off
   * @param {HTMLElement} el - element元素
   * @param {stirng} event - 绑定事件名称
   * @param {function} handler - 回调函数
   * @param {boolean} [useCapture=false] 是否是捕获型
   */
  off(el, event, handler, useCapture = false) {
    assertDom(el);
    assertString(event);
    assertFunction(handler);
    return el.removeEventListener(event, handler, useCapture);
  },

  /**
   * 只绑定一次监听事件
   * @method once
   * @param {HTMLElement} el - 需绑定元素
   * @param {string} event - 绑定事件名称
   * @param {function} handler - 事件执行函数
   * @param {{ capture: boolean, passive: boolean, once: boolean }|boolean} [option] - addEventListener的第三个option参数 { capture: false, passive: false, once: false }
   */
  once(el, event, handler, option) {
    const that = this;
    const listener = function listener(...args) {
      handler.apply(this, args);
      that.off(el, event, listener, isPlainObject(option) ? option.capture : option);
    }
    that.on(el, event, listener, option);
  },

  /**
   * 创建一个自定义事件
   * @param {string} eventName - 事件名
   * @param {{ bubbles: false, cancelable: false, detail: undefined }} [option] - 事件携带的数据，可从监听事件的event.detail中取到
   * @returns {CustomEvent}
   */
  create(eventName, option) {
    return new CustomEvent(eventName, option);
  },

  /**
   * 触发一个自定义事件
   * @param {HTMLElement} el
   * @param {CustomEvent} customEvent
   * @returns {boolean}
   */
  dispatch(el, customEvent) {
    if (el.dispatchEvent) {
      return el.dispatchEvent(customEvent);
    }
    return el.fireEvent(customEvent);
  },
};

/**
 * 判断元素是否有某个className
 * @method hasClass
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 判断类名称
 * @return {boolean}
 */
export function hasClass(el, cls) {
  assertDom(el);
  assertString(cls);

  if (cls.indexOf(' ') !== -1) {
    throw new Error('className do not contains whitespace');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (` ${el.className} `).indexOf(` ${cls} `) > -1;
  }
}

/**
 * 给元素添加className，添加多个类使用空格隔开
 * @method addClass
 * @param {HTMLElement} el - 元素
 * @param {string|string[]} cls - 类名称
 */
export function addClass(el, cls) {
  assertDom(el);
  composeAssert(cls, [isString, isArray]);

  let curClass = el.className;
  const classNames = isArray(cls) ? cls : cls.split(' ');

  classNames.forEach((clsName) => {
    if (clsName && !hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  });

  return el.className = curClass;
}

/**
 * 移除元素className
 * @method removeClass
 * @param {HTMLElement} el
 * @param {string|string[]} cls
 */
export function removeClass(el, cls) {
  assertDom(el);
  composeAssert(cls, [isString, isArray]);

  const classeNames = cls.split(' ');
  let curClass = ` ${el.className} `;

  classeNames.forEach((clsName) => {
    if (clsName && hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  });

  return el.className = curClass.trim();
}

/**
 * @method toggleClass
 * @param {HTMLElement} el
 * @param {string} cls
 * @param {boolean} force 跟标准保持一致，为true则添加，为false则移除
 */
export function toggleClass(el, cls, force) {
  assertDom(el);
  assertString(cls);

  let actor;

  if (force === undefined) {
    actor = hasClass(el, cls) ? removeClass : addClass;
  } else {
    actor = force ? addClass : removeClass;
  }

  return actor(el, cls);
}

/**
 * 获取元素某个样式
 * 优先使用计算值，意味着如果使用document.createElement创建元素，但是没有append到页面中去是获取不到元素的宽高等信息的
 * @method getStyle
 * @param {HTMLElement} el
 * @param {string} styleName 样式名称
 * @return {string|number|null}
 */
export function getStyle(el, styleName) {
  assertDom(el);
  assertString(styleName);

  try {
    const computed = document.defaultView.getComputedStyle(el, null);
    return computed.getPropertyValue(kebabCase(styleName, false));
  } catch (e) {
    return el.style[camelCase(styleName, false)];
  }
}

/**
 * 设置元素某个样式
 * @method setStyle
 * @param {HTMLElement} el
 * @param {string|{[propName: string]: string|number}} styleName - 样式名称。可使用对象.例如 { width: '100px' }，此时会忽略value参数
 * @param {string} value - 设置值
 */
export function setStyle(el, styleName, value) {
  assertDom(el);
  composeAssert(styleName, [isString, isPlainObject]);

  if (isPlainObject(styleName)) {
    return Object.entries(styleName).every(([k, v]) => {
      return setStyle(el, k, v);
    });
  }
  styleName = camelCase(styleName);

  return el.style[styleName] = value;
}

/**
 * 获取dom元素
 * @param {string|HTMLElement} arg
 * @param {HTMLElement} [root=document] - 根节点
 */
export function getDom(arg, root = document) {
  if (isDom(arg)) {
    return arg;
  } else if (isString(arg)) {
    const dom = root.querySelector(arg);
    if (!dom) {
      throw new Error(`${arg} not exist in the given root node`);
    }
    return dom;
  }
  throw new TypeError('Expected HTMLElement or valid selector');
}

/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
export function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
export function containsDeep(parent, child) {
  assertDom(parent);
  assertDom(child);

  let node = child;
  while (node) {
    if (node === parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
export function getParentNode(node) {
  assertDom(node);

  const parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}

/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
export function getBoundingClientRect(el) {
  let rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top,
    };
  }
  return rect;
}

/**
 * 获取ele1相对于ele2的距离
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {{ x: number, y: number }}
 */
export function getOffset(ele1, ele2) {
  const $ele1 = getDom(ele1);
  const $ele2 = getDom(ele2);
  const bcr1 = getBoundingClientRect($ele1);
  const bcr2 = getBoundingClientRect($ele2);
  return {
    x: bcr1.left - bcr2.left,
    y: bcr1.top - bcr2.top,
  };
}

/**
 * ele1当前视图区域是否处于ele2的盒子区域中
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {boolean}
 */
export function checkBoxViewIsInside(ele1, ele2 = document.documentElement) {
  const $ele1 = getDom(ele1);
  const $ele2 = getDom(ele2);
  const bcr1 = getBoundingClientRect($ele1);
  const bcr2 = getBoundingClientRect($ele2);
  return bcr1.left >= bcr2.left
    && bcr1.right <= bcr2.right
    && bcr1.top >= bcr2.top
    && bcr1.bottom <= bcr2.bottom;
}

/**
 * ele1当前视图区域是否部分处于ele2的盒子区域中
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {boolean}
 */
export function checkBoxViewIsPartInside(ele1, ele2 = document.documentElement) {
  const $ele1 = getDom(ele1);
  const $ele2 = getDom(ele2);
  const bcr1 = getBoundingClientRect($ele1);
  const bcr2 = getBoundingClientRect($ele2);

  return bcr1.left >= bcr2.left && bcr1.left < bcr2.right
    || bcr1.right <= bcr2.right && bcr1.right > bcr2.left
    || bcr1.top >= bcr2.top && bcr1.top < bcr2.bottom
    || bcr1.bottom <= bcr2.bottom && bcr1.bottom > bcr2.top;
}

/**
 * 获取上一个兄弟元素
 */
export function getPreviousElementSibling(ele) {
  if (ele.previousElementSibling !== undefined) {
    // IE9+,Chrome,firefox..
    return ele.previousElementSibling;
  }
  let item = ele.previousSibling ;
  // IE8-
  while (item && item.nodeType !== 1) {
    item = item.previousSibling ;
  }
  return item;
}

/**
 * 获取下一个兄弟元素
 */
export function getNextElementSibling(ele) {
  if (ele.nextElementSibling !== undefined) {
    // IE9+,Chrome,firefox..
    return ele.nextElementSibling;
  }
  let item = ele.nextSibling ;
  // IE8-
  while (item && item.nodeType !== 1) {
    item = item.nextSibling ;
  }
  return item;
}

/**
 * module exports
 */
export default 'MODIFY_THIS_SCRIPT_CAREFULLY';

