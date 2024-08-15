import Vue from 'vue'
import VueRouter from 'vue-router'
import TodosView from '../views/TodosView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView
    }
  ]
})

export default router
