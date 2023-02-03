<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe600;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe601;</i>
      输入景点/城市/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>城市</span>
        <i class="iconfont">&#xe60a;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";
.header {
  height: @headerHeight;
  line-height: @headerHeight;
  display: flex;
  background: @bgColor;
  color: #fff;
  font-size: 12px;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .iconfont {
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.12rem;
    padding-left: 0.2rem;
    color: #ccc;
    text-align: left;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;
    .iconfont {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
