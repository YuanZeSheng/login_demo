<template>
  <div class="loginContainer">
    
    <!-- 登陆头部 -->
    <!-- <loginHeaderContainer></loginHeaderContainer> -->

    <!-- 登陆表单 -->
    <loginFromContainer></loginFromContainer>

    <!-- 登陆底部 -->
    <!-- <loginFooterContainer></loginFooterContainer> -->

  </div>
</template>

<script>

import loginFromContainer from './loginFromContainer'

export default {
  name: "loginContainer",
  props: {
  },
  components: { loginFromContainer }
};
</script>

<style scoped lang="less">
  .loginContainer {
    position: relative;
  }
</style>
