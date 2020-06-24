<template>
  <div class="container">
    <div class="row has-text-centered">
      <b-button
        class="mt-5"
        type="is-info"
        @click="$auth.loginWith('auth0')"
      >
        Login With Auth0
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'guest'
}
</script>

<style scoped>

</style>
