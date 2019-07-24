export const strict = false
export const state = () => ({
  authCode: ''
})

export const mutations = {
  setAuthCode(state, payload) {
    state.filterState = payload
  }
}

export const actions = {
  setAuthCode({ commit }, payload) {
    commit('setAuthCode', payload)
  }
}
