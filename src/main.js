import Vue from 'vue'
import App from './App.vue'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 // eslint-disable-next-line
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAwesomeSwiper)

