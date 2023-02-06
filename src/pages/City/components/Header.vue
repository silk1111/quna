<template>
  <div class="city-header">
    <router-link to="/">
      <span class="iconfont return">&#xe600;</span>
    </router-link>

    <div class="city-header-title">境内 境外港澳台</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.city-header {
  height: @headerHeight;
  width: 100%;
  background-color: @bgColor;
  font-size: 0.36rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .return {
    display: inline-block;
    color: #fff;
    line-height: @headerHeight;
    width: 0.4rem;
    font-size: 0.36rem;
    padding-left: 0.22rem;
    font-weight: 600;
  }
  .city-header-title {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: @headerHeight;
    color: #fff;
    text-align: center;
  }
}
</style>
