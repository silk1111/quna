import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home'
import City from '@/pages/City/City'
import Detail from  '@/pages/Detail/Detail'
Vue.use(VueRouter)
 const router = new VueRouter({
    routes: [
        { path: '/', 
        component: Home },
        {
            path: '/city',
            component: City
        },
        {
            path:'/detail/:id',
            component:Detail
        }
    ]
});

export default router;