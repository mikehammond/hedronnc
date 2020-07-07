<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          src="~/assets/application-bg.png"
          alt="Placeholder image"
        >
      </figure>
      <p class="avatar-name has-text-white">
        {{ application.studentName }}
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
          {{ steps.length }} steps
        </div>
        <div class="column is-one-third">
          <b-icon
            icon="calendar-check"
            size="is-small"
          />
          {{ tasks.length }} tasks
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
            type="is-primary"
            :value="progress"
            show-value
            format="percent"
          />
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
  },
  computed: {
    steps () {
      return this.$store.getters['steps/getStepsByApplicationId'](this.application._id)
    },
    tasks () {
      return this.$store.getters['tasks/getTasksByApplicationId'](this.application._id)
    },
    progress () {
      const result = this.$store.getters['tasks/getApplicationProgress'](this.application._id)
      if (result === 100) {
        // Set Application completed to true
      } else {
        // Set Application completed to false
      }
      return result
    }
  }
}
</script>

<style scoped>
  .card-image {
    position: relative;
  }
  .avatar-name {
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bolder;
  }
</style>
