import http from 'axios'

export default {
  state: {
    greetings: {
      items: [],
      count: 0
    }
  },
  getters: {
    greetings: state => state.greetings
  },
  mutations: {
    setGreetings (state, value) {
      Object.assign(state.greetings, value)
    }
  },
  actions: {
    greetingsGetFromServer ({commit, getters}) {
      return http
      .get(getters.appSettings.server.host + getters.appSettings.server.greetings)
      .then((response) => {
        commit('setGreetings', response.data[0])
      })
      .catch((error) => {
        throw error
      })
    }
  }
}
