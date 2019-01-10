/*
 * *@ 2019-01-10
 * *@ author mikeYuan 
 * *@ 获取验证码功能组件
* * @ 参数： phoneValue( str ) 手机号   timeValue( int ) 倒计时  
*/


<template>
  <div class="getCodeContainer">
      <a href="javascript:void(0)" class="getCodeBtn" 
          @click="handleClickGetCode" v-if="getCodeFlag">
          {{getCodeText}}
      </a>
      <a href="javascript:void(0)" class="getCodeBtn"  v-if="!getCodeFlag">剩余{{codeTime}}秒</a>
  </div>
</template>

<script>
export default {
  name: "loginFrom",
  props: ['phoneValue','timeValue'],
    data() {
      return {
        getCodeText: '获取',
        codeTime: this.timeValue,
        getCodeFlag: true,
        code: undefined,
        interval: undefined,
        isDisable: false
      }
  },
    methods: {
    // ...mapMutations(['']),

        // 获取验证码
    handleClickGetCode() {
      if( this.isDisable ) {
        return false
      }
      this.isDisable = true
        setTimeout(() => {
         this.isDisable = false
      }, 1000)
          
       if( !this.phoneValue ) {
        this.$message.error('请输入手机号');
        return false
      }

      if(!(/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(this.phoneValue))){ 
        this.$message.error('手机号格式不对');
        return false; 
      }
      this.getCodeFlag = false;
      this.interval = window.setInterval( ()=> {
          if ((this.codeTime--) <= 0) {
            this.getCodeText = '重新获取'
            this.codeTime = this.timeValue;
            this.getCodeFlag = true;
            window.clearInterval(this.interval);
          }
        }, 1000);

      let param = new FormData();
      param.append('phone_num', this.phoneValue);

      // this.api.handleGetCode(param)
      // .then(this.handleGetCodeSucc.bind(this));

      
    },
    handleGetCodeSucc(res) {
      
    }
   },
};
</script>

<style scoped lang="less">
.loginFrom {
  width: 300px;
  height: 500px;
  margin: 100px auto;
  .getCodeBtn {
     margin-top: 20px;
    color:black;
  }
}
</style>
