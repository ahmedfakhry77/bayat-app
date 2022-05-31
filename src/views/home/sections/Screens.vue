<template>
  <section id="screens" class="section screenshoots light down-curve">
    <div class="container">
      <h2 class="text-center">صور من التطبيق</h2>

      <swiper ref="carousel" class="swiper screens-stage pt-4 mt-5" :options="options" key="carousel">

        <swiper-slide
          :key="index"
          v-for="(image, index) in [1, 2, 3, 4, 5]"
          class="text-center d-flex align-center flex-wrap justify-center py-10"
        >
          <div class="screen text-center">
            <img
              class="mobile-view"
              style="display: inline"
              :src="require(`@/assets/images/screens/${image}.png`)"
              alt="screen"
            />
          </div>
        </swiper-slide>

        <div class="carousel-swiper swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import 'swiper/css/swiper.css';

export default {
  name: 'screens-section',
  components: { Swiper, SwiperSlide },

  data: function () {
    return {
      slides: [],
      options: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000
        },
         breakpoints: {
          300: { slidesPerView: 1 },
          430: { slidesPerView: 2 },
          764: { slidesPerView: 3 },
          990: { slidesPerView: 4 },
        },
        pagination: {
          el: '.carousel-swiper.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: ".carousel-swiper.swiper-button-next",
          prevEl: ".carousel-swiper.swiper-button-prev",
        }
      },
    };
  },
};
</script>

<style>
.swiper .swiper-wrapper {
  padding-bottom: 3.3em;
}
</style>