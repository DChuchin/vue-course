import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '/users',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
