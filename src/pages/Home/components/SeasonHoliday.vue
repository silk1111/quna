<template>
  <div>
    <div class="home-title">
      <a
        :class="dataType == 'month' ? 'active' : ''"
        data-type="month"
        @click="changeDataType('month')"
        >当季热门度假</a
      >
      <a
        :class="dataType == 'today' ? 'active' : ''"
        data-type="today"
        @click="changeDataType('today')"
        >今日特惠度假</a
      >
    </div>

    <div
      class="holiday-cards"
      :style="{ display: [dataType == 'month' ? 'block' : 'none'] }"
    >
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
          />
          <div class="holiday-title">
            <div class="holiday-title-in">
              <p class="holiday-title-site">广州-丽江</p>
              <p class="holiday-title-message">5天跟团游</p>
            </div>
          </div>
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
          />
          <div class="holiday-title">
            <div class="holiday-title-in">
              <p class="holiday-title-site">广州-丽江</p>
              <p class="holiday-title-message">5天跟团游</p>
            </div>
          </div>
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
          />
          <div class="holiday-title">
            <div class="holiday-title-in">
              <p class="holiday-title-site">广州-丽江</p>
              <p class="holiday-title-message">5天跟团游</p>
            </div>
          </div>
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg"
          />
          <div class="holiday-title">
            <div class="holiday-title-in">
              <p class="holiday-title-site">广州-丽江</p>
              <p class="holiday-title-message">5天跟团游</p>
            </div>
          </div>
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
          </p>
        </div>
      </div>
    </div>

    <div
      class="holiday-cards"
      :style="{ display: [dataType == 'today' ? 'block' : 'none'] }"
    >
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/vs_ceph_b2c_001/29ad36de-ec47-4198-8685-6644dea56d5d.jpg_180x120x90_9773302b.jpg"
          />
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <span class="holiday-desc"
            >纯玩0购物💕丽江+大理4天丨动车往返丨洱海吉普旅拍丨圣托里尼丨赠西双版纳+机票</span
          >
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
            <span class="holiday-price-more">起</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/vs_ceph_b2c_001/29ad36de-ec47-4198-8685-6644dea56d5d.jpg_180x120x90_9773302b.jpg"
          />
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <span class="holiday-desc"
            >纯玩0购物💕丽江+大理4天丨动车往返丨洱海吉普旅拍丨圣托里尼丨赠西双版纳+机票</span
          >
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
            <span class="holiday-price-more">起</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/vs_ceph_b2c_001/29ad36de-ec47-4198-8685-6644dea56d5d.jpg_180x120x90_9773302b.jpg"
          />
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <span class="holiday-desc"
            >纯玩0购物💕丽江+大理4天丨动车往返丨洱海吉普旅拍丨圣托里尼丨赠西双版纳+机票</span
          >
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
            <span class="holiday-price-more">起</span>
          </p>
        </div>
      </div>
      <div class="holiday-card">
        <div class="holiday-top">
          <img
            class="holiday-img"
            src="https://imgs.qunarzz.com/vs_ceph_b2c_001/29ad36de-ec47-4198-8685-6644dea56d5d.jpg_180x120x90_9773302b.jpg"
          />
        </div>

        <div class="holiday-infor">
          <span class="holiday-name">含往返飞机票(含税)+4晚住宿</span>
          <span class="holiday-desc"
            >纯玩0购物💕丽江+大理4天丨动车往返丨洱海吉普旅拍丨圣托里尼丨赠西双版纳+机票</span
          >
          <p class="holiday-price">
            <span>¥</span>
            <span>4599</span>
            <span class="holiday-price-more">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeasonHoliday",

  data() {
    return {
      dataType: "month",
    };
  },

  mounted() {},

  methods: {
    changeDataType(newDataType) {
      if (newDataType !== this.dataType) {
        this.dataType = newDataType;
      } else console.log(newDataType);
      // console.log(this.dataType);
      // console.log(newDataType);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/styles/themeColor.less";
.home-title {
  height: 0.56rem;
  font-size: 0.25rem;
  padding-left: 0.2rem;
  a {
    margin-right: 0.12rem;
    display: inline-block;
    border: 1px solid #d7d7d7;
    font-size: 0.25rem;
    height: 0.56rem;
    line-height: 0.56rem;
    padding: 0 0.26rem;
    border-radius: 0.08rem;
    &.active {
      background-color: @bgColor;
      color: #fff;
    }
  }
}

.holiday-cards {
  width: auto;
  margin: 0.1rem 0.2rem;
  .holiday-card {
    width: 49%;
    font-size: 0.3rem;
    float: left;
    &:nth-child(2n) {
      padding-left: 2%;
    }
    .holiday-top {
      width: 100%;
      height: 2.15rem;
      overflow: hidden;
      position: relative;
      .holiday-img {
        width: 100%;
        height: auto;
        border-radius: 0.1rem;
      }
      .holiday-title {
        width: 100%;
        height: 40%;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        overflow: hidden;
        .holiday-title-in {
          display: inline-block;
          height: 100%;
          padding: 0.1rem 0.44rem;
          background: rgba(0, 0, 0, 0.6);
          .holiday-title-site {
            color: #fff;
            font-size: 0.29rem;
            line-height: 0.4rem;
          }
          .holiday-title-message {
            font-size: 0.24rem;
            color: #ffde00;
            line-height: 0.31rem;
          }
        }
      }
    }

    .holiday-infor {
      width: auto;
      padding: 0.1rem;
      .holiday-name {
        display: block;
        white-space: nowrap; //设置文本不自动换行
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 0.43rem;
      }
      .holiday-desc {
        .holiday-name;
        color: #555555;
        font-size: 0.27rem;
        line-height: 0.41rem;
      }
      .holiday-price {
        color: #ff7400;
        font-size: 0.36rem;
        font-weight: 550;
        margin-top: 0.05rem;
        line-height: 0.42rem;
        .holiday-price-more {
          font-size: 0.29rem;
          font-weight: 400;
          margin-left: 0.06rem;
        }
      }
    }
  }
}
</style>
