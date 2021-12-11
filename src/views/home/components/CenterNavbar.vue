<template>
  <ul>
    <li class="active">
      <p>猜你喜欢</p>
      <p><span>精选好货</span></p>
    </li>
    <li>
      <p>限时抢购</p>
      <p><span>抢</span></p>
    </li>
    <li>
      <p>超级划算</p>
      <p><span>实惠直达</span></p>
    </li>
    <li>
      <p>本地生鲜</p>
      <p><span>在地直采</span></p>
    </li>
    <li>
      <p>人气</p>
      <p><span>大家在买</span></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CenterNavbar",
  methods: {},
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
ul {
  display: flex;
  justify-content: space-around;
  li {
    flex: 1;
    width: 2.666667rem;
    text-align: center;
    p:first-child {
      font-size: 0.4rem;
      font-weight: bold;
    }
    p:last-child {
      margin-top: 0.1rem;
      font-size: 25px;
      span {
        color: #aaa;
      }
    }
  }
  li.active {
    p:first-child {
      font-weight: bold;
    }
    p:last-child {
      margin-top: 0.1rem;
      span {
        padding: 0.066667rem 0.133333rem;
        background: $green;
        color: #fff;
        border-radius: 0.266667rem;
      }
    }
  }
}
</style>
