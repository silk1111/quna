<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <CitySearch :cities="cities" :changeAllCityShow="changeAllCityShow"></CitySearch>
      <div class="user-position" :style="{ display: [isAllCItyShow ? 'block' : 'none'] }">
        <div class="list-title">您的位置</div>
        <div class="hot-list">
          <div class="city-item">
            <a class="city-item-name active">{{ this.city }}</a>
          </div>
        </div>
      </div>
      <div class="hot-city" :style="{ display: [isAllCItyShow ? 'block' : 'none'] }">
        <div class="list-title">热门城市</div>
        <div class="hot-list">
          <div
            class="city-item"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <a class="city-item-name">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <div
        class="all-city-group"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
        :style="{ display: [isAllCItyShow ? 'block' : 'none'] }"
      >
        <div class="list-title">{{ key }}</div>
        <div class="all-city-list">
          <a
            class="all-city-item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
            >{{ innerItem.name }}</a
          >
        </div>
      </div>
    </div>
    <CityAlphabet :cities="cities" :isAllCItyShow="isAllCItyShow"></CityAlphabet>
  </div>
</template>

<script>
import CityAlphabet from "./Alphabet.vue";
import pubsub from "pubsub-js";
import Bscroll from "better-scroll";
import CitySearch from "./Search.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  data() {
    return {
      // cityFirstLetter: "",
      isAllCItyShow: true,
    };
  },
  computed: {
    ...mapState(["city"]), //使用mapState将state中的数据映射成为计算属性
  },

  mounted() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
      }); //使用better-scroll实现wrapper内部的滚动条跳转
    }, 100);
    pubsub.subscribe("cityFirstLetter", (name, cityFirstLetter) => {
      //this.cityFirstLetter = cityFirstLetter;
      //使用监听虽然可以保证在数据更改时才触发跳转，但是假如用户在点击字母后滑动页面从而使首字母改变，则再次点击原字母是无效的
      //因此放弃复杂的修改时跳转+滑动时监测首字母情况的方案，选择清晰易懂且不会太影响效率的点击则跳转方案（官网也是如此
      const element = this.$refs[cityFirstLetter]; //注意：当元素本身不是最末层时，获取到的是数组，需要【0】获取元素
      if (Array.isArray(element)) {
        this.scroll.scrollToElement(element[0]);
      } else this.scroll.scrollToElement(element);
    });
  },

  methods: {
    changeAllCityShow(isShow) {
      this.isAllCItyShow = isShow;
    },
    handleCityClick(cityName) {
      //this.$store.commit("changeCity", cityName);
      this.changeCity(cityName); //使用mapMutations
      this.$router.push("/"); //编程式路由导航
    },
    ...mapMutations(["changeCity"]),
  },
  components: {
    CityAlphabet,
    CitySearch,
  },
  props: {
    hotCities: Array,
    cities: Object,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";
.wrapper {
  // height: 12rem;
  position: fixed;
  top: 0.88rem;
  height: calc(100% - 0.88rem);
  z-index: 1;
  width: 100%;
  background-color: #f5f5f5;
}

.list-title {
  line-height: 0.54rem;
  font-size: 0.26rem;
  color: #616161;
  padding-left: 0.3rem;
  border: 0.01rem solid #c9cccd;
  background-color: #f9f7f7;
}

.hot-list {
  z-index: 1;

  padding: 0.04rem 0.5rem 0.26rem 0.2rem;
  overflow: hidden;
  width: auto;
  .city-item {
    float: left;
    width: 33.33%;
    padding: 0.2rem 0.14rem 0 0.1rem;
    box-sizing: border-box;

    .city-item-name {
      display: block;
      border: 0.02rem solid #c9cccd;
      border-radius: 0.06rem;
      font-size: 0.28rem;
      color: #212121;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      box-sizing: border-box;

      overflow: hidden; //超出部分隐藏
      text-overflow: ellipsis; //超出部分显示为...
      white-space: nowrap; //设置文本不自动换行

      &.active {
        color: @bgColor;
        border-color: @bgColor;
      }
    }
  }
}

.all-city-list {
  width: 100%;
  background: #fff;
  z-index: 1;

  .all-city-item {
    display: block;
    border: 0.01rem solid #c9cccd;
    border-top: none;
    line-height: 0.76rem;
    font-size: 0.28rem;
    color: #212121;
    padding-left: 0.2rem;
  }
}
</style>
