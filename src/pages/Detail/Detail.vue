<template>
  <div>
    <Header :isHeaderFull="isHeaderFull"></Header>
    <Swiper></Swiper>
    <Information></Information>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from "../../common/Swiper/Swiper.vue";
import Header from "./components/Header.vue";
import Information from "./components/Information.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
export default {
  name: "Detail",

  data() {
    return {
      isHeaderFull: false,
    };
  },

  mounted() {
    if (window.addEventListener) {
      window.addEventListener("scroll", this.scrollEvent);
    } else {
      window.attachEvent("onscroll", this.scrollEvent); //跨浏览器兼容
    }
  },

  methods: {
    scrollEvent() {
      if (document.documentElement.scrollTop > 44 && !this.isHeaderFull) {
        this.isHeaderFull = true;
        console.log("显示全部顶部栏");
      } else if (document.documentElement.scrollTop < 44 && this.isHeaderFull) {
        this.isHeaderFull = false;
        console.log("显示部分顶部栏");
      }
      // console.log(document.documentElement.scrollTop);
    },
  },
  components: {
    Header,
    Swiper,
    Information,
    Footer,
    Content,
  },
};
</script>

<style lang="less" scoped></style>
