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
            src="~assets/h-scorecard.png"
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
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
