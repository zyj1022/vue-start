import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/pages/Hello'
import Home from '@/pages/home'
import About from '@/pages/about'
import Case from '@/pages/case'
import Contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
