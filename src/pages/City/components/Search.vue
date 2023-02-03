<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      :placeholder="[isChecked != false ? '' : '输入城市名或拼音']"
      :style="{ textAlign: [isChecked == true ? 'left' : 'center'] }"
      v-on:focus="changeCheckedTrue"
      v-on:blur="changeCheckedFalse"
    />
  </div>
</template>

<script>
export default {
  name: "CitySearch",

  data() {
    return {
      isChecked: false,
    };
  },

  mounted() {},

  methods: {
    changeCheckedTrue() {
      this.isChecked = true;
    },
    changeCheckedFalse() {
      this.isChecked = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.search {
  background-color: @bgColor;
  padding: 0 0.2rem 0.1rem 0.2rem;
  font-size: 0.26rem;
  margin-top: 0.88rem;
  .search-input {
    display: block;
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.16rem 0 0.16rem 0.1rem;
    border: none;
    border-radius: 0.06rem;
    font-weight: 300;
    font-family: "宋体", "楷体_GB2312";
    outline: none;
  }
}
</style>
