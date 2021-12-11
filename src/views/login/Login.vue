<template>
  <div class="login">
    <i class="iconfont icon-xiangzuo1" @click="backFn"></i>
    <p class="tit">请输入验证码</p>
    <p class="subtit">验证码已发送至 +86 {{user}}</p>
    <div class="ipt">
      <input
        type="number"
        name=""
        id=""
        v-model="code"
        placeholder="请输入验证码"
      />
    </div>
    <p class="again" v-if="time">{{ time }}秒后重新发送</p>
    <p class="again" v-else>
      没有收到验证码，<span class="againCode" @click="againGetCode"
        >重新发送</span
      >
    </p>
    <button type="button" class="code" @click="loginFn">登录</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      isPhone: false,
      code: "",
      time: 10,
    };
  },
  methods: {
    ...mapActions(["aSetUserInfo"]),
    backFn() {
      this.$router.go(-1)
    },
    loginFn() {
      console.log(1);
      let username = this.user
      let code  = this.code
      this.axios.post('/api/login',{username,code}).then(res => {
        console.log(res);
        if(res.data.code === 0 || res.data.code === 1) {
          let userInfo = res.data.userinfo
          this.aSetUserInfo(userInfo)
          this.$router.push('/main')
        }else {
          console.log(res.data.message)
        }
      })
    },
    againGetCode() {
      this.time = 10;
      let timer = null;
      timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          clearInterval(timer);
        }
      }, 1000);
      this.axios.get("/api/sendCode").then((res) => {
        console.log(res);
      });
    },
  },
  computed: {
    ...mapState(['user'])
  },
  created() {},
  mounted() {
    this.againGetCode();
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
  .icon-xiangzuo1 {
    font-size: 0.533333rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
  }
  .tit {
    font-size: 0.6rem;
    font-weight: bold;
    margin: 1.866667rem 0.4rem 0;
  }
  .subtit {
    font-size: 0.373333rem;
    margin: 0.32rem 0.4rem 0;
    color: #aaa;
  }
  .ipt {
    width: 8.533333rem;
    height: 1.2rem;
    margin: 1.333333rem auto 0;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      border: none;
      border-radius: 1.2rem;
      font-size: 0.426667rem;
      text-align: center;
    }
  }
  .again {
    margin: 1.066667rem auto;
    color: #aaa;
    text-align: center;
    font-size: 0.373333rem;
    span.againCode {
      color: $green;
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
  // .code[disabled] {
  //   background: #f6f6f6;
  // }
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
