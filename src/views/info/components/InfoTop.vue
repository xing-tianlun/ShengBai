<template>
  <div class="info_top">
    <p class="set_box">
      <i class="iconfont icon-31shezhi"></i>
      <i class="iconfont icon-31daipingjia"></i>
    </p>
    <div class="userbox">
      <div class="userImg">
        <img src="@/assets/img/user.png" alt="" />
      </div>
      <p class="username">
        <span>{{ getUser }}</span
        ><i class="iconfont icon-xiangyou1"></i>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InfoTop",
  methods: {},
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.info_top {
  height: 3.6rem;
  background: $green;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  color: #fff;
  overflow: hidden;
  p.set_box {
    margin: 0.48rem 0 0.16rem 0;
    display: flex;
    justify-content: flex-end;
    i {
      font-size: 0.6rem;
    }
    i:first-child {
      margin-right: 0.533333rem;
    }
  }
  .userbox {
    display: flex;
    align-items: center;
    .userImg {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.32rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .username {
      font-size: 0.48rem;
    }
  }
}
</style>
