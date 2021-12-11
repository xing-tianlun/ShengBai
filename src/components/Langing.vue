<template>
  <div class="landing">
    <img src="../assets/landing.gif" alt="">
    <p class="txt">{{txt}}</p>
    <!-- <slot>
    </slot> -->
  </div>
</template>

<script>
  export default ({
    name: "Langing",
    props: {
      txt: {
        type: String,
        default: "加载中..."
      }
    },
    methods: {
      
    }
  })
</script>
<style scoped>
  .landing {
    width: 30%;
    padding: 0 .266667rem .266667rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .5);
    border-radius: .266667rem;
  }
  .landing img {
    width: 100%;
  }
  .txt {
    color: #fff;
    text-align: center;
  }
</style>
