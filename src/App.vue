<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 class="art-title">vue-h-dialog</h2>
    <section style="margin-top: 50px">
      <div class="buttons">
        <button @click="lang='zh-cn'" class="button" :class="{ 'button--primary': lang === 'zh-cn' }">zh-cn</button>
        <button @click="lang='en-us'" class="button" :class="{ 'button--primary': lang === 'en-us' }">en-us</button>
      </div>
    </section>
    <p style="padding:20px;">{{ $i18n('支持ie > 9，现代浏览器') }}</p>
    <div style="text-align: left;margin-top: 50px;margin-bottom: 50px;">
      <section class="section-block">
        <h2>{{ $i18n('安装') }}</h2>
        <div v-html="installMd"></div>
      </section>
      <section class="section-block">
        <h2>{{ $i18n('用法') }}</h2>
        <div v-html="usageMd"></div>
      </section>
      <section class="section-block">
        <h2>Props</h2>
        <div class="section-block-content">
          <section>
            <h3 class="title">title</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', $i18n('未命名标题'), '', '']"></doc-table>
            <div class="buttons">
              <button @click="titleDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="titleDialog($i18n('设置了标题'))" class="button button--primary">{{ $i18n('设置了标题') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">titleAlign</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', 'center', 'center|left|right', '']"></doc-table>
            <div class="buttons">
              <button @click="titleAlignDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="titleAlignDialog('left')" class="button button--primary">left</button>
              <button @click="titleAlignDialog('center')" class="button button--primary">center</button>
              <button @click="titleAlignDialog('right')" class="button button--primary">right</button>
            </div>
          </section>
          <section>
            <h3 class="title">html</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|HTMLElement|Function', '', '', $i18n('如果是HTMLElement类型，弹窗默认挂载到此元素的父级元素(如果有)下，指定appendToBody可以使弹窗挂载至body节点下')]"></doc-table>
            <div class="buttons">
              <button @click="htmlDialog1()" class="button button--primary">Demo1</button>
              <button id="travelInDialogs" @click="htmlDialog2()" class="button button--primary">{{ $i18n('在弹窗中旅行') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">components</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Array', '', '', $i18n('挂载VueComponents')]"></doc-table>
            <div v-html="componentsUsageMdDef"></div>
            <div class="buttons">
              <button @click="componentsDialog(1)" class="button button--primary">Demo1</button>
              <button @click="componentsDialog(2)" class="button button--primary">Demo2</button>
              <button @click="componentsDialog(3)" class="button button--primary">Demo3</button>
            </div>
          </section>
          <section>
            <h3 class="title">loading</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', false, '', `${$i18n('显示')}：showLoading(loadingText)；${$i18n('关闭')}：closeLoading();`]"></doc-table>
            <div class="buttons">
              <button @click="loadingDialog(true)" class="button button--primary">true</button>
              <button @click="loadingDialog(false)" class="button button--primary">false</button>
              <button @click="loadingDialog('call')" class="button button--primary">{{ $i18n('调用实例方法') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">loadingText</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', '', '', 'showLoading(loadingText)']"></doc-table>
            <div class="buttons">
              <button @click="loadingTextDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="loadingTextDialog(`${$i18n('加载中')} ···`)" class="button button--primary">{{ `${$i18n('加载中')} ···` }}</button>
              <button @click="loadingTextDialog($i18n('发送至服务器'), true)" class="button button--primary">{{ $i18n('调用实例方法') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">width</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '600px', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="widthDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="widthDialog('200px')" class="button button--primary">200px</button>
              <button @click="widthDialog('60%')" class="button button--primary">60%</button>
            </div>
          </section>
          <section>
            <h3 class="title">minWidth</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '300px', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="minWidthDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="minWidthDialog('800px')" class="button button--primary">800px</button>
              <button @click="minWidthDialog('20%')" class="button button--primary">20%</button>
            </div>
          </section>
          <section>
            <h3 class="title">maxWidth</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '100%', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="maxWidthDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="maxWidthDialog('800px')" class="button button--primary">800px</button>
              <button @click="maxWidthDialog('60%')" class="button button--primary">60%</button>
            </div>
          </section>

          <section>
            <h3 class="title">height</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="heightDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="heightDialog('400px')" class="button button--primary">400px</button>
              <button @click="heightDialog('60%')" class="button button--primary">60%</button>
            </div>
          </section>
          <section>
            <h3 class="title">minHeight</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '200px', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="minHeightDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="minHeightDialog('500px')" class="button button--primary">500px</button>
              <button @click="minHeightDialog('20%')" class="button button--primary">20%</button>
            </div>
          </section>
          <section>
            <h3 class="title">maxHeight</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '100%', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="maxHeightDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="maxHeightDialog('600px')" class="button button--primary">600px</button>
              <button @click="maxHeightDialog('80%')" class="button button--primary">80%</button>
            </div>
          </section>
          <section>
            <h3 class="title">left</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="leftDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="leftDialog('200px')" class="button button--primary">200px</button>
              <button @click="leftDialog('30%')" class="button button--primary">30%</button>
            </div>
          </section>
          <section>
            <h3 class="title">top</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String|Number', '', 'px|%', '']"></doc-table>
            <div class="buttons">
              <button @click="topDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="topDialog('200px')" class="button button--primary">200px</button>
              <button @click="topDialog('30%')" class="button button--primary">30%</button>
            </div>
          </section>
          <section>
            <h3 class="title">zIndex</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Number', '504', '', '']"></doc-table>
            <div class="buttons">
              <button @click="zIndexDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="zIndexDialog('more')" class="button button--primary">{{ $i18n('更多弹窗') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">moveable</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="moveableDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="moveableDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">shadowMove</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', false, '', '']"></doc-table>
            <div class="buttons">
              <button @click="shadowMoveDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="shadowMoveDialog(true)" class="button button--primary">true</button>
            </div>
          </section>
          <section>
            <h3 class="title">dragArea</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Object', { left: 0, top: 0, width: '100%', height: '50px' }, '', $i18n('其实就是.vue-h-dialog__drag-area的样式')]"></doc-table>
            <div class="buttons">
              <button @click="dragAreaDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="dragAreaDialog({ left: 0, top: 0, right: 0, bottom: 0 })" class="button button--primary">{{ $i18n('自定义') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">overEdge</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', false, '', $i18n('弹窗是否可超出可视区域')]"></doc-table>
            <div class="buttons">
              <button @click="overEdgeDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="overEdgeDialog(true)" class="button button--primary">true</button>
            </div>
          </section>
          <section>
            <h3 class="title">showMax</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showMaxDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showMaxDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">showClose</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showCloseDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showCloseDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">showOkBtn</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showOkBtnDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showOkBtnDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">showCancelBtn</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showCancelBtnDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showCancelBtnDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">showHeader</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showHeaderDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showHeaderDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">showFooter</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', true, '', '']"></doc-table>
            <div class="buttons">
              <button @click="showFooterDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="showFooterDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">cancelBtnText</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', $i18n('取消'), '', '']"></doc-table>
            <div class="buttons">
              <button @click="cancelBtnTextDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="cancelBtnTextDialog($i18n('自定义'))" class="button button--primary">{{ $i18n('自定义') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">okBtnText</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', $i18n('确定'), '', '']"></doc-table>
            <div class="buttons">
              <button @click="okBtnTextDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="okBtnTextDialog($i18n('自定义'))" class="button button--primary">{{ $i18n('自定义') }}</button>
            </div>
          </section>
          <section>
            <h3 class="title">buttons</h3>
            <p style="margin-bottom:15px;">{{ $i18n('自定义按钮') }}</p>
            <doc-table :header="computedDefaultDocHeader" :data="['Array', '', '', '']"></doc-table>
            <div class="buttons">
              <button @click="buttonsDialog()" class="button button--primary">Demo</button>
            </div>
          </section>
          <section>
            <h3 class="title">isMax</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', false, '', $i18n('初始为最大化')]"></doc-table>
            <div class="buttons">
              <button @click="isMaxDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="isMaxDialog(true)" class="button button--primary">true</button>
            </div>
          </section>
          <section>
            <h3 class="title">closeHandler</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['(ins: VueComponent, reject: (err: any, delay: number, close: boolean = true) => any) => any', '', '', '']"></doc-table>
            <div class="buttons">
              <button @click="closeHandlerDialog(1)" class="button button--primary">Demo1</button>
              <button @click="closeHandlerDialog(2)" class="button button--primary">Demo2</button>
              <button @click="closeHandlerDialog(3)" class="button button--primary">Demo3</button>
              <button @click="closeHandlerDialog(4)" class="button button--primary">Demo4</button>
              <button @click="closeHandlerDialog(5)" class="button button--primary">Demo5</button>
            </div>
          </section>
          <section>
            <h3 class="title">cancelHandler</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['(ins: VueComponent, reject: (err: any, delay: number, close: boolean = true) => any) => any', '', '', '']"></doc-table>
            <div class="buttons">
              <button @click="cancelHandlerDialog(1)" class="button button--primary">Demo1</button>
              <button @click="cancelHandlerDialog(2)" class="button button--primary">Demo2</button>
              <button @click="cancelHandlerDialog(3)" class="button button--primary">Demo3</button>
              <button @click="cancelHandlerDialog(4)" class="button button--primary">Demo4</button>
              <button @click="cancelHandlerDialog(5)" class="button button--primary">Demo5</button>
            </div>
          </section>
          <section>
            <h3 class="title">okHandler</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['(ins: VueComponent, resolve: (res: any, delay: number) => any) => any', '', '', '']"></doc-table>
            <div class="buttons">
              <button @click="okHandlerDialog(1)" class="button button--primary">Demo1</button>
              <button @click="okHandlerDialog(2)" class="button button--primary">Demo2</button>
              <button @click="okHandlerDialog(3)" class="button button--primary">Demo3</button>
              <button @click="okHandlerDialog(4)" class="button button--primary">Demo4</button>
            </div>
          </section>
          <section>
            <h3 class="title">scrollHandler</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['(event: Event, ins: VueComponent) => any', '', '', '']"></doc-table>
            <div class="buttons">
              <button @click="scrollHandlerDialog()" class="button button--primary">Demo</button>
            </div>
          </section>
          <section>
            <h3 class="title">disableBodyScroll</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean', 'true', '', '']"></doc-table>
            <div class="buttons">
              <button @click="disableBodyScrollDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="disableBodyScrollDialog(false)" class="button button--primary">false</button>
            </div>
          </section>
          <section>
            <h3 class="title">closeDelay</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Number', 0, '', '']"></doc-table>
            <div class="buttons">
              <button @click="closeDelayDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="closeDelayDialog(2000)" class="button button--primary">{{ $i18n('延时') }}2s</button>
            </div>
          </section>
          <section>
            <h3 class="title">resize</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['Boolean|String[]', true, 'top, right, bottom, left, top-left, top-right, bottom-left, bottom-right', '']"></doc-table>
            <div class="buttons">
              <button @click="resizeDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="resizeDialog(false)" class="button button--primary">false</button>
              <button @click="resizeDialog(['right', 'bottom-right', 'bottom'])" class="button button--primary">right,bottom-right,bottom</button>
            </div>
          </section>
          <section>
            <h3 class="title">lang</h3>
            <doc-table :header="computedDefaultDocHeader" :data="['String', true, 'zh-cn,en-us', '']"></doc-table>
            <div class="buttons">
              <button @click="langDialog()" class="button button--primary">{{ $i18n('默认') }}</button>
              <button @click="langDialog('en-us')" class="button button--primary">en-us</button>
            </div>
            <ul>
              <li>
                <div v-html="langMd1"></div>
              </li>
            </ul>
          </section>
          <section>
            <h3 class="title">cache</h3>
            <div class="alert-box">
              <h4>{{ $i18n('这个特性只限制使用函数调用') }}</h4>
              <h4>{{ $i18n(`使用缓存特性需要同时传入pId, cache, context字段`) }}</h4>
              <ul>
                <li>pId: String|Number. {{ $i18n('缓存唯一标识id') }}</li>
                <li>cache: Boolean</li>
                <li>context: Object</li>
              </ul>
              <h4>{{ $i18n('为什么需要context') }}</h4>
              <ul>
                <li>{{ $i18n('这是因为在单页面路由情况下，路由切换后再回到先前的路由，宿主上下文环境已经发生了变化，所以我们需要在beforeDestroy钩子函数中销毁缓存。') }}</li>
              </ul>
            </div>
            <div class="buttons" style="margin-top: 20px;">
              <button @click="cacheDialog()" class="button button--primary">Demo</button>
            </div>
            <ul>
              <li>
                <h4>noCacheCompromise</h4>
                <doc-table :header="computedDefaultDocHeader" :data="['Boolean', false, '', '']"></doc-table>
                <p>{{ $i18n('默认会每次更新okHandler, cancelHandler, closeHandler, scrollHandler') }}</p>
              </li>
              <li>
                <h4>{{ $i18n('清除缓存') }}</h4>
                <div v-html="cacheMd1"></div>
              </li>
            </ul>
          </section>
          <section>
            <h3 class="title">listeners</h3>
            <div class="alert-box">
              <p>{{ $i18n('这个特性只限制使用函数调用') }}</p>
            </div>
            <div class="buttons" style="margin-top: 20px;">
              <button @click="listenersDialog()" class="button button--primary">Demo</button>
            </div>
          </section>
          <section>
            <h3 class="title">slots</h3>
            <div class="alert-box">
              <p>{{ $i18n('这个特性只限制使用函数调用') }}</p>
            </div>
            <div class="buttons" style="margin-top: 20px;">
              <button @click="slotsDialog()" class="button button--primary">Demo</button>
            </div>
          </section>
        </div>
      </section>
      <section class="section-block">
        <h2>{{ $i18n('事件') }}</h2>
        <div class="section-block-content">
          <ul>
            <li>
              <h3>on-open</h3>
              <h4>{{ $i18n('接收参数') }}: {{ $i18n('当前弹窗实例') }}</h4>
            </li>
            <li>
              <h3>on-close</h3>
              <h4>{{ $i18n('接收参数') }}: {{ $i18n('当前弹窗实例') }}</h4>
            </li>
            <li>
              <h3>on-cancel</h3>
              <h4>{{ $i18n('接收参数') }}: {{ $i18n('当前弹窗实例') }}</h4>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-block">
        <h2>Slots</h2>
        <div class="section-block-content">
          <ul>
            <li>
              <h3>default</h3>
            </li>
            <li>
              <h3>title</h3>
            </li>
            <li>
              <h3>footer</h3>
              <p>{{ $i18n('底部按钮') }}</p>
            </li>
            <li>
              <h3>cover</h3>
              <vue-dialog v-model="coverSlotDialogVisible" :lang="lang" min-height="400">
                <div slot="cover" style="position: absolute;background-color: blue;color:#fff;padding:20px;left:0;top:0;width: 200px;height:100%;z-index:9;box-sizing:border-box;">
                  position: absolute;background-color: blue;color:#fff;padding:20px;left:0;top:0;width: 200px;height:100%;z-index:9;box-sizing:border-box;
                </div>
              </vue-dialog>
              <button @click="coverSlotDialogVisible = true" class="button button--primary">Demo</button>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-block">
        <h2>{{ $i18n('方法') }}</h2>
        <div class="section-block-content">
          <ul>
            <li>
              <h3>close(delay)</h3>
              <ul>
                <li>delay?: Number</li>
              </ul>
            </li>
            <li>
              <h3>showLoading(loadingText)</h3>
              <ul>
                <li>loadingText?: String</li>
              </ul>
            </li>
            <li>
              <h3>closeLoading()</h3>
            </li>
            <li>
              <h3>promise()</h3>
              <p>{{ $i18n('返回Promise链') }}</p>
            </li>
            <li>
              <h3>resolve(res, delay)</h3>
              <ul>
                <li>res?: any</li>
                <li>delay?: Number</li>
              </ul>
            </li>
            <li>
              <h3>reject(err, delay, close = true)</h3>
              <ul>
                <li>err?: any</li>
                <li>delay?: Number</li>
                <li>close?: Boolean = true. {{  $i18n('是否关闭弹窗')}}</li>
              </ul>
            </li>
            <li>
              <h3>getComponents()</h3>
              <p>{{ $i18n('获取注入的VueComponent列表') }}</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-block">
        <h2>{{ $i18n('静态方法') }}</h2>
        <div class="section-block-content">
          <ul>
            <li>
              <h3>clearCache(pId)</h3>
              <ul>
                <li>pId?: String|Number</li>
                <li><div v-html="cacheMd1"></div></li>
              </ul>
            </li>
            <li>
              <h3>close(...gIds)</h3>
              <ul>
                <li>gIds: ...String</li>
                <div v-html="closeMd1"></div>
              </ul>
              <div class="buttons">
                <button @click="staticCloseDialog" class="button button--primary">Demo1</button>
                <button @click="staticCloseDialogAll" class="button button--primary">Demo2</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueDialog from '@/package';
import DocTable from '@/components/DocTable';
import { transpileMarkdown } from './marked';

Vue.use(VueDialog);

export default {
  name: 'App',
  components: {
    DocTable,
  },
  data() {
    return {
      lang: 'en-us',
      visible: false,
      installMd: '',
      usageMd: '',
      componentsUsageMdDef: '',
      cacheMd1: '',
      langMd1: '',
      closeMd1: '',
      //
      coverSlotDialogVisible: false,
    };
  },
  computed: {
    computedDefaultDocHeader() {
      return [
        this.$i18n('类型'),
        this.$i18n('默认值'),
        this.$i18n('可选值'),
        this.$i18n('备注'),
      ];
    },
  },
  watch: {
    lang(val) {
      sessionStorage.setItem('lang', val);
      this.loadMds();
    },
  },
  created() {
    sessionStorage.setItem('lang', this.lang);
    this.loadMds();
  },
  methods: {
    loadMds() {
      Promise.all([
        import('../docs/usage/install.md'),
        import('../docs/usage/1.md'),
        import('../docs/components/def.md'),
        import('../docs/cache/1.md'),
        import('../docs/lang/1.md'),
        import('../docs/close/1.md'),
      ]).then((modules) => {
        const keys = [
          'installMd',
          'usageMd',
          'componentsUsageMdDef',
          'cacheMd1',
          'langMd1',
          'closeMd1',
        ];
        modules.forEach((m, idx) => {
          this[keys[idx]] = transpileMarkdown(m.default);
        });
      });
    },
    titleDialog(arg) {
      this.$hDialog({
        title: arg,
        lang: this.lang,
      });
    },
    titleAlignDialog(arg) {
      this.$hDialog({
        titleAlign: arg,
        lang: this.lang,
      });
    },
    htmlDialog1() {
      import('../docs/html/1.md').then((m) => {
        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px">${transpileMarkdown(m.default)}<br><h3>Wub lubb dub dub</h3></div>`,
        });
      });
    },
    htmlDialog2() {
      this.$hDialog({
        appendToBody: true,
        left: Math.floor(Math.random() * 600),
        top: Math.floor(Math.random() * 500),
        html: document.querySelector('#travelInDialogs'),
        components: [
          {
            component() {
              return import('@/components//HtmlField');
            },
          },
        ],
        lang: this.lang,
      });
    },
    componentsDialog(type) {
      switch (type) {
        case 1: {
          import('../docs/components/1.md').then((m) => {
            this.$hDialog({
              lang: this.lang,
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              components: [
                {
                  component() {
                    return import('@/components/HelloWorld');
                  },
                  propsData: {
                    msg: 'This is the way',
                  },
                  listeners: {
                    ['a no sense event']() {
                      alert('a nosense event has triggerd');
                    },
                  },
                },
              ],
            });
          });
          break;
        }
        case 2: {
          import('../docs/components/2.md').then((m) => {
            this.$hDialog({
              lang: this.lang,
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              components: [
                {
                  template: '<div style="padding:30px;background-color:skyblue;"><component-0 v-bind="propsData[0]" v-on="listeners[0]"></component-0></div>',
                  component() {
                    return import('@/components/HelloWorld');
                  },
                  propsData: {
                    msg: 'I have spoken',
                  },
                  listeners: {
                    ['a no sense event']() {
                      alert('a nosense event has triggerd');
                    },
                  },
                },
              ],
            });
          });
          break;
        }
        case 3: {
          import('../docs/components/3.md').then((m) => {
            this.$hDialog({
              lang: this.lang,
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              components: [
                {
                  template: '<div style="padding:30px;background-color:skyblue;"><component-0 v-bind="propsData[0]" v-on="listeners[0]"></component-0></div>',
                  component() {
                    return import('@/components/HelloWorld');
                  },
                  propsData: {
                    msg: "I'm Mr.Meeseeks! Look at me!",
                  },
                  listeners: {
                    ['a no sense event']() {
                      alert('a nosense event has triggerd');
                    },
                  },
                },
              ],
              okHandler(ins) {
                // {{ i1n8('getComponents()方法会返回注入的VueComponents实例列表') }}
                const vc = ins.getComponents()[0];
                alert(vc.msg);
              },
            });
          });
          break;
        }
        default:
          break;
      }
    },
    loadingDialog(arg) {
      if (arg === 'call') {
        import('../docs/loading/1.md').then((m) => {
          this.$hDialog({
            html: `<div style="text-align:center;padding:20px;">
              <p class="tip">${this.$i18n('点击确定按钮')}</p>
                ${transpileMarkdown(m.default)}
              </div>`,
            lang: this.lang,
            okHandler(ins) {
              ins.showLoading();
              setTimeout(() => {
                ins.closeLoading();
              }, 3e3);
            },
          });
        });
      } else {
        this.$hDialog({
          loading: arg,
          lang: this.lang,
        });
      }
    },
    loadingTextDialog(arg, call) {
      if (call) {
        import('../docs/loading/2.md').then((m) => {
          this.$hDialog({
            html: `<div style="text-align:center;padding:20px;">
              <p class="tip">${this.$i18n('点击确定按钮')}</p>
                ${transpileMarkdown(m.default)}
              </div>`,
            lang: this.lang,
            okHandler(ins) {
              ins.showLoading(arg);
              setTimeout(() => {
                ins.closeLoading();
              }, 3e3);
            },
          });
        });
      } else {
        this.$hDialog({
          loading: true,
          minHeight: '300px',
          loadingText: arg,
          lang: this.lang,
        });
      }
    },
    widthDialog(arg) {
      this.$hDialog({
        width: arg,
        lang: this.lang,
      });
    },
    minWidthDialog(arg) {
      this.$hDialog({
        minWidth: arg,
        minHeight: '400px',
        lang: this.lang,
        components: [
          {
            component() {
              return import('./components/ResizeTip');
            },
            propsData: {
              sides: ['left', 'right'],
            },
          },
        ],
      });
    },
    maxWidthDialog(arg) {
      this.$hDialog({
        maxWidth: arg,
        minHeight: '400px',
        lang: this.lang,
        components: [
          {
            component() {
              return import('./components/ResizeTip');
            },
            propsData: {
              sides: ['left', 'right'],
            },
          },
        ],
      });
    },
    heightDialog(arg) {
      this.$hDialog({
        height: arg,
        lang: this.lang,
      });
    },
    minHeightDialog(arg) {
      this.$hDialog({
        minHeight: arg,
        lang: this.lang,
        components: [
          {
            component() {
              return import('./components/ResizeTip');
            },
            propsData: {
              sides: ['top', 'bottom'],
            },
          },
        ],
      });
    },
    maxHeightDialog(arg) {
      this.$hDialog({
        maxHeight: arg,
        lang: this.lang,
        components: [
          {
            component() {
              return import('./components/ResizeTip');
            },
            propsData: {
              sides: ['top', 'bottom'],
            },
          },
        ],
      });
    },
    leftDialog(arg) {
      this.$hDialog({
        left: arg,
        lang: this.lang,
      });
    },
    topDialog(arg) {
      this.$hDialog({
        top: arg,
        lang: this.lang,
      });
    },
    zIndexDialog(arg) {
      if (arg === 'more') {
        this.$hDialog({
          html: '<div class="tip">zIndex: 504</div>',
          zIndex: 504,
          lang: this.lang,
          okBtnText: 'zIndex: 505',
          cancelBtnText: 'zIndex: 503',
          okHandler: () => {
            this.$hDialog({
              html: '<div class="tip">zIndex: 505</div>',
              zIndex: 505,
            });
          },
          cancelHandler: () => {
            this.$hDialog({
              html: '<div class="tip">zIndex: 503</div>',
              left: '20px',
              zIndex: 503,
            });
          },
        });
      } else {
        this.$hDialog({
          html: '<div class="tip">zIndex: 504</div>',
          zIndex: 504,
          lang: this.lang,
        });
      }
    },
    moveableDialog(arg) {
      this.$hDialog({
        html: `<div class="tip" style="text-align:center">${this.$i18n('拖曳头部区域')}</div>`,
        moveable: arg,
      });
    },
    shadowMoveDialog(arg) {
      this.$hDialog({
        html: `<div class="tip" style="text-align:center">${this.$i18n('拖曳头部区域')}</div>`,
        shadowMove: arg,
      });
    },
    dragAreaDialog(arg) {
      if (arg) {
        import('../docs/dragArea/1.md').then((m) => {
          this.$hDialog({
            lang: this.lang,
            html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
            dragArea: arg,
          });
        });
      } else {
        this.$hDialog({
          lang: this.lang,
          html: `<div class="tip" style="text-align:center">${this.$i18n('拖曳头部区域')}</div>`,
          dragArea: arg,
        });
      }
    },
    overEdgeDialog(arg) {
      this.$hDialog({
        left: '-150px',
        overEdge: arg,
        lang: this.lang,
      });
    },
    showMaxDialog(arg) {
      this.$hDialog({
        showMax: arg,
        lang: this.lang,
      });
    },
    showCloseDialog(arg) {
      this.$hDialog({
        showClose: arg,
        lang: this.lang,
      });
    },
    showOkBtnDialog(arg) {
      this.$hDialog({
        showOkBtn: arg,
        lang: this.lang,
      });
    },
    showCancelBtnDialog(arg) {
      this.$hDialog({
        showCancelBtn: arg,
        lang: this.lang,
      });
    },
    showHeaderDialog(arg) {
      this.$hDialog({
        showHeader: arg,
        lang: this.lang,
      });
    },
    showFooterDialog(arg) {
      this.$hDialog({
        showFooter: arg,
        lang: this.lang,
      });
    },
    cancelBtnTextDialog(arg) {
      this.$hDialog({
        cancelBtnText: arg,
        lang: this.lang,
      });
    },
    okBtnTextDialog(arg) {
      this.$hDialog({
        okBtnText: arg,
        lang: this.lang,
      });
    },
    buttonsDialog() {
      import('../docs/buttons/1.md').then((m) => {
        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
          buttons: [
            {
              text: 'Button1',
              type: 'default',
              class: 'button1',
              style: '',
              handler(ins, resolve, reject) {
                alert('button1');
                resolve();
              },
            },
            {
              text: 'Button2',
              type: 'primary',
              class: { button2: true },
              style: '',
              handler(ins, resolve, reject) {
                alert('button2');
                resolve();
              },
            },
            {
              text: 'Button3',
              type: 'warning',
              class: [{ button3: true }],
              style: '',
              handler(ins, resolve, reject) {
                alert('button3');
                resolve('button3', 2000);
              },
            },
            {
              text: 'Button4',
              type: 'danger',
              class: ['button4'],
              style: '',
              handler(ins, resolve, reject) {
                alert('button4');
                reject('button4', 2000);
              },
            },
            {
              text: 'Button5',
              type: 'success',
              class: 'button5',
              style: '',
              handler(ins, resolve, reject) {
                alert('button5');
                resolve('button5', 2000);
              },
            },
            {
              text: 'Button6',
              type: 'info',
              class: 'button6',
              style: '',
              handler(ins, resolve, reject) {
                alert('button6');
                reject('button6', 2000);
              },
            },
          ],
        });
      });
    },
    isMaxDialog(arg) {
      this.$hDialog({
        isMax: arg,
        lang: this.lang,
      });
    },
    closeHandlerDialog(type) {
      switch (type) {
        case 1: {
          import('../docs/closeHandler/1.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              closeHandler(ins, reject) {

              },
            });
          });
          break;
        }
        case 2: {
          import('../docs/closeHandler/2.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              closeHandler(ins, reject) {
                reject('will close dialog');
              },
            });
          });
          break;
        }
        case 3: {
          import('../docs/closeHandler/3.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              closeHandler(ins, reject) {
                reject('delay 3000ms close dialog', 3000);
              },
            });
          });
          break;
        }
        case 4: {
          import('../docs/closeHandler/4.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              closeHandler(ins, reject) {
                reject('will not close dialog', 3000, false);
              },
            });
          });
          break;
        }
        case 5: {
          import('../docs/closeHandler/5.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              closeHandler(ins, reject) {
                reject('Close with Promise', 2000);
              },
            }).promise().then((res) => alert(res)).catch((err) => alert(err));
          });
          break;
        }
        default:
          break;
      }
    },
    cancelHandlerDialog(type) {
      switch (type) {
        case 1: {
          import('../docs/cancelHandler/1.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              cancelHandler(ins, reject) {

              },
            });
          });
          break;
        }
        case 2: {
          import('../docs/cancelHandler/2.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              cancelHandler(ins, reject) {
                reject('will close dialog');
              },
            });
          });
          break;
        }
        case 3: {
          import('../docs/cancelHandler/3.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              cancelHandler(ins, reject) {
                reject('delay 3000ms close dialog', 3000);
              },
            });
          });
          break;
        }
        case 4: {
          import('../docs/cancelHandler/4.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              cancelHandler(ins, reject) {
                reject('will not close dialog', 3000, false);
              },
            });
          });
          break;
        }
        case 5: {
          import('../docs/cancelHandler/5.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              cancelHandler(ins, reject) {
                reject('Canceled with Promise', 2000);
              },
            }).promise().then((res) => alert(res)).catch((err) => alert(err));
          });
          break;
        }
        default:
          break;
      }
    },
    okHandlerDialog(type) {
      switch (type) {
        case 1: {
          import('../docs/okHandler/1.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              okHandler(ins, resolve) {

              },
            });
          });
          break;
        }
        case 2: {
          import('../docs/okHandler/2.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              okHandler(ins, resolve) {
                resolve('will close dialog');
              },
            });
          });
          break;
        }
        case 3: {
          import('../docs/okHandler/3.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              okHandler(ins, resolve) {
                resolve('delay 3000ms close dialog', 3000);
              },
            });
          });
          break;
        }
        case 4: {
          import('../docs/okHandler/4.md').then((m) => {
            this.$hDialog({
              html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
              lang: this.lang,
              okHandler(ins, resolve) {
                resolve('Resolved with Promise', 2000);
              },
            }).promise().then((res) => alert(`[Resolved]:${res}`)).catch((err) => alert(err));
          });
          break;
        }
        default:
          break;
      }
    },
    scrollHandlerDialog() {
      this.$hDialog({
        lang: this.lang,
        height: '600px',
        html: `<div style="text-align:center;padding:20px;"><div style="height:1000px"><span class="scrolltop" style="position: absolute;top: 50px;left:50%;transform:translateX(-50%);white-space:nowrap;">type: 0; scrollTop: 0</span></div></div>`,
        scrollHandler(e, ins) {
          const ele = ins.$refs.htmlBox.querySelector('.scrolltop');
          ele.textContent = `type: ${e.type}; scrollTop: ${e.currentTarget.scrollTop}`;
        },
      });
    },
    disableBodyScrollDialog(arg) {
      this.$hDialog({
        lang: this.lang,
        disableBodyScroll: arg,
      });
    },
    closeDelayDialog(arg) {
      this.$hDialog({
        lang: this.lang,
        closeDelay: arg,
      });
    },
    resizeDialog(arg) {
      this.$hDialog({
        lang: this.lang,
        minHeight: '60%',
        resize: arg,
        components: [
          {
            component() {
              return import('./components/ResizeTip');
            },
            propsData: {
              sides: arg === false ? [] : arg,
            },
          },
        ],
      });
    },
    langDialog(arg) {
      this.$hDialog({
        lang: arg,
      });
    },
    cacheDialog() {
      this.$hDialog({
        pId: 504,
        context: this,
        cache: true,
        lang: this.lang,
        components: [
          {
            template: '<div style="padding:30px;background-color:skyblue;"><component-0 v-bind="propsData[0]" v-on="listeners[0]"></component-0></div>',
            component() {
              return import('@/components/HelloWorld');
            },
            propsData: {
              msg: 'Test cache feature',
            },
            listeners: {
              ['a no sense event']() {
                alert(Vue.prototype.$i18n('再次打开弹窗，这条消息将不会出现，因为HelloWorld组件被缓存了'));
              },
            },
          },
        ],
      });
    },
    listenersDialog() {
      import('../docs/listeners/1.md').then((m) => {
        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
          listeners: {
            ['on-open']() { alert('on-open') },
            ['on-close']() { alert('on-close') },
            ['on-cancel']() { alert('on-cancel') },
          },
        });
      });
    },
    slotsDialog() {
      import('../docs/slots/1.md').then((m) => {
        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
          slots: {
            // vnodes
            title: [this.$createElement('span', 'title')],
            default: [this.$createElement('p', 'content')],
            footer: [this.$createElement('button', {
              on: {
                click() { alert(); },
              },
            }, this.$i18n('点击我'))],
          },
        });
      });
    },
    staticCloseDialog() {
      const gId = this.$hDialog({
        lang: this.lang,
        left: 10,
        top: 10,
      }).gId;

      import('../docs/close/2.md').then((m) => {
        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
          okHandler: () => {
            this.$hDialog.close(gId);
          },
        });
      });
    },
    staticCloseDialogAll() {
      import('../docs/close/3.md').then((m) => {
        for (let i = 0; i < 10; i += 1) {
          this.$hDialog({
            lang: this.lang,
            left: Math.floor(Math.random() * 500),
            top: Math.floor(Math.random() * 500),
          });
        }

        this.$hDialog({
          lang: this.lang,
          html: `<div style="text-align:center;padding:20px;">${transpileMarkdown(m.default)}</div>`,
          okHandler: () => {
          this.$hDialog.close
            .apply(
              null,
              [...document.querySelectorAll('[data-vhd-gid]')]
                .map((el) => el.dataset.vhdGid),
            );
          },
        });
      });
    },
  },
};
</script>

<style lang="less">
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.5;
}
body {
  margin: 0;
  padding: 0;
}
code[class*=language-], code[class*=hljs], pre[class*=language-], pre[class*=hljs] {
    color: #ccc;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    font-size: 14px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.4;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}
pre[class*=language-], pre[class*=hljs] {
  padding: 1em;
  margin: 0.8em 0;
  border-radius: 5px;
}
p {
  line-height: 1.5;
  margin: 0;
}
.tip {
  font-size: 14px;
  line-height: 1.5;
  color: #66b1ff;
  padding: 5px 15px;
}
.alert-box {
  background-color: #e6a23c;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
}
.section-block-content {
  padding-left: 20px;
}
.padding-20px {
  padding: 20px;
}
#app {
  text-align: center;
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
}
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dedede;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  z-index: 9;
  &+.button {
    margin-left: 10px;
  }
  &:active {
    outline: none;
    appearance: none;
  }
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-disabled, &.is-disabled:focus, &.is-disabled:active, &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #eaeaea;
  }
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:active, &:hover {
      color: #fff;
      background-color: #66b1ff;
      border-color: #66b1ff;
    }
    &.is-disabled, &.is-disabled:focus, &.is-disabled:active, &.is-disabled:hover {
      color: #fff;
      cursor: not-allowed;
      background-image: none;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
}
</style>
