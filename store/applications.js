// import { application } from '../test/data'

export const state = () => ({
  list: []
})

export const mutations = {
  add: (state, item) => {
    state.list = [...state.list, item]
  }
}

export const getters = {
  getApplications: state => state.list,
  getApplicationsCount: state => state.list.length,
  getApplicationById: state => id => state.list.find(x => x.id === id)
}
