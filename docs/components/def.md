```js
components: {
  type: Array,
  default() {
    return [
      /*
      {
        // {{ i18n('模板字符串，可选') }}
        // {{ i18n('当指定了template时，绑定数据和事件应该这样使用') }}: v-bind="propsData[index]" v-on="listeners[index]"
        // {{ i18n('组键名没有指定时使用component-index作为组键名') }}:<component-0 v-bind="propsData[0]"></component-0>
        template: '<el-button v-bind="propsData[0]"></el-button>',
        // {{ i18n('组件名，可选') }}
        name: 'ElButton',
        // {{ i18n('组件对象，必需。可使用诸如import("xxx")返回一个promise对象') }}
        component: Vue.component('ElButton'),
        // component() {
        //   return import ('xxxx');
        // },
        propsData: {},
        listeners: {},
      },
        */
    ];
  },
},
```