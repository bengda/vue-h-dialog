/**
 * 一些乱七八糟的方法
 * @author huyk<bengda@outlook.com>
 * @version 0.0.1
 * @module Mess
 */
import { isArray, isString, isObject, isFunction } from './types';
import { composeAssert } from './asserts';

/**
 * element-ui 级联选择器最后一级的children给空数组会显示空白列表
 * 这里将最后一级children置为null
 * childrenProp允许支持对象类型，新增对disabled字段支持
 * @param {Array<object>} tree
 * @param {string | { children: string, disabled?: any }} childrenProp
 */
export function pruneTreeDataForElementUICascaderComponent(tree, childrenProp) {
  composeAssert(childrenProp, [isString, isObject]);

  const children = isString(childrenProp) ? childrenProp : childrenProp.children;
  const disabled = isObject(childrenProp) ?  childrenProp.disabled : undefined;
  if (!children) {
    throw new Error('[pruneTreeDataForElementUICascaderComponent] missing required children field');
  }
  if (isArray(tree)) {
    tree.forEach((item) => {
      if (isFunction(disabled)) {
        Object.assign(item, { disabled: disabled(item) });
      }
      if (item[children] && item[children].length) {
        pruneTreeDataForElementUICascaderComponent(item[children], childrenProp);
      } else {
        // 级联选择器最后一级的children给空数组会显示空白列表
        Object.assign(item, { [children]: null });
      }
    });
  }
  return tree;
}

/**
 * 获取父级vue组件实例
 * @param {object} currentComponentIns - 当前vue组件实例
 * @param {string} componentName - $options中应指定componentName
 */
export function getParentVueComponent(currentComponentIns, componentName) {
  let parent = currentComponentIns.$parent || currentComponentIns.$root;
  let name = parent.$options.componentName;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.componentName;
    }
  }
  return parent;
}

 /**
  * 将model中的elementFormRule字段提取出来
  * @param {Model} model - model描述
  */
 export function extractElementFormRules(model) {
  const res = {};

  Object.entries(model).forEach(([k, v]) => {
    if (v.hasOwnProperty('elementFormRule')) {
      Object.assign(res, { [k]: v.elementFormRule });
    }
  });

  return res;
}

 /**
 * module export
 */
export default 'MODIFY_THIS_SCRIPT_CAREFULLY';