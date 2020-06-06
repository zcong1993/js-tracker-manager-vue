import Vue from 'vue';
import VueRouter from 'vue-router';
import { createDurationTracker } from '@zcong/js-tracker-manager';
import Home from '../views/Home.vue';
import tm from '../tracker';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  tm.endAllDurationTrackers();
  tm.setCurrentScreen(to.name || to.path);
  const dt = createDurationTracker({
    eventId: `view-duration-${to.path}`,
    eventName: 'viewPage',
    type: 'start',
  });
  tm.addDurationTracker(dt);
  next();
});

export default router;
