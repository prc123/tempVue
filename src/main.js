// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import 'src/stylus/index.styl'
import axios from 'axios'


Vue.use(VueLazyload)
Vue.use(ViewUI);
// Vue.use()
import store from './store'
/* eslint-disable no-new */


axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.common['token'] = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  })

new Vue({
  el: '#app',
	store,
  router,
  
  // template: '<App/>',
  render: h => h(App)
})
