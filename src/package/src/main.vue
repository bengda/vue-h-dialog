<template>
  <div
    v-show="visible"
    @mousemove="moveMouseMoveHandler($event);resizeMouseMoveHandler($event, currentResizeMoveSide)"
    @mouseup="moveMouseUpHandler($event);resizeMouseUpHandler($event, currentResizeMoveSide)"
    class="vue-h-dialog"
    :data-vhd-pid="pId || 0"
    :data-vhd-gid="gId"
    :data-vhd-cache="cache"
    :style="{ zIndex: zIndex || $options.getZIndex() }">
    <div class="vue-h-dialog__mask"></div>
    <div
      ref="main"
      class="vue-h-dialog__main"
      :class="{
        'vue-h-dialog__main--ismax': dialogIsMax,
        'vue-h-dialog__main--ismoving': dialogIsMoving,
        'vue-h-dialog__main--isresizing': dialogIsResizing,
        'vue-h-dialog__main--shadowmove': shadowMove,
      }"
      :style="computedMainStyles">
      <div v-if="showHeader" ref="header" class="vue-h-dialog__header">
        <div
          class="vue-h-dialog__title"
          :class="{ 'vue-h-dialog--moveable': computedMoveable && !dialogIsMax }"
          :style="computedTitleStyle">
          <slot name="title"></slot>
          <span v-if="!$slots.title" :title="i18n(title)">{{ i18n(title) }}</span>
        </div>
        <div class="vue-h-dialog__controls">
          <span
            v-if="showMax && dialogIsMax"
            @click="resetDialogMax"
            class="vue-h-dialog__control-btn"
            :title="i18n('还原')">
            <svg style="width: 1.2em; height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5026"><path d="M394.666667 349.866667L185.6 147.2l-42.666667 42.666667 209.066667 206.933333H204.8v59.733333h249.6V209.066667h-59.733333zM145.066667 876.8v-189.866667H85.333333v249.6h247.466667v-59.733333H147.2zM691.2 87.466667v59.733333H878.933333v189.866667H938.666667V87.466667zM740.266667 697.6c-14.933333-17.066667-27.733333-27.733333-36.266667-36.266667h147.2v-59.733333H601.6v247.466667H661.333333V704c8.533333 8.533333 19.2 21.333333 36.266667 36.266667 34.133333 32 83.2 78.933333 147.2 142.933333l21.333333 21.333333 42.666667-42.666666-21.333333-21.333334c-66.133333-64-115.2-110.933333-147.2-142.933333z"></path></svg>
          </span>
          <span @click="setDialogMax" v-if="showMax && !dialogIsMax" class="vue-h-dialog__control-btn" :title="i18n('最大化')">
            <svg style="width: 1.0009765625em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2598"><path d="M968.155805 0.699317c30.370341 0 55.046244 24.675902 55.046244 55.046244v424.685268c0 30.370341-24.675902 55.046244-55.046244 55.046244-30.370341 0-55.046244-24.675902-55.046244-55.046244V55.645659l55.046244 55.046243H536.377463c-30.370341 0-55.046244-24.675902-55.046243-55.046243S506.007122 0.599415 536.377463 0.599415h431.778342z m-913.108293 1019.604293c-30.370341 0-55.046244-24.675902-55.046244-55.046244V540.572098c0-30.370341 24.675902-55.046244 55.046244-55.046244s55.046244 24.675902 55.046244 55.046244v424.685268l-55.046244-55.046244H486.825854c30.370341 0 55.046244 24.675902 55.046244 55.046244 0 30.370341-24.675902 55.046244-55.046244 55.046244H55.047512z m0 0"></path></svg>
          </span>
          <span
            v-if="showClose"
            @click="closeBtnClickHandler"
            class="vue-h-dialog__control-btn"
            :title="i18n('关闭')">
            <svg style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1939"><path d="M521.693867 449.297067L111.4112 39.0144a51.2 51.2 0 1 0-72.430933 72.362667l410.282666 410.3168-410.282666 410.3168a51.2 51.2 0 1 0 72.3968 72.3968l410.3168-410.282667 410.3168 410.282667a51.2 51.2 0 1 0 72.3968-72.362667l-410.282667-410.350933 410.282667-410.282667a51.2 51.2 0 1 0-72.3968-72.3968l-410.282667 410.282667z"></path></svg>
          </span>
        </div>
      </div>
      <div ref="content" class="vue-h-dialog__content" :style="computedContentStyles">
        <el-scrollbar
          ref="scrollbar"
          wrap-class="vue-h-dialog__scrollbar-wrap"
          view-class="vue-h-dialog__scrollbar-view">
          <slot></slot>
          <div ref="htmlBox" class="vue-h-dialog__htmlbox"></div>
          <div ref="componentsBox" class="vue-h-dialog__componentsbox"></div>
        </el-scrollbar>
        <!-- 加载动画 -->
        <div v-if="loading" class="vue-h-dialog__loading-mask">
          <div class="vue-h-dialog__loading-spinner">
            <svg viewBox="25 25 50 50" class="circular">
              <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
            </svg>
            <div v-if="loadingText" class="vue-h-dialog__loading-text">{{ i18n(loadingText) }}</div>
          </div>
        </div>
      </div>
      <div v-if="showFooter" ref="footer" class="vue-h-dialog__footer">
        <slot name="footer"></slot>
        <!-- 自定义按钮 -->
        <button
          v-for="(button, buttonIdx) in buttons"
          :keys="buttonIdx"
          @click="callCustomizedButtonHandler(button.handler)"
          class="vue-h-dialog__button"
          :class="getCustomizedButtonClass(button)"
          :style="button.style"
          :disabled="loading || isOnDelayTicking"><span>{{ i18n(button.text) }}</span></button>
        <template v-if="!$slots.footer && !buttons.length">
          <button
            v-if="showOkBtn"
            @click="okBtnClickHandler"
            class="vue-h-dialog__button vue-h-dialog__button--primary"
            :class="{ 'is-disabled': loading || isOnDelayTicking }"
            :disabled="loading || isOnDelayTicking"><span>{{ i18n(okBtnText) }}</span></button>
          <button
            v-if="showCancelBtn"
            @click="cancelBtnClickHandler"
            class="vue-h-dialog__button"
            :class="{ 'is-disabled': isOnDelayTicking }"
            :disabled="isOnDelayTicking"><span>{{ i18n(cancelBtnText) }}</span></button>
        </template>
      </div>
      <slot name="cover"></slot>
      <div v-show="dialogIsMoving || dialogIsResizing" class="vue-h-dialog__main-disable-mask"></div>
      <!-- 拖曳区域 -->
      <div v-if="moveable && !dialogIsMax" @mousedown="moveMouseDownHandler" class="vue-h-dialog__drag-area" :style="dragArea"></div>
      <!-- 移动时的虚拟框 -->
      <div v-show="dialogIsMoving && shadowMove" class="vue-h-dialog__shadow" :style="computedShadowStyles"></div>
      <!-- resize -->
      <template v-if="resize">
        <div
          v-for="side in computedResizebarsToRender"
          :key="side"
          @mousedown="resizeMouseDownHandler"
          @mouseup="resizeMouseUpHandler"
          @mousemove="resizeMouseMoveHandler($event, side)"
          class="vue-h-dialog__resize-bar"
          :class="[`vue-h-dialog__resize-bar--${side}`]"></div>
      </template>
    </div>
  </div>
</template>

<script>
/**
 * @author huyk<bengda@outlook.com>
 * @events
 * on-open
 * on-close
 * on-cancel
 */
import './style.less';
import '@/components/scrollbar/scrollbar.css';

import Vue from 'vue';
import { assertObject, assertString, composeAssert } from '@/utils/asserts';

import {
  isFunction,
  isString,
  isObject,
  isDom,
  isNumeric,
  isArray,
} from '@/utils/types';
import { deepClone, generateUuid } from '@/utils/helper';
import debounce from '@/utils/debounce';

import {
  event,
  getBoundingClientRect,
  setStyle,
  addClass,
} from '@/utils/element';
import { addResizeListener, removeResizeListener } from '@/utils/resize-event';
import getScrollbarWidth from '@/utils//scrollbar-width';
import ElScrollbar from '@/components/scrollbar';
import i18n from './i18n';

const scrollbarWidth = getScrollbarWidth();
let Z_INDEX = 504;

export default {
  name: 'VueHDialog',
  componentName: 'VueHDialog',
  components: {
    ElScrollbar,
  },
  // 本想用 getter/setter 发现会被vue去掉
  getZIndex() {
    return Z_INDEX;
  },
  setZIndex(val) {
    Z_INDEX = val;
  },
  // 多语言
  lang: 'zh-cn',
  i18n: {
    // '确定': 'Confirm',
  },
  // 已创建的弹窗集合
  // gId作为键名
  CREATED_COLLECTIONS: new Map(),
  props: {
    // visible
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '未命名标题',
    },
    // [left|center|right]
    titleAlign: {
      type: String,
      default: 'center',
    },
    // 显示加载动画
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: '600px',
    },
    minWidth: {
      type: [Number, String],
      default: '300px',
    },
    maxWidth: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      // default: '400px',
    },
    minHeight: {
      type: [Number, String],
      default: '200px',
    },
    maxHeight: {
      type: [Number, String],
      default: '100%',
    },
    left: {
      type: [Number, String],
    },
    top: {
      type: [Number, String],
    },
    zIndex: {
      type: Number,
    },
    // html字符串或dom元素
    html: {
      // type: [String, HTMLElement, Function],
      validator(value) {
        const v = isFunction(value) ? value() : value;
        return isString(v) || isDom(v);
      },
    },
    // 传入vue组件
    components: {
      type: Array,
      default() {
        return [
          /*
          {
            // 模板字符串，可选
            // 当指定了template时，传递props数据应该使用v-bind="propsData[index]"
            // 组键名没有指定时使用component-index作为组键名:<component-0 v-bind="propsData[0]"></component-0>
            template: '<el-button v-bind="propsData[0]"></el-button>',
            // 组件名，可选
            name: 'ElButton',
            // 组件对象，必需。可使用诸如import('xxx')返回一个promise对象
            component: Vue.component('ElButton'),
            // 传递给组件的props数据
            propsData: {},
            // 组件的监听事件
            listeners: {},
          },
           */
        ];
      },
    },
    // 是否允许拖动
    moveable: {
      type: Boolean,
      default: true,
    },
    /**
     * 容器可拖曳区域
     */
    dragArea: {
      type: Object,
      default() {
        return {
          left: 0,
          top: 0,
          width: '100%',
          height: '50px',
        };
      },
    },
    // 鼠标移动时只移动一个空的容器，最后再将空容器的位置赋给主窗口
    shadowMove: {
      type: Boolean,
      default: false,
    },
    // 是否允许弹窗超出屏幕
    overEdge: {
      type: Boolean,
      default: false,
    },
    // 是否显示最大化按钮
    showMax: {
      type: Boolean,
      default: true,
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true,
    },
    // 显示取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
    // 显示确认按钮
    showOkBtn: {
      type: Boolean,
      default: true,
    },
    // 显示header
    showHeader: {
      type: Boolean,
      default: true,
    },
    // 显示底部footer
    showFooter: {
      type: Boolean,
      default: true,
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
    okBtnText: {
      type: String,
      default: '确定',
    },
    // 自定义底部按钮
    buttons: {
      type: Array,
      default() {
        return [
          // {
          //   text: '确定',
          //   // default, primary, warning, danger, success, info
          //   type: 'primary',
          //   class: [],
          //   style: [],
          //   handler(ins, resolve, reject) {},
          // },
        ];
      },
    },
    // 初始显示为最大化窗口
    isMax: {
      type: Boolean,
      default: false,
    },
    // 点击确认按钮执行的操作
    // 如果使用promise记得调用resolve
    // okHandler(this, resolve)
    okHandler: {
      type: Function,
    },
    // 点击取消按钮执行的操作
    // cancelHandler(this, reject)
    cancelHandler: {
      type: Function,
    },
    // 点击取消按钮执行的操作
    // closeHandler(this, reject)
    closeHandler: {
      type: Function,
    },
    // content区域的滚动事件
    scrollHandler: {
      type: Function,
    },
    disableBodyScroll: {
      type: Boolean,
      default: true,
    },
    // 延时关闭窗口
    closeDelay: {
      type: Number,
      default: 0,
    },
    // 缓存组件，只在函数式调用下有效
    pId: [String, Number],
    cache: Boolean,
    context: Object,
    // 默认会不缓存okHandler，cancelHandler，closeHandler，scrollHandler
    noCacheCompromise: {
      type: Boolean,
      default: true,
    },
    // 是否可拖曳改变大小
    // [top, right, bottom, left, top-left, top-right, bottom-left, bottom-right]
    resize: {
      type: [Boolean, Array],
      default: true,
    },
    // 语言，可选[zh-cn, en-us]
    lang: String,
  },
  data() {
    return {
      gId: `vhd_${generateUuid(8, 62)}`,
      visible: false,
      dialogWidth: null,
      dialogMinWidth: null,
      dialogMaxWidth: null,
      dialogHeight: null,
      dialogMinHeight: null,
      dialogMaxHeight: null,
      dialogLeft: null,
      dialogTop: null,
      dialogBCRCopy: null,
      dialogIsMax: false,
      dialogBCR: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      },
      renderedDialogBCR: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      },
      dialogIsMoving: false,
      dialogMovingBCR: null,
      dialogMovingPos: {
        x: 0,
        y: 0,
      },
      boxMoved: false,
      dialogIsResizing: false,
      dialogResizeBCR: null,
      dialogResizePos: {
        x: 0,
        y: 0,
      },
      currentResizeMoveSide: null,
      boxResized: false,
      // 使用components参数，会使用new Vue()生成一个实例对象
      // 取compnents实例对象可以使用vueComponentIns.$children[索引]
      // 最好直接用this.getComponents()
      vueComponentIns: null,
      headerHeight: 0,
      footerHeight: 0,
      // 是否允许监听main块的大小变化
      enableListenMainBoxResize: true,
      firstResetMaxTriggered: false,
      closeTid: null,
      //
      isOnDelayTicking: false,
    };
  },
  watch: {
    value(v) {
      this.visible = v;
    },
    visible(v) {
      if (v) {
        if (this.isMax) {
          this.setDialogMax();
        } else {
          this.setBCR();
        }
        this.$emit('on-open', this);

        this.determineBodyScroll();
      } else {
        if (!this.cache) {
          // 关闭，重置数据
          this.resetData();
        }
        if (isNumeric(this.zIndex)) {
          Z_INDEX = this.zIndex < Z_INDEX ? Z_INDEX : (this.zIndex + 1);
        } else {
          Z_INDEX += 1;
        }

        if (this._html && this._html._vhd_html_restore_points) {
          this._html._vhd_html_restore_points.pop().replaceWith(this._html);
        }

        this.handleEnableBodyScroll();

        this.$emit('on-close', this);
      }
    },
    isMax(v) {
      this.dialogIsMax = v;
      if (v) {
        this.setDialogMax();
      } else {
        this.resetDialogMax();
      }
    },
    dialogMovingBCR: {
      deep: true,
      handler: 'limitEdgeBCRValue',
    },
    dialogResizeBCR: {
      deep: true,
      handler: 'limitEdgeBCRValue',
    },
    dialogBCR: {
      deep: true,
      handler: debounce(function handler() {
        this.mainBoxResizeHandler(false);
      }, 300),
    },
    html() {
      this.setHtmlContent();
    },
    disableBodyScroll: 'determineBodyScroll',
  },
  computed: {
    computedMoveable() {
      return this.moveable;
    },
    computedResizeable() {
      return !!this.resize;
    },
    computedMainStyles() {
      const style = {};
      if (this.dialogBCR) {
        const bcr = { ...this.dialogBCR };
        Object.entries(bcr).forEach(([k, v]) => {
          style[k] = isNumeric(v) ? `${v}px` : '';
        });
        if (!this.shadowMove && this.dialogMovingBCR) {
          style.left = `${this.dialogMovingBCR.left}px`;
          style.top = `${this.dialogMovingBCR.top}px`;
        }
        if (this.dialogResizeBCR) {
          style.width = `${this.dialogResizeBCR.width}px`;
          style.height = `${this.dialogResizeBCR.height}px`;
          style.left = `${this.dialogResizeBCR.left}px`;
          style.top = `${this.dialogResizeBCR.top}px`;
        }
      }
      return style;
    },
    computedContentStyles() {
      const style = {};
      if (this.dialogBCR) {
        const { innerHeight } = window;
        const { height } = this.dialogBCR;
        let { minHeight, maxHeight } = this.dialogBCR;
        if (this.dialogMinHeight) {
          minHeight = this.computePrimitiveValue(this.dialogMinHeight, innerHeight);
        }
        if (this.dialogMaxHeight) {
          maxHeight = this.computePrimitiveValue(this.dialogMaxHeight, innerHeight);
        }
        const { headerHeight, footerHeight } = this;
        const computedMinHeight = minHeight - headerHeight - footerHeight;
        const computedMaxHeight = (isNumeric(height)
          ? Math.min(maxHeight, height)
          : maxHeight) - headerHeight - footerHeight;
        Object.entries({
          minHeight: Math.max(0, computedMinHeight),
          maxHeight: Math.max(0, computedMaxHeight),
        }).forEach(([k, v]) => {
          style[k] = isNumeric(v) ? `${v}px` : '';
        });
        if (this.$refs.content) {
          this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap').style.maxHeight = `${Math.max(0, computedMaxHeight) + scrollbarWidth + 1}px`;
          this.$refs.scrollbar.update();
        }
      }
      return style;
    },
    computedTitleStyle() {
      const align = this.titleAlign || 'center';
      if (align !== 'center') {
        return {
          textAlign: align,
          padding: '0 15px',
        };
      }
      return {
        textAlign: 'center',
      };
    },
    computedShadowStyles() {
      const style = {};
      if (this.dialogMovingBCR && this.shadowMove) {
        const bcr = {
          ...this.dialogMovingBCR,
          width: getBoundingClientRect(this.$refs.main).width,
          height: getBoundingClientRect(this.$refs.main).height,
        };
        Object.entries(bcr).forEach(([k, v]) => {
          style[k] = isNumeric(v) ? `${v}px` : '';
        });
      }
      return style;
    },
    computedResizebarsToRender() {
      const sides = this.resize === true
        ? [
          'top',
          'right',
          'bottom',
          'left',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ] : (this.resize || []);

      return sides;
    },
  },
  created() {
    // 添加到已创建集合中去
    this.$options.CREATED_COLLECTIONS.set(this.gId, this);
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    event.off(window, 'resize', this.resizeListener);
    event.off(window, 'mouseup', this.moveMouseUpHandler);
    event.off(window, 'mouseup', this.resizeMouseUpHandler);
    removeResizeListener(this.$refs.main, this.mainBoxResizeHandler);
    if (isFunction(this.scrollListener)) {
      event.off(this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap'), 'scroll', this.scrollListener);
    }

    // 从CREATED_COLLECTIONS中移除
    this.$options.CREATED_COLLECTIONS.delete(this.gId);
  },
  methods: {
    i18n(word) {
      return i18n(word, this.lang || this.$options.lang, this.$options.i18n);
    },
    init() {
      [
        'width',
        'height',
        'minWidth',
        'maxWidth',
        'minHeight',
        'maxHeight',
        'left',
        'top',
      ].forEach((item) => {
        this.$watch(item, () => {
          this.boxMoved = false;
          this.boxResized = false;
          this.setBCR();
        });
      });
      // this.setBCR();
      // if (this.isMax) {
      //   this.setDialogMax();
      // }
      this.mountComponents();
      this.setHtmlContent();
      this.visible = this.value;
      this.resizeListener = debounce(() => {
        // this.renderedDialogBCR = getBoundingClientRect(this.$refs.main);
        // const bcr = { ...this.dialogBCR };
        this.boxMoved = false;
        this.boxResized = false;
        this.setBCR();
      }, 300);
      event.on(window, 'resize', this.resizeListener);
      event.on(window, 'mouseup', this.moveMouseUpHandler);
      event.on(window, 'mouseup', this.resizeMouseUpHandler);
      addResizeListener(this.$refs.main, this.mainBoxResizeHandler);
      if (isFunction(this.scrollHandler)) {
        // eslint-disable-next-line
        this.scrollListener = (event) => {
          this.scrollHandler(event, this);
        }
        event.on(this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap'), 'scroll', this.scrollListener);
      }
    },
    determineBodyScroll() {
      if (this.disableBodyScroll && this.visible) {
        this.handleDisableBodyScroll();
      } else {
        this.handleEnableBodyScroll();
      }
    },
    handleDisableBodyScroll() {
      document.body.setAttributeNode(document.createAttribute('data-scroll-disable'));
    },
    handleEnableBodyScroll() {
      document.body.removeAttribute('data-scroll-disable');
    },
    onTransitionend() {
      if (!this.visible) {
        if (!this.cache) {
          // 关闭，重置数据
          this.resetData();
        }
      } else {
        this.inited = true;
      }
    },
    resetData() {
      const excludes = [
        'visible',
        // 一定不要重置gId
        'gId',
      ];
      Object.entries(this.$options.data()).forEach(([k, v]) => {
        if (!excludes.includes(k)) {
          this[k] = v;
        }
      });
    },
    checkResizebarVisible(side) {
      return this.resize === true || this.resize.includes(side);
    },
    mainBoxResizeHandler(setFlag = true) {
      if (this.enableListenMainBoxResize && !this.dialogIsMoving && !this.dialogIsResizing) {
        this.headerHeight = this.$refs.header ? getBoundingClientRect(this.$refs.header).height : 0;
        this.footerHeight = this.$refs.footer ? getBoundingClientRect(this.$refs.footer).height : 0;
        this.renderedDialogBCR = getBoundingClientRect(this.$refs.main);
        if (setFlag) {
          this.setBCR({
            left: this.boxMoved || this.boxResized ? this.dialogBCR.left : null,
            top: this.boxMoved || this.boxResized ? this.dialogBCR.top : null,
            width: this.boxResized ? this.dialogBCR.width : null,
            height: this.boxResized ? this.dialogBCR.height : null,
          });
        }
      }
    },
    mainBoxResizeListenerEnableHanlder: debounce(function mainBoxResizeListenerEnableHanlder() {
      this.enableListenMainBoxResize = true;
      this.mainBoxResizeHandler(false);
    }, 300),
    disableMainBoxResizeListenerMomentary() {
      this.enableListenMainBoxResize = false;
      this.mainBoxResizeListenerEnableHanlder();
    },
    /**
     * 获取components参数注册的组件实例
     * @returns {array}
     */
    getComponents() {
      return this.vueComponentIns ? this.vueComponentIns.$children : [];
    },
    setHtmlContent() {
      const html = isFunction(this.html) ? this.html() : this.html;
      if (isString(html)) {
        this.$refs.htmlBox.innerHTML = html;
      } else if (isDom(html)) {
        this._html = html;
        // 设置还原点
        const restoreEle = document.createElement('b');
        restoreEle.id = `vhd_${generateUuid(8, 62)}`;
        restoreEle.style.display = 'none';
        restoreEle.style.visibility = 'hidden';

        if (!html._vhd_html_restore_points) {
          html._vhd_html_restore_points = [];
        }
        html._vhd_html_restore_points.push(restoreEle);

        html.replaceWith(restoreEle);

        this.$refs.htmlBox.appendChild(html);
        html.style.display = '';
      }
    },
    mountComponents() {
      const mountNode = document.createElement('div');
      const templates = [];
      const components = {};
      const propsData = {};
      const listeners = {};
      this.components.forEach((item, index) => {
        assertObject(item);
        composeAssert(item.component, [isObject, isFunction]);
        if (item.name) {
          assertString(item.name);
        }
        const componentName = item.name || `component-${index}`;
        if (item.propsData) {
          assertObject(item.propsData);
        }
        if (item.listeners) {
          assertObject(item.listeners);
        }
        if (item.template) {
          assertString(item.template);
          templates.push(item.template);
        } else {
          templates.push(`<${componentName} v-bind="propsData[${index}]" v-on="listeners[${index}]"></${componentName}>`);
        }
        components[componentName] = item.component;
        propsData[index] = { ...(item.propsData || {}) };
        listeners[index] = { ...(item.listeners || {}) };
      });
      const InsConstructor = Vue.extend({
        template: `<div>${templates.join('\n')}</div>`,
        components,
        router: this.$router,
        data() {
          return {
            propsData,
            listeners,
          };
        },
      });
      this.$refs.componentsBox.appendChild(mountNode);
      this.vueComponentIns = new InsConstructor({ el: mountNode });
    },
    setBCR(bcr = {}) {
      const { innerWidth, innerHeight } = window;
      let width = this.computePrimitiveValue(
        this.dialogWidth || this.width,
        innerWidth,
      );
      let height = this.computePrimitiveValue(
        this.dialogHeight || this.height,
        innerHeight,
      );
      const minWidth = this.computePrimitiveValue(
        this.dialogMinWidth || this.minWidth,
        innerWidth,
      );
      const maxWidth = this.computePrimitiveValue(
        this.dialogMaxWidth || this.maxWidth,
        innerWidth,
      );
      const minHeight = this.computePrimitiveValue(
        this.dialogMinHeight || this.minHeight,
        innerHeight,
      );
      const maxHeight = this.computePrimitiveValue(
        this.dialogMaxHeight || this.maxHeight,
        innerHeight,
      );
      if (isNumeric(width)) {
        if (isNumeric(minWidth)) {
          width = Math.max(width, minWidth);
        }
        if (isNumeric(maxWidth)) {
          width = Math.min(width, maxWidth);
        }
      }
      if (isNumeric(height)) {
        if (isNumeric(minHeight)) {
          height = Math.max(height, minHeight);
        }
        if (isNumeric(maxHeight)) {
          height = Math.min(height, maxHeight);
        }
      }
      const $left = (bcr.left || this.dialogLeft || this.left);
      const $top = (bcr.top || this.dialogTop || this.top);
      const $width = isNumeric(width) ? width : this.renderedDialogBCR.width;
      const $height = isNumeric(height) ? height : this.renderedDialogBCR.height;
      const left = this.computePrimitiveValue(
        isNumeric($left) ? $left : ($left || (innerWidth - $width) / 2),
        innerWidth,
      );
      const top = this.computePrimitiveValue(
        isNumeric($top) ? $top : ($top || (innerHeight - $height) / 2),
        innerHeight,
      );
      const dialogBCR = {
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        left,
        top,
      };
      this.dialogBCR = this.limitEdgeBCRValue(dialogBCR, !Object.keys(bcr).length);
      return dialogBCR;
    },
    computePrimitiveValue(value, referer = 1) {
      if (`${value}`.includes('%')) {
        return (Number.parseFloat(value) / 100) * referer;
      }
      return Number.parseFloat(value);
    },
    /**
     * 限制超出屏幕
     */
    limitEdgeBCRValue(_bcr) {
      const bcr = _bcr;
      if (bcr && !this.overEdge) {
        const { innerWidth, innerHeight } = window;
        Object.entries(bcr).forEach(([prop]) => {
          switch (prop) {
            case 'width':
              bcr.width = Math.min(innerWidth, bcr.width);
              break;
            case 'minWidth':
              bcr.minWidth = Math.max(0, bcr.minWidth);
              break;
            case 'maxWidth':
              bcr.maxWidth = Math.min(innerWidth, bcr.maxWidth);
              break;
            case 'height':
              bcr.height = Math.min(innerHeight, bcr.height);
              break;
            case 'minheight':
              bcr.minHeight = Math.max(0, bcr.minHeight);
              break;
            case 'maxheight':
              bcr.maxHeight = Math.min(innerHeight, bcr.maxHeight);
              break;
            case 'left': {
              if (bcr.left < 0) {
                bcr.left = 0;
                break;
              }
              const width = isNumeric(bcr.width) ? bcr.width : this.renderedDialogBCR.width;
              bcr.left = Math.min(bcr.left, innerWidth - Math.min(innerWidth, width));
              break;
            }
            case 'top': {
              if (bcr.top < 0) {
                bcr.top = 0;
                break;
              }
              const height = isNumeric(bcr.height) ? bcr.height : this.renderedDialogBCR.height;
              bcr.top = Math.min(bcr.top, innerHeight - Math.min(innerHeight, height));
              break;
            }
            default:
              break;
          }
        });
        this.limitRectValue(bcr);
      }
      return bcr;
    },
    limitRectValue(_bcr) {
      const bcr = _bcr;
      if (bcr) {
        if (isNumeric(bcr.minHeight) && isNumeric(bcr.height)) {
          bcr.height = Math.max(bcr.height, bcr.minHeight);
        }
        if (isNumeric(bcr.maxHeight) && isNumeric(bcr.height)) {
          bcr.height = Math.min(bcr.height, bcr.maxHeight);
        }
        if (isNumeric(bcr.minWidth) && isNumeric(bcr.width)) {
          bcr.width = Math.max(bcr.width, bcr.minWidth);
        }
        if (isNumeric(bcr.maxWidth) && isNumeric(bcr.width)) {
          bcr.width = Math.min(bcr.width, bcr.maxWidth);
        }
      }
      return bcr;
    },
    /**
     * 设置弹窗最大化
     */
    setDialogMax() {
      this.dialogIsMax = true;
      this.dialogWidth = '100%';
      this.dialogHeight = '100%';
      this.dialogMinWidth = '0';
      this.dialogMaxWidth = '100%';
      this.dialogMinHeight = '0';
      this.dialogMaxHeight = '100%';
      this.dialogLeft = '0';
      this.dialogTop = '0';
      this.dialogBCRCopy = deepClone(this.dialogBCR);
      this.setBCR();
      this.disableMainBoxResizeListenerMomentary();
    },
    /**
     * 还原弹窗最大化
     */
    resetDialogMax() {
      this.dialogIsMax = false;
      this.dialogWidth = null;
      this.dialogHeight = null;
      this.dialogMinWidth = null;
      this.dialogMaxWidth = null;
      this.dialogMinHeight = null;
      this.dialogMaxHeight = null;
      this.dialogLeft = null;
      this.dialogTop = null;
      if (this.dialogBCRCopy) {
        this.dialogBCR = deepClone(this.dialogBCRCopy);
        this.dialogBCRCopy = null;
      } else {
        this.setBCR();
      }
      if (this.isMax && !this.firstResetMaxTriggered) {
        // do nothing
      } else {
        this.disableMainBoxResizeListenerMomentary();
      }
      this.firstResetMaxTriggered = true;
    },
    delayClose(callback, delay = this.closeDelay) {
      if (!this.isOnDelayTicking) {
        clearTimeout(this.closeTid);
        this.isOnDelayTicking = true;

        this.closeTid = setTimeout(() => {
          this.isOnDelayTicking = false;
          this.visible = false;
          this.$emit('input', false);
          if (isFunction(callback)) {
            callback.call(this);
          }
        }, isNumeric(delay) ? delay : 0);
      }
    },
    close(delay) {
      this.delayClose(null, delay);
    },
    closeBtnClickHandler(delay) {
      if (isFunction(this.closeHandler)) {
        this.closeHandler(this, this.reject);
      } else {
        this.reject('close');
      }
    },
    showLoading(loadingText) {
      this.$props.loading = true;
      this.$props.loadingText = loadingText;
    },
    closeLoading() {
      this.$props.loading = false;
    },
    cancelBtnClickHandler() {
      this.$emit('on-cancel', this);
      if (isFunction(this.cancelHandler)) {
        this.cancelHandler(this, this.reject);
      } else  {
        this.reject('cancel');
      }
    },
    okBtnClickHandler() {
      if (isFunction(this.okHandler)) {
        this.okHandler(this, this.resolve);
      }
    },
    promise() {
      return new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    },
    resolve(res, delay) {
      const resolve = this._resolve || (() => {});
      this.delayClose(() => { resolve(res) }, delay);
    },
    reject(err, delay, close = true) {
      if (close) {
        const reject = this._reject || (() => {});
        this.delayClose(() => { reject(err) }, delay);
      }
    },
    callCustomizedButtonHandler(handler) {
      if (isFunction(handler)) {
        handler(this, this.resolve, this.reject);
      }
    },
    getCustomizedButtonClass(button) {
      const cls = [
        `vue-h-dialog__button--${button.type || 'default'}`,
        { 'is-disabled': this.loading || this.isOnDelayTicking },
      ];
      if (isArray(button.class)) {
        cls.unshift(...button.class);
      } else {
        cls.unshift(button.class || '');
      }

      return cls;
    },
    moveMouseDownHandler(e) {
      e.currentTarget.focus();
      if (this.computedMoveable && !this.dialogIsMax) {
        this.dialogIsMoving = true;
        this.dialogMovingBCR = deepClone(this.dialogBCR);
        this.dialogMovingPos.x = e.clientX;
        this.dialogMovingPos.y = e.clientY;
      }
    },
    moveMouseUpHandler() {
      if (this.computedMoveable && !this.dialogIsMax && this.dialogIsMoving) {
        this.dialogIsMoving = false;
        if (this.dialogBCR.left !== this.dialogMovingBCR.left
          || this.dialogBCR.top !== this.dialogMovingBCR.top) {
          this.boxMoved = true;
        }
        this.dialogBCR = deepClone(this.dialogMovingBCR);
        this.dialogMovingBCR = null;
      }
    },
    moveMouseMoveHandler(e) {
      if (this.computedMoveable && !this.dialogIsMax && this.dialogIsMoving) {
        this.dialogMovingBCR.left += e.clientX - this.dialogMovingPos.x;
        this.dialogMovingBCR.top += e.clientY - this.dialogMovingPos.y;
        this.dialogMovingPos.x = e.clientX;
        this.dialogMovingPos.y = e.clientY;
      }
    },
    resizeMouseDownHandler(e) {
      e.currentTarget.focus();
      if (this.computedResizeable && !this.dialogIsMax) {
        this.dialogIsResizing = true;
        // NOTE 这里先直接设置类名，否则IE表现异常
        addClass(this.$refs.main, 'vue-h-dialog__main--isresizing');
        this.enableListenMainBoxResize = false;
        const {
          width,
          height,
          left,
          top,
        } = this.renderedDialogBCR;
        this.dialogResizeBCR = {
          ...this.dialogBCR,
          width,
          height,
          left,
          top,
        };
        this.dialogBCR = deepClone(this.dialogResizeBCR);
        this.dialogResizePos.x = e.clientX;
        this.dialogResizePos.y = e.clientY;
      }
    },
    resizeMouseUpHandler() {
      if (this.computedResizeable && !this.dialogIsMax && this.dialogIsResizing) {
        this.dialogIsResizing = false;
        this.mainBoxResizeListenerEnableHanlder();
        if (this.dialogBCR.left !== this.dialogResizeBCR.left
          || this.dialogBCR.top !== this.dialogResizeBCR.top) {
          this.boxResized = true;
        }
        this.dialogBCR = deepClone(this.dialogResizeBCR);
        this.dialogResizeBCR = null;
        this.currentResizeMoveSide = null;
      }
    },
    resizeMouseMoveHandler(e, side) {
      this.resizeBCRSetHandler(e, side);
    },
    resizeBCRSetHandler(e, side) {
      this.currentResizeMoveSide = this.dialogIsResizing ? this.currentResizeMoveSide : side;
      if (this.computedResizeable && !this.dialogIsMax && this.dialogIsResizing) {
        const deltaX = e.clientX - this.dialogResizePos.x;
        const deltaY = e.clientY - this.dialogResizePos.y;
        switch (this.currentResizeMoveSide) {
          case 'left': {
            const limit = this.limitRectValue({
              ...this.dialogResizeBCR,
              width: this.dialogResizeBCR.width - deltaX,
            });
            if (this.dialogResizeBCR.width !== limit.width) {
              this.dialogResizeBCR.left += deltaX;
            }
            this.dialogResizeBCR.width -= deltaX;
            break;
          }
          case 'right': {
            this.dialogResizeBCR.width += deltaX;
            break;
          }
          case 'top': {
            const limit = this.limitRectValue({
              ...this.dialogResizeBCR,
              height: this.dialogResizeBCR.height - deltaY,
            });
            if (this.dialogResizeBCR.height !== limit.height) {
              this.dialogResizeBCR.top += deltaY;
            }
            this.dialogResizeBCR.height -= deltaY;
            break;
          }
          case 'bottom': {
            this.dialogResizeBCR.height += deltaY;
            break;
          }
          case 'top-left': {
            const limit = this.limitRectValue({
              ...this.dialogResizeBCR,
              width: this.dialogResizeBCR.width - deltaX,
              height: this.dialogResizeBCR.height - deltaY,
            });
            if (this.dialogResizeBCR.width !== limit.width) {
              this.dialogResizeBCR.left += deltaX;
            }
            if (this.dialogResizeBCR.height !== limit.height) {
              this.dialogResizeBCR.top += deltaY;
            }
            this.dialogResizeBCR.width -= deltaX;
            this.dialogResizeBCR.height -= deltaY;
            break;
          }
          case 'top-right': {
            const limit = this.limitRectValue({
              ...this.dialogResizeBCR,
              height: this.dialogResizeBCR.height - deltaY,
            });
            if (this.dialogResizeBCR.height !== limit.height) {
              this.dialogResizeBCR.top += deltaY;
            }
            this.dialogResizeBCR.width += deltaX;
            this.dialogResizeBCR.height -= deltaY;
            break;
          }
          case 'bottom-left': {
            const limit = this.limitRectValue({
              ...this.dialogResizeBCR,
              width: this.dialogResizeBCR.width - deltaX,
            });
            if (this.dialogResizeBCR.width !== limit.width) {
              this.dialogResizeBCR.left += deltaX;
            }
            this.dialogResizeBCR.width -= deltaX;
            this.dialogResizeBCR.height += deltaY;
            break;
          }
          case 'bottom-right': {
            this.dialogResizeBCR.width += deltaX;
            this.dialogResizeBCR.height += deltaY;
            break;
          }
          default:
            break;
        }
        this.dialogResizePos.x = e.clientX;
        this.dialogResizePos.y = e.clientY;
        //
        this.dialogBCR = deepClone(this.dialogResizeBCR);
        // this.directlySetStyles();
      }
    },
    directlySetStyles() {
      setStyle(this.$refs.main, this.computedMainStyles);
      setStyle(this.$refs.content, this.computedContentStyles);
    },
  },
};
</script>
