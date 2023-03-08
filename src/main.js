import Vue from 'vue'
import  VueRouter from 'vue-router';
import App from './App.vue'
import router from './router'
import store from'./store'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 // eslint-disable-next-line
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

Vue.use(VueAwesomeSwiper)

