<template>
  <div class="modal_box" v-show="isShow">
    <div class="mask">
      <div class="box">
        <p class="title">{{ title }}</p>
        <div class="con">
          <p>{{ txt }}</p>
        </div>
        <div class="btn_box">
          <button class="close" @click="close">关闭</button>
          <button class="change" @click="confirm">提交更改</button>
        </div>
        <button class="closeBox" @click="closeBox">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  props: ["isShow","title", "txt"],
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.$emit('operate',0)
    },
    confirm() {
      this.$emit('operate',1)
    },
    closeBox() {
      this.$emit('operate',0)
    }
  },
};
</script>
<style scoped lang="scss">
.modal_box {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .box {
      width: 80%;
      background: #fff;
      border-radius: 0.266667rem;
      position: absolute;
      top: 0.8rem;
      left: 50%;
      transform: translateX(-50%);
      .closeBox {
        font-size: 0.533333rem;
        line-height: 0.533333rem;
        background: transparent;
        border: none;
        position: absolute;
        top: .266667rem;
        right: .266667rem;
        width: 0.533333rem;
        height: .533333rem;
      }
      .title {
        padding: 0.266667rem;
        font-size: 30px;
        font-weight: bold;
      }
      .con {
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        padding: 0.266667rem;
        font-size: 0.32rem;
        line-height: 1.5em;
      }
      .btn_box {
        padding: 0.266667rem;
        display: flex;
        justify-content: flex-end;
        button {
          padding: 0.133333rem 0.266667rem;
          border-radius: 0.133333rem;
        }
        .close {
          border: 2px solid #cecece;
          background: #fff;
          margin-right: 0.133333rem;
        }
        .change {
          border: 2px solid #3378b3;
          background: #3378b3;
          color: #fff;
        }
      }
    }
  }
}
</style>
