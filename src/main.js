import Vue from 'vue';
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App.vue';
import router from './router.js';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource)
Vue.use(Vuex)

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
