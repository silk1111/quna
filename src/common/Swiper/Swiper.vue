<template>
  <div>
    <Gallary
      :isGallaryShow="isGallaryShow"
      :imgIndex="imgIndex"
      :handleGallary="handleGallary"
      :swiperList="swiperList"
    ></Gallary>
    <!-- 轮播图开始 -->
    <div class="swiper" @click="handleClickImg">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- 轮播的图片 -->
        <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.url" />
        </div>

        <!-- 小圆点分页器 -->
        <div class="swiper-pagination right" slot="pagination"></div>
      </swiper>
      <div class="swiper-bottom"><span>产品编号</span><span>3478261432784686</span></div>
    </div>
    <!-- 轮播图结束 -->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Gallary from "../Gallary/Gallary.vue";
export default {
  name: "MySwiper",

  data() {
    return {
      imgIndex: 0,
      isGallaryShow: false,
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
          type: "fraction",
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
  components: {
    Gallary,
  },
  mounted() {
    console.log("强制刷新");

    this.$forceUpdate();
  },

  methods: {
    handleClickImg() {
      // console.log("点击轮播图", imgIndex);
      // console.log((this.$refs.mySwiper.swiper.clickedIndex + 2) % 3);
      this.imgIndex = this.$refs.mySwiper.swiper.clickedIndex;
      this.isGallaryShow = true;
    },
    handleGallary() {
      this.isGallaryShow = false;
      console.log("this.isGallaryShow", this.isGallaryShow);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 66.66%;
  background-color: #eee;
  position: relative;
  box-sizing: border-box;

  /deep/ .swiper-pagination-bullet-active {
    //样式向内部组件穿透
    background: #fff !important ;
  }
  .right {
    width: auto;
    position: absolute;
    bottom: 0.45rem;
    right: 0rem;
    color: #fff;
    font-size: 0.24rem;
    text-align: right;
    padding-right: 0.2rem;
    font-size: 0.26rem;
  }
}
.swiper-img {
  width: 100%;
}

.swiper-bottom {
  z-index: 2;
  color: #fff;
  font-size: 0.26rem;
  position: absolute;
  bottom: 0.31rem;
  width: 100%;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  box-sizing: border-box;
  span {
    margin-left: 0.1rem;
  }
}
</style>
