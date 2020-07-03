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
    </b-navbar>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
