<template>
  <div class="icons">
    <div class="up-icon">
      <div class="icon-img">
        <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" />
      </div>
      <p>酒店</p>
    </div>
    <div class="up-icon">
      <div class="icon-img">
        <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" />
      </div>
      <p>酒店</p>
    </div>
    <div class="up-icon">
      <div class="icon-img">
        <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" />
      </div>
      <p>酒店</p>
    </div>
    <div class="up-icon">
      <div class="icon-img">
        <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" />
      </div>
      <p>酒店</p>
    </div>
    <div class="up-icon">
      <div class="icon-img">
        <img src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" />
      </div>
      <p>酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
    <div class="down-icon">
      <div class="icon-img">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
      </div>
      <p>海外酒店</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.icon(@icon-height , @icon-img-height) {
  padding-bottom: @icon-height;
  width: 20%;
  margin: 0.07rem 0 0.07rem;
  height: 0;
  float: left;
  // background-color: antiquewhite;
  font-size: 0.24rem;
  color: @darkTextColor;
  text-align: center;
  .icon-img {
    width: @icon-img-height;
    height: 0;
    padding-bottom: @icon-img-height;
    overflow: hidden;
    margin: 0 auto 0.1rem;
    img {
      width: 100%;
    }
  }
}
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 75%; //宽高比2：1
  // background-color: green;
  .up-icon {
    .icon(20%, 70%);
  }
  .down-icon {
    .icon(15%, 50%);
  }
}
</style>
