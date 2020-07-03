<template>
  <div>
    <b-navbar class="is-light transparent is-fixed-top">
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <img
            src="~/assets/logo/scorecard-v1.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <search />
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          tag="nuxt-link"
          :to="item.to"
        >
          <strong>{{ item.title }}</strong>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          v-if="$auth.loggedIn"
          class="navbar-item"
          tag="div"
        >
          <b-button
            class="button is-danger"
            @click="logout"
          >
            Log Out
          </b-button>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'

export default {
  components: {
    Search
  },
  data () {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'view-dashboard',
          to: '/'
        },
        {
          title: 'Applications',
          icon: 'application',
          to: '/applications'
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      window.location.reload()
    }
  }
}
</script>
