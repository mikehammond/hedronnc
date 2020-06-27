<template>
  <section id="no-application" class="section">
    <div class="box">
      <figure class="image is-128x128">
        <img src="~assets/no-application.png">
      </figure>
      <p class="title is-4 has-text-centered">
        You have no Applications here
      </p>
      <nuxt-link
        to="/applications/new"
        class="button is-fullwidth is-primary"
      >
        Start New Application
      </nuxt-link>
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
  height: 100vh;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
