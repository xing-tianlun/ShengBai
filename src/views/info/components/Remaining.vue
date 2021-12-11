<template>
  <div class="remaining">
    <div>
      <p>0</p>
      <p>优惠券</p>
    </div>
    <div>
      <p>0.00</p>
      <p>余额(元)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Remaining",
  methods: {},
};
</script>
<style lang="scss" scoped>
.remaining {
  padding: 0 0.4rem 0.32rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  div {
    width: 4.4rem;
    padding: 0.533333rem 0 0.4rem;
    border-radius: 0.266667rem;
    background: #fff;
    text-align: center;
    p:first-child {
      font-size: 0.64rem;
      font-weight: bold;
      margin-bottom: 0.32rem;
    }
    p:last-child {
      font-size: 0.32rem;
    }
  }
}
</style>
