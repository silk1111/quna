<template>
  <div class="city">
    <CityHeader></CityHeader>
    <!-- <CitySearch></CitySearch> -->
    <CityList :cities="cities" :hotCities="hotCities"></CityList>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header.vue";
// import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
/* eslint-disable */
export default {
  name: "City",

  data() {
    return {
      cities: {},
      hotCities: [],
    };
  },

  mounted() {
    this.getCityInfo();
  },

  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const { hotCities, cities } = res.data;
        this.hotCities = hotCities;
        this.cities = cities;
        // console.log(res.data.hotCities);
      }
    },
  },
  components: {
    CityHeader,
    // CitySearch,
    CityList,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";
.city {
  position: relative;
  background: #f5f5f5;
}
</style>
