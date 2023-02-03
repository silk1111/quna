import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home'
import City from '@/pages/City/City'
Vue.use(VueRouter)
 const router = new VueRouter({
    routes: [
        { path: '/', 
        component: Home },
        {
            path: '/city',
            component: City
        }
    ]
});

export default router;