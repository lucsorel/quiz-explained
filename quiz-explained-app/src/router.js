import { createWebHistory, createRouter } from 'vue-router'

import Admin from './components/Admin.vue'
import Invite from './components/Invite.vue'
import Quiz from './components/Quiz.vue'

const routes = [
  { path: '/admin', component: Admin },
  { path: '/invite/:id', name: 'invite', component: Invite },
  { path: '/quiz/:id', name: 'quiz', component: Quiz },
  { path: '/', name: 'home', redirect: {name: 'invite', params: {id: 'abcd'}} },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
