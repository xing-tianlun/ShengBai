import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    persistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    carList: [],
    allFlag: true,
    searchRecord: [],
    user: "",
    userInfo: null
  },
  mutations: {
    mLoginUser(state, payload) {
      state.user = payload
    },
    mSetUserInfo(state, payload) {
      state.userInfo = payload
    },

    increment(state, goodsObj) {
      let flag = false
      state.carList.map(item => {
        if (item.name === goodsObj.name) {
          flag = true
          item.count++
        }
      });
      if (!flag) {
        goodsObj.count = 1
        state.carList.push(goodsObj)
      }
    },
    decrement(state, goodsObj) {
      // 改进版
      state.carList.map((item, index) => {
        if (item.name === goodsObj.name) {
          item.count--
          if (item.count === 0) {
            state.carList.splice(index, 1)
          }
        }
      })
    },
    mchangeFlag(state, goodsObj) {
      state.carList.map(item => {
        if (item.name === goodsObj.name) {
          item.flag = !item.flag
        }
      })
    },
    mclearCar(state) {
      state.carList = []
    },
    mchangeAllFlag(state) {
      state.allFlag = !state.allFlag
      state.carList.map((item, index) => {
        item.flag = state.allFlag
      })
    },
    addSearchRecord(state, txt) {
      state.searchRecord.push(txt)
      state.searchRecord = [...new Set(state.searchRecord)]
    },
    clearSearchRecord(state) {
      state.searchRecord = []
    }
  },
  actions: {
    aLoginUser(context, payload) {
      context.commit('mLoginUser', payload)
    },
    aSetUserInfo(context, payload) {
      context.commit('mSetUserInfo', payload)
    }
  },
  getters: {
    carList(state) {
      return state.carList
    },
    sumNum(state) {
      return state.carList.reduce((perValue, item) => {
        return perValue + item.count;
      }, 0);
    },
    allparice(state) {
      return state.carList.filter(item => {
        return item.flag
      }).reduce((perValue, item) => {
        return perValue + item.count * item.price;
      }, 0);
    },
    gGetAllFlag(state) {
      let flag = true;
      state.carList.map((item, index) => {
        if (!item.flag) {
          flag = false;
        }
      })
      state.allFlag = flag
      return flag
    },
    getSearchRecord(context) {
      console.log(context);
      return context.searchRecord
    },
    getUser(state) {
      let user = state.user;
      user = user.split('')
      user.splice(3,4,'****')
      return user.join('')
    }
  },
  modules: {}
})
