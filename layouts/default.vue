<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <search />
        <span class="navbar-item" />
        <span class="navbar-item" />
        <nuxt-link
          v-for="(item, key) of items"
          :key="key"
          class="navbar-item has-text-white"
          :to="item.to"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div
          v-if="$auth.loggedIn"
          class="navbar-item"
        >
          <b-button
            class="button is-light"
            @click="logout"
          >
            Log Out
          </b-button>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
    </section>
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
          to: { name: 'index' }
        },
        {
          title: 'Applications',
          icon: 'application',
          to: { name: 'applications' }
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
