<template>
  <div class="general">
    <Slider texto="Página de Pruebas"></Slider>

    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigirAlBlog()">Redirigit</button>
        <h4>{{ nombre }}</h4>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Slider from './Slider.vue';
import Sidebar from './Sidebar';
export default {
  name: 'pagina',
  components: {
    Slider,
    Sidebar,
  },
};
</script>
