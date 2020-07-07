// Initialize Vuex Store
export const actions = {
  async nuxtServerInit ({ state, commit }, context) {
    if (state.auth.loggedIn) {
      let filter = JSON.stringify({ where: { userId: context.$auth.user.sub } })
      const applications = await context.$axios.$get(`/applications?filter=${filter}`)
      commit('applications/initialize', applications)

      filter = JSON.stringify({ where: { userId: context.$auth.user.sub } })
      const steps = await context.$axios.$get(`/steps?filter=${filter}`)
      commit('steps/initialize', steps)

      filter = JSON.stringify({ where: { userId: context.$auth.user.sub } })
      const tasks = await context.$axios.$get(`/tasks?filter=${filter}`)
      commit('tasks/initialize', tasks)
    }
  }
}
