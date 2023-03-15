import Vue from 'vue'
import  VueRouter from 'vue-router';
import App from './App.vue'
import router from './router'
import store from'./store'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload';

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload,{
  error: require('@/assets/lazy-load-img/error.png'),
  loading: require('@/assets/lazy-load-img/loading.gif')
});

