import Vue from 'vue'
import Vuex from 'vuex'

import barChart from './modules/barChart'

Vue.use(Vuex)
const plugins = []

const store = new Vuex.Store({
  plugins,
  modules: {
    barChart
  }
})

export default store
