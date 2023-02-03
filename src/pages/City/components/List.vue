<template>
  <div>
    <CityAlphabet></CityAlphabet>
    <div class="user-position">
      <div class="list-title">您的位置</div>
      <div class="hot-list">
        <div class="city-item">
          <a class="city-item-name active">广州</a>
        </div>
      </div>
    </div>
    <div class="hot-city">
      <div class="list-title">热门城市</div>
      <div class="hot-list">
        <div class="city-item">
          <a class="city-item-name">北京</a>
        </div>
        <div class="city-item">
          <a class="city-item-name">北京</a>
        </div>
        <div class="city-item">
          <a class="city-item-name">北京</a>
        </div>
        <div class="city-item">
          <a class="city-item-name">北京</a>
        </div>
      </div>
    </div>

    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
    <div class="all-city">
      <div class="list-title">A</div>
      <div class="all-city-list">
        <a class="all-city-item">阿坝藏族羌族自治州</a>
        <a class="all-city-item">阿克苏地区</a>
        <a class="all-city-item">阿拉尔</a>
      </div>
    </div>
  </div>
</template>

<script>
import CityAlphabet from "./Alphabet.vue";
export default {
  name: "CityList",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    CityAlphabet,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.list-title {
  line-height: 0.54rem;
  font-size: 0.26rem;
  color: #616161;
  padding-left: 0.3rem;
  border: 0.01rem solid #c9cccd;
  background-color: #f9f7f7;
}

.hot-list {
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
      &.active {
        color: @bgColor;
        border-color: @bgColor;
      }
    }
  }
}

.all-city-list {
  width: 100%;
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
