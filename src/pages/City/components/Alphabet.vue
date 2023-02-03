<template>
  <div class="alphabet">
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">B</div>
    <div class="alphabet-item">C</div>
    <div class="alphabet-item">D</div>
    <div class="alphabet-item">E</div>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.alphabet {
  position: fixed;
  top: 4.76rem;
  right: 0;
  .alphabet-item {
    color: @bgColor;
    font-size: 0.24rem;
    width: 0.32rem;
    line-height: 0.32rem;
    padding-left: 0.2rem;
    text-align: center;
  }
}
</style>
