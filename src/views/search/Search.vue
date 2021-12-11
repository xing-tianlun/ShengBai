<template>
  <!-- 搜索 -->
  <div class="search">
    <div class="search_top">
      <i class="iconfont icon-xiangzuo1" @click="backGo"></i>
      <span class="title">搜索</span>
    </div>
    <div class="searchIpt">
      <input ref="input" type="text" placeholder="请输入商品关键字" />
      <span class="searchBtn" @click="searchFn">搜索</span>
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="searchInfo">
      <div v-if="!goodslist">
        <div class="hotSearch">
          <p class="tit">热门搜索</p>
          <ul>
            <li
              v-for="(item, index) in hostList"
              :key="index"
              @click="hostSearch(item)"
            >
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="searchRecord">
          <i class="iconfont icon-huishouzhan" @click="clearSearchRecordFn"></i>
          <p class="tit">搜索记录</p>
          <ul>
            <li v-for="(item, index) in getSearchRecord" @click="hostSearch(item)" :key="index">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="goodsList">
        <Scroll class="scroll" ref="scroll" v-if="goodslist">
          <div v-show="goodslist.length == 0" class="listNo">
            <p>暂无数据</p>
          </div>
          <ul class="list" v-if="goodslist">
            <li v-for="(item, index) in goodslist" :key="index">
              <div class="imgBox"><img :src="item.image" alt="" /></div>
              <p class="name">{{ item.name }}</p>
              <p class="activity"><span>买一送一</span></p>
              <p class="price_box">
                <span class="price">￥{{ item.price }}</span>
              </p>
              <div class="btn_box">
                <span
                  class="sub btn"
                  :class="{ active: getNum(item) }"
                  @click.stop="subFn(item)"
                  >-</span
                >
                <span class="num" v-show="getNum(item)">{{
                  getNum(item)
                }}</span>
                <span class="add btn" @click.stop="addFn(item)">+</span>
              </div>
            </li>
          </ul>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "../../components/Scroll.vue";

import {mapMutations,mapGetters} from 'vuex'
export default {
  name: "Search",
  data() {
    return {
      goodslist: null,
      hostList: ["粥", "面", "饼", "果汁"],
      searchRecord: null,
    };
  },
  components: {
    Scroll,
  },
  methods: {
    ...mapMutations(["addSearchRecord","clearSearchRecord"]),
    searchFn() {
      if (this.$refs.input.value) {
        let txt = this.$refs.input.value;
        this.addSearchRecord(txt)
        this.axios.post("/api/searchGoods", { txt }).then((res) => {
          this.goodslist = res.data.goodList;
        });
      }
    },
    searchRecord() {
      this.axios.get("/api/searchRecord").then((res) => {
        this.searchRecord = res.data.searchRecord;
        console.log(this.searchRecord);
      });
    },
    backGo() {
      this.$router.go(-1);
    },
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
    hostSearch(value) {
      console.log(value);
      this.$refs.input.value = value;
      this.searchFn();
    },
    clearSearchRecordFn() {
      this.clearSearchRecord()
    }
  },
  computed: {
    ...mapGetters(['getSearchRecord'])
  },
  created() {
    // this.axios.post('/api/searchGoods').then(res => {
    //   console.log(res);
    // })
    this.axios.get("/api/searchRecord").then((res) => {
      this.searchRecord = res.data.searchRecord;
      console.log(this.searchRecord);
    });
  },
  mounted() {},
  updated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.search {
  width: 100%;
  .search_top {
    margin: 0 0.4rem;
    padding: 0.36rem 0;
    display: flex;
    i {
      font-size: 40px;
      line-height: 0.533333rem;
      margin-top: 0.12rem;
    }
    span {
      flex: 1;
      font-size: 0.533333rem;
      text-align: center;
    }
  }
  .searchIpt {
    margin: 0 0.4rem;
    padding: 0.16rem 0;
    position: relative;
    display: flex;
    input {
      width: 100%;
      height: 0.933333rem;
      border-radius: 0.933333rem;
      border: none;
      background: #f6f6f6;
      font-size: 0.373333rem;
      text-indent: 0.933333rem;
    }
    .icon-sousuo {
      position: absolute;
      top: 0.4rem;
      left: 0.333333rem;
      font-size: 0.45rem;
      color: #9f9f9f;
    }
    .searchBtn {
      display: block;
      width: 1.333333rem;
      font-size: 0.4rem;
      line-height: 0.933333rem;
      text-align: center;
    }
  }
  .searchInfo {
    height: calc(100vh - 2.7rem);
    overflow: hidden;
    .hotSearch {
      margin: 0 0.4rem;
      .tit {
        font-size: 0.4rem;
        font-weight: bold;
        margin: 0.4rem 0 0.333333rem 0;
      }
      ul {
        display: flex;
        li {
          span {
            display: inline-block;
            font-size: 0.28rem;
            color: $green;
            padding: 0.093333rem 0.373333rem;
            border: 3px solid $green;
            border-radius: 0.133333rem;
            margin: 0 0.12rem 0.133333rem;
          }
        }
      }
    }
    .searchRecord {
      position: relative;
      margin: 0 0.4rem;

      i.icon-huishouzhan {
        position: absolute;
        top: 0.133333rem;
        right: 0.133333rem;
      }
      .tit {
        font-size: 0.4rem;
        font-weight: bold;
        margin: 0.4rem 0 0.333333rem 0;
      }
      ul {
        display: flex;
        li {
          span {
            display: inline-block;
            font-size: 0.28rem;
            padding: 0.093333rem 0.373333rem;
            border-radius: 0.4rem;
            margin: 0 0.12rem 0.133333rem;
            background: #f6f6f6;
          }
        }
      }
    }
    .goodsList {
      height: calc(100vh - 2.666667rem);
      overflow: hidden;
      .scrol {
        height: 100%;
      }
      ul.list {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        background: #f6f6f6;
        // padding: 0.2rem 0;
        li {
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
      }
    }
    .listNo {
      font-size: 0.4rem;
      p {
        text-align: center;
        margin-top: 0.666667rem;
      }
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
    line-height: 0.4rem;
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
