<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
/* eslint-disable */
export default {
  name: "City",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    CityHeader,
    CitySearch,
    CityList,
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/themeColor.less";
.city {
  position: relative;
}
</style>
