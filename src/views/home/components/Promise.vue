<template>
  <ul class="promise">
    <li><i class="iconfont icon-baoguo_hezi_o"></i> 生百自营</li>
    <li><i class="iconfont icon-serviceshandianfahuo"></i> 最快30分钟达</li>
    <li><i class="iconfont icon-erji"></i> 售后无忧</li>
  </ul>
</template>

<script>
export default {
  name: "Promise",
  methods: {},
};
</script>
<style lang="scss" scoped>
.promise {
  display: flex;
  font-size: 0.373333rem;
  color: #b6b6b6;
  padding: 0.2rem 0.4rem;
  justify-content: space-between;
  li {
    i {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
}
</style>
