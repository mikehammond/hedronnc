// import { application } from '../test/data'

export const state = () => ({
  list: []
})

export const mutations = {
  initialize: (state, items) => {
    state.list = [...items]
  },
  add: (state, item) => {
    state.list = [...state.list, item]
  }
}

export const getters = {
  getApplications: state => state.list,
  getApplicationsCount: state => state.list.length,
  getPendingApplicationsCount: (state) => {
    const pendingApplications = state.list.filter(x => !x.completed)
    return pendingApplications.length
  },
  getCompletedApplicationsCount: (state) => {
    const pendingApplications = state.list.filter(x => x.completed)
    return pendingApplications.length
  },
  getApplicationById: state => id => state.list.find(x => x._id === id)
}
