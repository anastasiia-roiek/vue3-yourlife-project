import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ArticleView from '../views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
