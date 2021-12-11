<template>
  <div class="tabbar">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default ({
    name: "Tabbar",
    methods: {
      
    }
  })
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  display: flex;
  padding: .3rem 0;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 0px 10px #aaa;
}
</style>
