import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import second from './components/second.vue'

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: second
        }
    ]
})