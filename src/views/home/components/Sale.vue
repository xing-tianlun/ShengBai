<template>
  <div class="sale">
    <div class="sale_tit">
      <p>惠选</p>
      <div>
        <span>超值性价比</span>
        <span><i class="iconfont icon-xiangyou1"></i></span>
      </div>
    </div>
    <ul>
      <li>
        <img src="@/assets/img/home_list2_01.png" alt="" />
        <p>围头港海捕白鲳鱼（约...）</p>
        <span>￥25.00</span>
      </li>
      <li>
        <img src="@/assets/img/home_list2_02.png" alt="" />
        <p>海捕大午鱼/马友鱼（约...）</p>
        <span>￥22.90</span>
      </li>
      <li>
        <img src="@/assets/img/home_list2_03.png" alt="" />
        <p>当日进港冰鲜赤棕鱼（约...）</p>
        <span>￥21.90</span>
      </li>
      <li>
        <img src="@/assets/img/home_list2_04.png" alt="" />
        <p>佳农菲律宾进口香蕉</p>
        <span>￥10.50</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sale",
  methods: {},
};
</script>
<style lang="scss" scoped>
.sale {
  margin: 0.2rem 0.4rem;
  background: #ff7c10;
  border-radius: 0.266667rem;
  padding: 0.066667rem;
  .sale_tit {
    padding: 0.2rem 0.4rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.4rem;
      font-weight: bold;
      color: #fff;
    }
    div {
      span:first-child {
        padding: 0.066667rem 0.133333rem;
        background: #fff;
        color: #ff7c10;
        border-radius: 0.4rem;
        margin-right: 0.133333rem;
      }
      span:last-child {
        display: inline-block;
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.45rem;
        background: #fff;
        color: #ff7c10;
        border-radius: 0.4rem;
        i {
          font-size: .266667rem;
        }
      }
    }
  }
  ul {
    padding: 0.2rem 0;
    background: #fff;
    border-radius: 0.266667rem;
    display: flex;
    justify-content: space-around;
    li {
      width: 22%;
      text-align: center;
      img {
        width: 100%;
      }
      p {
        font-size: 0.4rem;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      span {
        font-size: 0.3rem;
        padding: 0.066667rem.133333rem;
        background: #ff4f3f;
        color: #fff;
        border-radius: 0.133333rem;
        display: inline-block;
        margin: 0.133333rem auto;
      }
    }
  }
}
</style>
