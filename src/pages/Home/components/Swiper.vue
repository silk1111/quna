<template>
  <!-- 轮播图开始 -->
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 轮播的图片 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>

      <!-- 小圆点分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <!-- 轮播图结束 -->
</template>

<script>
import "swiper/dist/css/swiper.css";

export default {
  name: "HomeSwiper",

  data() {
    return {
      swiperOption: {
        loop: true, //头尾可循环
        autoplay: {
          //自动循环
          delay: 5000, //时间
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
      swiperList: [
        {
          id: "0001",
          url:
            "http://n.sinaimg.cn/sinacn16/300/w1620h1080/20180317/7cc0-fyshfuq8223482.jpg",
        },
        {
          id: "0002",
          url:
            "http://n.sinaimg.cn/sinacn16/300/w1620h1080/20180317/ed9b-fyshfuq8221806.jpg",
        },
        {
          id: "0003",
          url:
            "http://n.sinaimg.cn/sinacn16/298/w1620h1078/20180317/af1a-fyshfuq8222255.jpg",
        },
      ],
    };
  },

  mounted() {
    console.log("强制刷新");

    this.$forceUpdate();
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 66.66%;
  background-color: #eee;

  /deep/ .swiper-pagination-bullet-active {
    //样式向内部组件穿透
    background: #fff !important ;
  }
}
.swiper-img {
  width: 100%;
}
</style>
