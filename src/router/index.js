import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article1 from '@/components/Article1'
import Article2 from '@/components/Article2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/article1',
      name: 'article1',
      component: Article1
    },
    {
      path: '/article2',
      name: 'article2',
      component: Article2
    }
  ]
})
