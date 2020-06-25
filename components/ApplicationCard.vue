<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          :src="application.bg"
          alt="Placeholder image"
        >
      </figure>
      <figure class="image is-48x48 avatar">
        <img
          class="is-rounded"
          :src="application.student.avatar"
          alt="Avatar"
        >
      </figure>
      <p class="avatar-name has-text-white">
        {{ application.student.name }}
      </p>
    </div>
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ application.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="columns">
        <div class="column is-one-third">
          <b-icon
            icon="sign-direction"
            size="is-small"
          />
          {{ application.steps }} steps
        </div>
        <div class="column is-one-third">
          <b-icon
            icon="calendar-check"
            size="is-small"
          />
          {{ application.tasks }} tasks
        </div>
      </div>
      <div class="columns is-gapless">
        <div class="column">
          <nuxt-link :to="link">
            <b-button
              type="is-primary"
              outlined
            >
              Continue
            </b-button>
          </nuxt-link>
        </div>
        <div class="column">
          <p class="is-small">
            Application Progress
          </p>
          <b-progress
            type="is-success"
            :value="application.progress"
            show-value
          >
            {{ application.progress }}%
          </b-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .card-image {
    position: relative;
  }
  .avatar {
    position: absolute;
    bottom: -10px;
    left: 15px;
  }
  .avatar-name {
    position: absolute;
    bottom: 2px;
    left: 70px;
    font-weight: bolder;
  }
</style>
