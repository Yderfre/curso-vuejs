<template>
  <div class="general">
    <Slider></Slider>

    <div class="center">
      <article class="article-item">
        <div class="image-wrap">
          <img
            :src="pelicula.image"
            :alt="pelicula.title"
            :title="pelicula.title"
          />
        </div>

        <h2>{{ pelicula.title }}</h2>
        <span
          class="date"
          :class="{
            yeargreen: pelicula.year >= 2016,
            yearred: pelicula.year <= 2016,
          }"
        >
          {{ pelicula.year }}
        </span>
        <a href="#">Leer más</a>
        <input
          type="button"
          value="Marcar como favorita"
          @click="pasarFavoritaAlPadre(pelicula)"
        />

        <div class="clearfix"></div>
      </article>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pelicula',
  props: ['pelicula'],
  methods: {
    pasarFavoritaAlPadre(pelicula) {
      this.$emit('favorita', pelicula);
    },
  },
};
</script>
