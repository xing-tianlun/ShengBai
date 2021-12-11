<template>
  <div class="tabbarItem" @click="fn(index)">
    <p v-if="obj.iconfont"><i class="iconfont" :class="obj.iconfont"></i></p>
    <p v-else-if="obj.src">
      <img :src="obj.src" alt="" />
    </p>
    <p class="txt">{{ obj.txt }}</p>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: ["obj", "index"],
  methods: {
    fn(index) {
      this.$emit("tabbarFn", index);
    },
  },
};
</script>
<style scoped lang="scss">
.tabbarItem {
  flex: 1;
  p {
    text-align: center;
  }
  p:nth-child(1) {
    font-weight: bold;
    font-size: 0.533333rem;
    line-height: 0.64rem;
    margin-bottom: 0.133333rem;
  }
  p:nth-child(1) i {
    font-size: 0.64rem;
  }
  p.txt {
    font-weight: normal;
    font-size: 0.32rem;
    line-height: 0.32rem;
  }
}
</style>
