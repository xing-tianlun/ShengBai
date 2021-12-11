import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 引入配适方案
import felxible from 'lib-flexible'
Vue.use(felxible)

// 引入vant
import {
  Tab,
  Tabs,
  Popup,
  Notify
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Notify);
import './assets/base.scss'

// 引入mock
import '@/mock/index.js'

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading: require('./assets/placeholder.png'),
  throttleWait: 1000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
