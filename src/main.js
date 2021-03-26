// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import 'src/stylus/index.styl'

Vue.use(VueLazyload)
Vue.use(ViewUI);
// Vue.use()
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
	store,
  router,
  
  // template: '<App/>',
  render: h => h(App)
})
