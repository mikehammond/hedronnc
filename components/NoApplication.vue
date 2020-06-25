<template>
  <section class="section">
    <div class="columns is-mobile is-centered">
      <div id="no-application" class="column is-one-third">
        <figure class="image is-128x128">
          <img src="~assets/no-application.png">
        </figure>
        <p class="title is-4">
          You have no Applications here
        </p>
        <nuxt-link
          to="/applications/new"
          class="button is-fullwidth is-primary"
        >
          Start New Application
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NoApplication'
}
</script>

<style scoped>
#no-application {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
}
</style>
