<template>
  <div class="login">
    <i class="iconfont icon-cha"></i>
    <p class="tit">账号登录</p>
    <img src="../../assets/img/logo.png" alt="" class="logo" />
    <div class="ipt">
      <input
        type="number"
        name=""
        id=""
        v-model="phone"
        @input="iptFn($event)"
        placeholder=" 请输入手机号，新号码即默认注册"
      />
      <span>+86</span>
    </div>
    <button type="button" class="code" @click="getCode" :disabled="!isPhone">
      获取验证码
    </button>
    <p class="read">
      请认真阅读生百超市 <span>《用户协议》</span><span>《隐私协议》</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isPhone: false,
      phone: "",
    };
  },
  methods: {
    getCode() {
      this.$store.dispatch('aLoginUser',this.phone)
      this.$router.push('/login')
    },
    iptFn(event) {
      let reg = /^1[0-9]{10}$/g;
      if (reg.test(event.target.value)) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.login {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .icon-cha {
    font-size: 0.533333rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
  }
  .tit {
    text-align: center;
    font-size: 0.48rem;
    margin: 0.4rem;
  }
  .logo {
    width: 2.933333rem;
    display: block;
    margin: 1.56rem auto 1.066667rem;
  }
  .ipt {
    width: 8.533333rem;
    height: 1.2rem;
    margin: 0 auto;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      border: none;
      border-radius: 1.2rem;
      font-size: 0.426667rem;
      text-indent: 1.5rem;
    }
    span {
      display: inline-block;
      font-size: 0.426667rem;
      height: 0.666667rem;
      line-height: 0.666667rem;
      padding: 0 0.333333rem;
      border-right: 2px solid #aaa;
      position: absolute;
      top: 0.3rem;
      left: 0;
    }
  }
  .code {
    display: block;
    width: 5.2rem;
    height: 1.066667rem;
    margin: 0.506667rem auto 0;
    background: #f6f6f6;
    background: $green;
    font-size: 0.426667rem;
    text-align: center;
    line-height: 1.066667rem;
    border-radius: 1.066667rem;
    color: #fff;
    border: none;
  }
  .code[disabled] {
    background: #f6f6f6;
  }
  .read {
    position: absolute;
    bottom: 0.8rem;
    width: 100%;
    font-size: 0.32rem;
    color: #aaa;
    text-align: center;
    span {
      color: $green;
    }
  }
}
</style>
