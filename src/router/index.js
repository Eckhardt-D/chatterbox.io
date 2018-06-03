import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/dashboard',
    	name: 'Dashboard',
    	component: Dashboard
    }
  ]
})
