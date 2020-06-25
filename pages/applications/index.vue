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
      return this.$store.state.applications.list
    }
  }
}
</script>
