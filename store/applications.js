// const application = {
//   id: Date.now(),
//   title: 'Oxford University - Undergraduate',
//   description: 'Very New Application Decription',
//   bg: 'https://bit.ly/3dr4MAs',
//   student: {
//     name: 'Ibrahima Mouvrick',
//     avatar: 'https://bit.ly/2VdXyJH'
//   },
//   startDate: Date.now(),
//   endDate: Date.now(),
//   steps: 12,
//   tasks: 32,
//   progress: 60
// }

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, item) {
    state.list.push(item)
  }
}
