import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: LandingView
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: () => import('../views/ChallengeView.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/LeaderboardView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
})

export default router
