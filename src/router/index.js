import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Genres from '@/components/Genres.vue'
import DetailPage from '@/components/DetailPage.vue'
//import Categories from '@/components/Categories.vue'
import Random from '@/components/Random.vue'
//import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    sitemap: true //only appear on sitemap when it's an actual basis page
  },
  {
    path: '/detail/:movieId',
    name: 'DetailPage',
    component: DetailPage,
    sitemap: false //it's a dynamic page
  },
  {
    path: '/',
    name: 'Genres',
    component: Genres,
    sitemap: true
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
    sitemap: true
  },
  /*{
    path: '/categories',
    name: 'Categories',
    component: Categories
  },*/
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
