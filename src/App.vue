<template>
  <div id="app">
    <div class="center">
      <a-button type="primary">
        Primary
      </a-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less" scoped>
.center {
  margin-top: 120px;
  text-align: center;
}
.demo {
  margin: 20px auto;
}
</style>
