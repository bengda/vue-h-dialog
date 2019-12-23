import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.prototype.$i18n = function prefixedI18n(word) {
  return i18n(word, sessionStorage.getItem('lang'));
};

new Vue({
  render: h => h(App),
}).$mount('#app');
