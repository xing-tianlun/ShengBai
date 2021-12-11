<template>
  <div class="headbar">
    <slot name='left'></slot>
    <slot name='center'></slot>
    <slot name='right'></slot>
  </div>
</template>

<script>
  export default ({
    name: "Headbar",
    methods: {
      
    }
  })
</script>
<style lang="scss" scoped>
.headbar {
  display: flex;
  justify-content: space-between;
}
</style>
