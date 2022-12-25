// we have use token here and this will be used for authentication (using in router)
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    },
    isAuthenticted: false,
    token: ''
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticted = true
      } else {
        state.token = ''
        state.isAuthenticted = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticted = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticted = false 
    }
  },
  actions: {
  },
  modules: {
  }
})
