<template>
  <section class="section">
    <div class="columns has-text-right">
      <div class="column">
        <nuxt-link
          to="/applications/new"
        >
          <b-button
            type="is-primary"
          >
            Create New Application
          </b-button>
        </nuxt-link>
      </div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="application in applications"
        :key="application._id"
        class="column is-one-third"
      >
        <application-card
          :application="application"
          :link="`/applications/${application._id}/view`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ApplicationCard from '~/components/ApplicationCard'

export default {
  name: 'ApplicationList',
  components: {
    ApplicationCard
  },
  props: {
    applications: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .section {
    margin-top: 2rem;
  }
</style>
