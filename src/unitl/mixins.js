let mixin = {
  methods: {
    addFn(goods) {
      let goodsObj = {
        name: goods.name,
        price: goods.price,
        image: goods.image,
        flag: true,
      };
      this.$store.commit("increment", goodsObj);
    },
    subFn(goods) {
      let goodsObj = {
        name: goods.name,
        price: goods.price,
      };
      this.$store.commit("decrement", goodsObj);
    },
    getNum(items) {
      let carList = this.$store.getters.carList;
      if (carList.length === 0) {
        return 0;
      }
      let obj = carList.filter((item) => {
        return item.name == items.name;
      });
      if (obj.length === 0) {
        return 0;
      } else {
        return obj[0].count;
      }
    },
  },
}
export default mixin
