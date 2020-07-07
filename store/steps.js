// import { step } from '../test/data'

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
  getSteps: state => state.list,
  getStepsByApplicationId: state => id => state.list.filter(x => x.applicationId === id),
  getStepById: state => id => state.list.find(x => x._id === id)
}
