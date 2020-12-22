import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Genres from '@/components/Genres.vue'
import DetailPage from '@/components/DetailPage.vue'
import Categories from '@/components/Categories.vue'
import Random from '@/components/Random.vue'
//import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:movieId',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/genres',
    name: 'Genres',
    component: Genres
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
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
