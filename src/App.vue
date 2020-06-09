<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <!-- <LastArticles></LastArticles> -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// // import HelloWorld from './components/HelloWorld.vue';
// import MiComponente from './components/MiComponente';
import HeaderComponent from './components/HeaderComponent.vue';

// import LastArticles from './components/LastArticles.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    // // HelloWorld,
    // MiComponente,
    HeaderComponent,

    // LastArticles,
    FooterComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import url(./assets/css/styles.css);
</style>
