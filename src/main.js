import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import Peliculas from './components/Peliculas.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: LastArticles },
  { path: '/blog', component: Blog },
  { path: '/formulario', component: Formulario },
  { path: '/pagina', component: Pagina },
  { path: '/Peliculas', name: 'peliculas', component: Peliculas },
  { path: '/ultimos-articulos', component: LastArticles },
  { path: '/mi-componente', component: MiComponente },
  { path: '/hola-mundo', component: HelloWorld },
  { path: '/', component: LastArticles },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
