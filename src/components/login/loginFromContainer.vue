<template>
  <div class="loginFrom">
      <el-input v-model="phoneValue" placeholder="11位手机号" maxlength="11" style="margin-bottom: 20px;"></el-input>
      <el-input v-model="codeValue" placeholder="验证码" maxlength="4" style="margin-bottom: 20px;"></el-input>
      <getCodeContainer :phoneValue="phoneValue" 
                                        :timeValue="6" >
      </getCodeContainer>
      
  </div>
</template>

<script>
import getCodeContainer from '../common/getCodeContainer'
export default {
  name: "loginFrom",
  data() {
    return {
      phoneValue: '',
      codeValue: ''
    }
  },
  components: { getCodeContainer }
};
</script>

<style scoped lang="less">
.loginFrom {
  width: 300px;
  height: 500px;
  margin: 100px auto;
}
</style>
