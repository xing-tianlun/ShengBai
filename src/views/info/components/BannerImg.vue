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
  height: 3.466667rem;
  padding: 0 0.4rem 0.32rem;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
