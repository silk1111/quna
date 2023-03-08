<template>
  <div
    class="container"
    :style="{ display: [isGallaryShow ? 'flex' : 'none'] }"
    @click="handleGallary"
  >
    <div class="wrapper">
      <!-- 轮播图开始 -->
      <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- 轮播的图片 -->
          <div class="swiper-slide" v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.url" />
          </div>

          <!-- 小圆点分页器 -->
          <div class="swiper-pagination bottom" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 轮播图结束 -->
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

/*eslint-disable*/
export default {
  name: "Gallary",

  data() {
    return {
      swiperOption: {
        loop: true, //头尾可循环
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          type: "fraction", //数字分页
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  props: {
    isGallaryShow: Boolean,
    imgIndex: Number,
    handleGallary: Function,
    swiperList: Array,
  },
  mounted() {
    console.log("强制刷新");
    this.$forceUpdate();
  },
  updated() {
    this.$refs.mySwiper.swiper.activeIndex = this.imgIndex;
    this.$refs.mySwiper.update();
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  z-index: 20;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  .wrapper {
    background-color: #fff;
    .swiper {
      width: 100%;
      height: 0;
      padding-bottom: 66.66%;
      background-color: #eee;
      .swiper-container {
        overflow: inherit;
        .bottom {
          z-index: 21;
          width: 100%;
          color: #fff;
          font-size: 0.24rem;
          text-align: center;
          padding-right: 0.2rem;
          font-size: 0.26rem;
          position: relative;
          top: 1rem;
        }
      }
      /deep/ .swiper-pagination-bullet-active {
        //样式向内部组件穿透,在使用scropped时使用
        background: #fff !important ;
      }
    }
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
