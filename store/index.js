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
  headerBar: '1'
})

const getters = {
  getStatus: (state) => {
    return state.status
  }
}

const mutations = {
  GET_STATUS (state, text) {
   state.status = text;
  },
  SET_STATUS (state, text) {
    state.headerBar = text;
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
