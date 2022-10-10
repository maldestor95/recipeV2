import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import ScorePage from '@/pages/score-page.vue'
import RecipePage from '@/pages/recipe-page.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/score',
    component: ScorePage,
    meta: {
      title: 'score',
    },
  },
  {
    path: '/recettes',
    component: RecipePage,
    meta: {
      title: 'recettes',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
