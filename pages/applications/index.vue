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
    <div class="columns is-mobile">
      <nuxt-link
        v-for="application in applications"
        :key="application.id"
        class="column"
        :to="`/applications/${application.id}/view`"
      >
        <card
          :title="application.title"
          :icon="application.icon"
        >
          Open source on <a :href="application.link">GitHub</a>
        </card>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'ApplicationIndex',

  components: {
    Card
  },
  data () {
    return {
      applications: [
        {
          id: 1,
          title: 'Rosemarlines Application',
          icon: 'github',
          link: 'https://github.com/buefy/buefy'
        },
        {
          id: 2,
          title: 'Othniel Application',
          icon: 'cellphone-link',
          link: 'https://github.com/buefy/buefy'
        },
        {
          id: 3,
          title: 'Michael Application',
          icon: 'arrange-bring-to-front',
          link: 'https://vuejs.org/'
        },
        {
          id: 4,
          title: 'Kwame Application',
          icon: 'arrange-bring-to-front',
          link: 'https://vuejs.org/'
        }
      ]
    }
  }
}
</script>
