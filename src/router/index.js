import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Genres from '@/components/Genres.vue'
import detailPage from '@/components/detailPage.vue'
//import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detailPage',
    component: detailPage
  },
  {
    path: '/genres',
    name: 'Genres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Genres
  },
  //{
    //path: '*',
    //name: 'NotFound',
    //component: NotFound
  //}
]

const router = new VueRouter({
  routes,
  mode: 'history' //use to avoid /# on the link
});

export default router
