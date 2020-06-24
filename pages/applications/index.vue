<template>
  <section class="section">
    <div class="columns is-mobile has-text-right">
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
    <div class="columns is-multiline is-mobile">
      <div
        v-for="application in applications"
        :key="application.id"
        class="column is-one-third"
      >
        <application-card
          :title="application.title"
          :link="`/applications/${application.id}/view`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ApplicationCard from '~/components/ApplicationCard'

export default {
  name: 'ApplicationIndex',
  components: {
    ApplicationCard
  },
  data () {
    return {
      applications: [
        {
          id: 1,
          title: 'Oxford University - Undergraduate',
          icon: 'github',
          bg: 'https://bit.ly/2Z3pktt'
        },
        {
          id: 2,
          title: 'Westford University - Postgraduate',
          icon: 'cellphone-link',
          bg: 'https://github.com/buefy/buefy'
        },
        {
          id: 3,
          title: 'Cambridge University - Undergraduate',
          icon: 'arrange-bring-to-front',
          bg: 'https://vuejs.org/'
        },
        {
          id: 4,
          title: 'Ghana University - Undergraduate',
          icon: 'arrange-bring-to-front',
          bg: 'https://vuejs.org/'
        }
      ]
    }
  }
}
</script>
