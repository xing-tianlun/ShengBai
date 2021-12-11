<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import PullUp from "@better-scroll/pull-up";

BScroll.use(PullUp);
export default {
  name: "Scroll",
  // props: {
  //   index: {
  //     default: 0,
  //   },
  //   list: {
  //     default: 0,
  //   },
  // },
  props: {
    pullUp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      num: 1,
    };
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true, // 纵向滚动
      click: true,
      probeType: 3,
      pullUpLoad: this.pullUp,
    });
    if (this.pullUp) {
      this.scroll.on("pullingUp", () => {
        // 向组件外抛出上拉加载的函数
        this.$emit("pullingUp");
        // 完成上拉加载,准备下一次上拉加载
        this.scroll.finishPullUp();
        this.scroll.refresh();
      });
    }
  },
  watch: {},
  updated() {
    // this.scroll.scrollToElement(this.list[this.index], 300);
  },
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
.content {
  width: 100%;
}
</style>
