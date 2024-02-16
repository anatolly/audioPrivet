import Vue from 'vue'
import Vuex from 'vuex'

import appSettings from '@/settings'
import greetings from './greetings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appSettings,
    greetings
  }
})
