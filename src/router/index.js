import Vue from 'vue'
import Router from 'vue-router'
import QuickActions from '@/components/quickactions/QuickActions'
import InputBody from '@/components/timeforms/InputBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: QuickActions
    },
    {
      path: '/list',
      name: 'List',
      component: InputBody
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
