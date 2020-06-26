// import { task } from '../test/data'

export const state = () => ({
  list: []
})

export const mutations = {
  add: (state, item) => {
    state.list = [...state.list, item]
  },
  toggleChecked: (state, id) => {
    const item = state.list.find(x => x.id === id)
    item.checked = !item.checked
    const minusItem = state.list.filter(x => x.id !== id)
    state.list = [...minusItem, item]
  }
}

export const getters = {
  getTasks: state => state.list,
  getTasksByApplicationId: state => id => state.list.filter(x => x.applicationId === id),
  getTasksByStepId: state => id => state.list.filter(x => x.stepId === id),
  getTaskById: state => id => state.list.find(x => x.id === id),
  getStepProgress: state => (id) => {
    const allTasks = state.list.filter(x => x.stepId === id)
    const completedTasks = allTasks.filter(x => x.checked)
    return (completedTasks.length / allTasks.length) * 100
  },
  getApplicationProgress: state => (id) => {
    const allTasks = state.list.filter(x => x.applicationId === id)
    const completedTasks = allTasks.filter(x => x.checked)
    return (completedTasks.length / allTasks.length) * 100
  }
}
