import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    indexCounter: 0,
    siteCounter: 0,
    requestsCounter: 0,
    settingsCounter: 0
  },
  mutations: {
    updateCounter (state, payload) {
      state[payload]++
    }
  },
  actions: {
    pageName ({ commit }, payload) {
      let current
      if (payload === '/') {
        current = 'indexCounter'
      } else {
        current = payload
        current = current.split('/').join('') + 'Counter'
      }
      commit('updateCounter', current)
    }
  },
  modules: {
  }
})
