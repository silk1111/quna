import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
 const router = new VueRouter({
    routes: [
        { path: '/', 
        component: () => import('@/pages/Home/Home.vue')//路由懒加载
         },
        {
            path: '/city',
            component:  () => import('@/pages/City/City')
        },
        {
            path:'/detail/:id',
            component:() => import('@/pages/Detail/Detail')
        }
    ]
});

export default router;