<template>
  <div class="homeContainer">
    首页
    <router-link :to="'/login'">登陆</router-link>
  </div>
</template>

<script>
export default {
  name: "homeContainer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="less">
  
</style>
