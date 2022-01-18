<template>
  <div class="goodsitem">
    <div class="imgBox"><img v-lazy="obj.image" alt="" /></div>
    <p class="name">{{ obj.name }}</p>
    <p class="activity"><span>买一送一</span></p>
    <p class="price_box">
      <span class="price">￥{{ obj.price }}</span>
    </p>
    <div class="btn_box">
      <span
        class="sub btn"
        :class="{ active: getNum(obj) }"
        @click.stop="subFn(obj)"
        >-</span
      >
      <span class="num" v-show="getNum(obj)" >{{ getNum(obj) }}</span>
      <span class="add btn" @click.stop="addFn(obj)">+</span>
    </div>
  </div>
</template>

<script>
import mixin from "@/unitl/mixins.js";

export default {
  name: "GoodsItem",
  props: ["obj"],
  mixins:[mixin],
  methods: {
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.goodsitem {
  padding: 0.133333rem;
  margin: 0 0.1rem;
  margin-bottom: 0.2rem;
  background: #fff;
  border-radius: 0.266667rem;
  width: 4.8rem;
  height: 6.8rem;
  box-sizing: border-box;
  position: relative;
  .imgBox {
    width: 100%;
    height: 4.8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p.name {
    font-size: 0.426667rem;
    line-height: 0.666667rem;
  }
  p.activity {
    span {
      font-size: 0.266667rem;
      display: inline-block;
      padding: 0.066667rem;
      border: 1px solid #f00;
      color: #f00;
      border-radius: 0.133333rem;
    }
  }
  p.price_box {
    span.price {
      font-size: 0.5rem;
      font-weight: bold;
      color: #ff4f3f;
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
</style>
