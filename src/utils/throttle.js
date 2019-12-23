/**
 * 节流
 * 来自lodash
 * @param {function} func 目标函数
 * @param {number} await 间隔毫秒数
 * @param {object} options
 * @param {boolean} options.leading 默认false 函数在每个等待时延的开始被调用
 * @param {boolean} options.trailing 默认true 函数在每个等待时延的结束被调用
 * @param {number} options.maxWait 最大的等待时间，因为如果debounce的函数调用时间不满足条件，可能永远都无法触发
 */
/* eslint-disable */
import { isObject } from './types';
import { assertFunction } from './asserts';
import debounce from './debounce';

export default function throttle(func, wait, options) {
  assertFunction(func);
  
  let leading = true;
  let trailing = true;
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing,
  });
}
