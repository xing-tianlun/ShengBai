<template>
  <ul>
    <li v-for="item,index in tabList" :key="index" @click="clickFn(index)" :class="{active: index === curindex}">
      <p>{{item.tit}}</p>
      <p><span>{{item.subTit}}</span></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CenterNavbar",
  props: {
    curindex: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      tabList: [
        {
          tit: "猜你喜欢",
          subTit: "精选好货"
        },
        {
          tit: "限时抢购",
          subTit: "抢"
        },
        {
          tit: "超级划算",
          subTit: "实惠直达"
        },
        {
          tit: "本地生鲜",
          subTit: "在地直采"
        },
        {
          tit: "人气",
          subTit: "大家在买"
        },
      ]
    }
  },
  methods: {
    clickFn(index) {
      this.$emit("centerNavBarFn",index)
    }
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
ul {
  display: flex;
  justify-content: space-around;
  li {
    flex: 1;
    width: 2.666667rem;
    text-align: center;
    p:first-child {
      font-size: 0.4rem;
      font-weight: bold;
    }
    p:last-child {
      margin-top: 0.1rem;
      font-size: 25px;
      span {
        color: #aaa;
      }
    }
  }
  li.active {
    p:first-child {
      font-weight: bold;
    }
    p:last-child {
      margin-top: 0.1rem;
      span {
        padding: 0.066667rem 0.133333rem;
        background: $green;
        color: #fff;
        border-radius: 0.266667rem;
      }
    }
  }
}
</style>
