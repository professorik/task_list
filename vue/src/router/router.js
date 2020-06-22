import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../elements/InputField.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
