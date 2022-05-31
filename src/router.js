import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/privacy',
      component: () => import('./views/Privacy.vue')
    },
    {
      path: '/terms',
      component: () => import('./views/Terms.vue')
    },
  ]
});

Vue.router = router;
export default router;