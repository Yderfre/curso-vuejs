<template>
  <div class="general">
    <Slider texto="Blog"> </Slider>

    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog23</h2>
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
  name: 'Blog',
  components: {
    Slider,
    Sidebar,
  },
};
</script>
