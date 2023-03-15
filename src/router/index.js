import Vue from 'vue';
import VueRouter from 'vue-router';
import City from '@/pages/City/City'
import Detail from  '@/pages/Detail/Detail'
Vue.use(VueRouter)
 const router = new VueRouter({
    routes: [
        { path: '/', 
        component: () => import('@/pages/Home/Home.vue')//路由懒加载
         },
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