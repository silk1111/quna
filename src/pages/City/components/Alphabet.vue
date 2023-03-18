<template>
  <div class="alphabet" :style="{ display: [isAllCItyShow ? 'block' : 'none'] }">
    <div
      class="alphabet-item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      v-on:click="handleLetterClick"
      @touchstart="handlleTouchStart"
      @touchmove="handlleTouchMove"
      @touchend="handlleTouchEnd"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "CityAlphabet",

  data() {
    return {
      touchStatus: false,
      timer: null,
      nowLetter: "", //定义当前首字母以免多次传递数据，造成效率浪费。*可以在接收处使用watch监听修改，但无法监听用户滑动屏幕对于首字母的修改
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  mounted() {},

  methods: {
    handleLetterClick(e) {
      this.nowLetter = e.target.innerText;
      pubsub.publish("cityFirstLetter", e.target.innerText);
    },
    handlleTouchStart(e) {
      this.touchStatus = true; //标记正在滑动
      //实现在按下还未拖动时，首字母就已改变
      const moveY = e.touches[0].clientY - 238;
      const movenum = Math.floor(moveY / 16);
      this.nowLetter = this.letters[movenum];
      pubsub.publish("cityFirstLetter", this.nowLetter);
    },
    handlleTouchMove(e) {
      if (this.touchStatus) {
        // const startY = this.$refs.A[0].offsetTop; //由于字母表本身就有定位，而offsetTop是与有定位的祖宗元素的距离，因此数值为0
        //if (this.timer) clearTimeout(this.timer);
        if (!this.timer) {
          //节流
          this.timer = setTimeout(() => {
            //提高效率
            const moveY = e.touches[0].clientY - 238;
            const movenum = Math.floor(moveY / 16);
            if (
              this.nowLetter != this.letters[movenum] && //首字母只在修改时触发
              0 <= movenum && //防止超出数组范围
              movenum < this.letters.length
            ) {
              this.nowLetter = this.letters[movenum];
              pubsub.publish("cityFirstLetter", this.nowLetter);
            }
            if (this.nowLetter != this.letters[movenum] && movenum < 0 && movenum >= -1) {
              //提高效率且划过头时返回首页
              this.nowLetter = this.letters[movenum];
              pubsub.publish("cityFirstLetter", "wrapper");
            }
            this.timer = null;
          }, 100);
        }
      }
    },
    handlleTouchEnd() {
      this.touchStatus = false;
    },
  },
  props: {
    cities: Object,
    isAllCItyShow: Boolean,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";

.alphabet {
  position: fixed;
  top: 4.76rem;
  right: 0;
  z-index: 10;
  float: right;
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
