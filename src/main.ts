import * as Vue from 'vue';
import VueRouter from 'vue-router';
import {MainPage} from './pages/MainPage/MainPage.page';
import {DescriptionPage} from './pages/DescriptionPage/DescriptionPage.page';
import {TasksPage} from './pages/TasksPage/TasksPage.page';
import {ErrorPage} from './pages/ErrorPage/ErrorPage.page';

import './static/styles/fonts.scss';

Vue.use(VueRouter);

const routes: Array<any> = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/main',
    component: DescriptionPage
  },
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '*',
    component: ErrorPage
  }
];

new Vue({
  el: '#app',
  router: new VueRouter({
    routes,
    mode: 'history'
  })
});
