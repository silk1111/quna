<template>
  <div id="app">
    <KeepAlive>
      <router-view></router-view>
    </KeepAlive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "黑体";
}
</style>
