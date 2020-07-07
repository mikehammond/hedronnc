export default function (context) {
  const id = context.params.id
  const application = context.store.getters['applications/getApplicationById'](id)
  if (!application) {
    return context.redirect('/applications')
  }
}
