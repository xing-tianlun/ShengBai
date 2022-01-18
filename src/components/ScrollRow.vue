<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "ScrollRow",
  props: {
    // index: {
    //   default: 0,
    // },
    // list: {
    //   default: 0,
    // },
    click: {
      default: false
    },
    width: {
      default: 0,
    },
    momentum: {
      default: false
    }
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
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX: true, // 纵向滚动
      scrollY: false,
      click: this.click,
      probeType: 3,
      momentum: this.momentum,
    });
  },
  watch: {
    index: function () {},
  },
  updated() {
    this.$refs.content.style.width = this.width + "px";
    this.scroll.refresh();
    // this.scroll.scrollToElement(this.list[this.index], 300);
  },
};
</script>
<style scoped>
.wrapper {
  height: 100%;
}
</style>
