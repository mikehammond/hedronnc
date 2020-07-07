<template>
  <application-list
    v-if="applications.length"
    :applications="applications"
  />
  <no-application
    v-else
  />
</template>

<script>
import ApplicationList from '~/components/ApplicationList'
import NoApplication from '~/components/NoApplication'

export default {
  name: 'ApplicationIndex',
  components: {
    ApplicationList,
    NoApplication
  },
  data () {
    return {}
  },
  computed: {
    applications () {
      return this.$store.getters['applications/getApplications']
    }
  },
  created () {
    // let filter = JSON.stringify({ where: { userId: this.$auth.user.sub } })
    // this.$axios.$get(`/applications?filter=${filter}`).then((data) => {
    //   this.$store.commit('applications/initialize', data)
    // }).catch(() => {
    //   // Show Error Notification
    // })
    //
    // filter = JSON.stringify({ where: { userId: this.$auth.user.sub } })
    // this.$axios.$get(`/steps?filter=${filter}`).then((data) => {
    //   this.$store.commit('steps/initialize', data)
    // }).catch(() => {
    //   // Show Error Notification
    // })
    //
    // filter = JSON.stringify({ where: { userId: this.$auth.user.sub } })
    // this.$axios.$get(`/tasks?filter=${filter}`).then((data) => {
    //   this.$store.commit('tasks/initialize', data)
    // }).catch(() => {
    //   // Show Error Notification
    // })
  }
}
</script>
