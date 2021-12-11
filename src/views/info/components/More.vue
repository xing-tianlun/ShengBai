<template>
  <div class="more">
    <p class="tit">更多服务</p>
    <ul>
      <li>
        <i class="iconfont icon-qian"></i>
        <p class="name">多充多送</p>
      </li>
      <li>
        <i class="iconfont icon-dizhi"></i>
        <p class="name">收货地址</p>
      </li>
      <li>
        <i class="iconfont icon-erji"></i>
        <p class="name">联系客服</p>
      </li>
      <li>
        <i class="iconfont icon-tixing"></i>
        <p class="name">到货提醒</p>
      </li>
      <li>
        <i class="iconfont icon-shoucang"></i>
        <p class="name">我的收藏</p>
      </li>
      <li>
        <i class="iconfont icon-guanyu"></i>
        <p class="name">关于百生</p>
      </li>
      <li>
        <i class="iconfont icon-bangzhu"></i>
        <p class="name">帮助与反馈</p>
      </li>
      <li>
        <i class="iconfont icon-fenxiang2"></i>
        <p class="name">分享百生</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "More",
  methods: {},
};
</script>
<style lang="scss" scoped>
.more {
  margin: 0 0.4rem;
  padding: 0.32rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.266667rem;
  .tit {
    font-size: 0.4rem;
    font-weight: bold;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 2rem;
      margin-top: 0.533333rem;
      text-align: center;
      i {
        font-size: 0.56rem;
        font-weight: bold;
      }
      p.name {
        font-size: 0.32rem;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
