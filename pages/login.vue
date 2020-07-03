<template>
  <section class="section">
    <div class="columns has-text-centered">
      <div class="column">
        <b-button
          class="mt-5"
          type="is-primary"
          @click="$auth.loginWith('auth0')"
        >
          Login With Auth0
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'guest'
}
</script>

<style scoped>
  .section {
    margin-top: 2rem;
  }
</style>
