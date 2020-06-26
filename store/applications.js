export const state = () => ({
  list: []
})

export const mutations = {
  add: (state, item) => {
    state.list.push(item)
  }
}

export const getters = {
  getApplicationById: state => id => state.list.find(x => x.id === id)
}
