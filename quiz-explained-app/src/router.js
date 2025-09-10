import { createWebHistory, createRouter } from 'vue-router'

import Admin from './components/Admin.vue'
import Invite from './components/Invite.vue'
import QuizJoin from './components/QuizJoin.vue'
import QuizPlay from './components/QuizPlay.vue'

const routes = [
  { path: '/admin', component: Admin },
  { path: '/invite/:quizId', name: 'invite', component: Invite },
  { path: '/quiz/:quizId/join', name: 'quiz', component: QuizJoin },
  { path: '/quiz/:quizId/play/:playerId', name: 'quiz', component: QuizPlay },
  { path: '/', name: 'home', redirect: {name: 'invite', params: {id: 'abcd'}} },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
