<template>
  <div class="cgoodsItem">
    <img v-lazy="item.image" :key="item.image" alt="" />
    <div class="itemInfo">
      <p class="name">{{ item.name }}</p>
      <p class="price">￥{{ item.price }}<span>/份</span></p>
      <div class="btn_box">
        <span
          class="sub btn"
          :class="{ active: getNum(item) }"
          @click.stop="subFn(item)"
          >-</span
        >
        <span class="num" v-show="getNum(item)">{{ getNum(item) }}</span>
        <span class="add btn" @click.stop="addFn(item)">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/unitl/mixins.js";

export default {
  name: "CGoodsItem",
  props: ["item"],
  mixins: [mixin],
  methods: {},
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.cgoodsItem {
  padding: 0.266667rem;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.266667rem;
  margin-bottom: 0.2rem;
  position: relative;
  display: flex;
  img {
    width: 2.266667rem;
    height: 2.266667rem;
    border-radius: 0.266667rem;
    margin: 0 0.266667rem;
  }
  .itemInfo {
    p.name {
      font-size: 0.4rem;
      line-height: 0.6rem;
    }
    .price {
      margin-top: 1.1rem;
      font-size: 0.4rem;
      color: #f60;
      font-weight: bold;
      span {
        font-size: 0.3rem;
        color: #aaa;
        font-weight: normal;
      }
    }
  }
  .btn_box {
    position: absolute;
    bottom: 0.133333rem;
    right: 0.133333rem;
    .btn {
      display: inline-block;
      width: 0.48rem;
      height: 0.48rem;
      font-size: 0.5rem;
      line-height: 0.5rem;
      border-radius: 50%;
      border: none;
      text-align: center;
    }
    .sub {
      border: 2px solid $green;
      color: $green;
      font-weight: bold;
      visibility: hidden;
    }
    .sub.active {
      visibility: inherit;
    }
    .add {
      border: 2px solid $green;
      color: #fff;
      background: $green;
      font-weight: bold;
    }
    .num {
      display: inline-block;
      margin: 0 0.266667rem;
      color: #93999f;
    }
  }
}
</style>
