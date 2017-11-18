import Vue from 'vue'
import Router from 'vue-router'
import QuickActions from '@/components/quickactions/QuickActions'
import InputForm from '@/components/timeforms/InputForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: QuickActions
    },
    {
      path: '/add',
      name: 'Input',
      component: InputForm
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
