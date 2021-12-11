<template>
  <div class="toast" :style="style">
    <slot name='topimg'></slot>
    <p class="txt">{{txt}}</p>
    <slot name='bottomimg'></slot>
  </div>
</template>

<script>
  export default ({
    name: "Toast",
    props: {
      txt: {
        type: String,
        default: "提示文字"
      },
      style: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      
    }
  })
</script>
<style scoped lang="scss">
.toast {
  position: absolute;
}
</style>
