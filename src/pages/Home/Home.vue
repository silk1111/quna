<template>
  <div>
    <HomeHeader></HomeHeader>
    <!-- <HommeSwiper ></HommeSwiper> -->
    <HommeIcons></HommeIcons>
    <HomeHoliday></HomeHoliday>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
// import HommeSwiper from './components/Swiper.vue'
import HommeIcons from "./components/Icons.vue";
import HomeHoliday from "./components/Holiday.vue";
/* eslint-disable */
export default {
  name: "Home",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    HomeHeader,
    // HommeSwiper,
    HommeIcons,
    HomeHoliday,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
