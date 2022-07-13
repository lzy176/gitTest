import { createRouter, createWebHistory, RouterOptions } from "vue-router";


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../pages/page0.vue') },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/page2', component: () => import('../pages/page2.vue') },
  ], // short for `routes: routes`
  asd:'123'
})