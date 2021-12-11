<template>
  <ul class="order_form_list">
    <li>
      <i class="iconfont icon-fukuan"></i>
      <p>待付款</p>
    </li>
    <li>
      <i class="iconfont icon-daishouhuo"></i>
      <p>待收货</p>
    </li>
    <li>
      <i class="iconfont icon-pingjia"></i>
      <p>我的评价</p>
    </li>
    <li>
      <i class="iconfont icon-dingdan1"></i>
      <p>全部订单</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OrderFormList",
  methods: {},
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.order_form_list {
  background: #fff;
  border-radius: 0.266667rem;
  margin: -0.266667rem 0.4rem 0.32rem;
  padding: 0.466667rem 0;
  display: flex;
  justify-content: space-around;
  li {
    width: 1.6rem;
    text-align: center;
    i {
      font-size: 0.533333rem;
      color: $green;
    }
    p {
      font-size: 0.32rem;
      margin-top: 0.266667rem;
    }
  }
}
</style>
