<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BannerImg",
  methods: {},
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 0.333333rem 0.4rem 0;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
</style>
