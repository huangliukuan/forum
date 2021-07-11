import Vue from 'vue'
import App from './App'

import utils from './core/util.js'
import Bus from "./core/bus.js"

Vue.config.productionTip = false

// 常用函数
Vue.prototype.$utils = utils;
Vue.prototype.$Bus = Bus;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
