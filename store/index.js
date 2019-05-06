import Vuex from 'vuex'
import { getAuth } from '../api/service';


const actions = {
  async GET_STATUS ( {commit} ) {
    const  { data } = await getAuth()
    commit('GET_STATUS', data)
  }
}

const state = () => ({
  status: '0',
  headerBar: 'init'
})

const getters = {
  getStatus: (state) => {
    return state.status
  }
}

const mutations = {
  GET_STATUS (state, text) {
   state.status = text;
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}

// const createStore = () => {
//   return new Vuex.Store({
//     strict: false,
//
//
//   })
// }
//
// export default createStore
