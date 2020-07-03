<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          :src="application.bg"
          alt="Placeholder image"
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
      return this.$store.getters['steps/getStepsByApplicationId'](this.application.id)
    },
    tasks () {
      return this.$store.getters['tasks/getTasksByApplicationId'](this.application.id)
    },
    progress () {
      const result = this.$store.getters['tasks/getApplicationProgress'](this.application.id)
      if (result === 100) {
        this.$axios.$post('https://hedronnc-functions.herokuapp.com/notifications/email', {
          from: this.$auth.user.email,
          to: this.application.student.email,
          subject: `Completion of ${this.application.title}`,
          message: `Hello ${this.application.student.name}, Your Application has been completed.`
        })
        this.$axios.$post('https://hedronnc-functions.herokuapp.com/notifications/sms', {
          to: this.application.student.email,
          message: `Hello ${this.application.student.name}, Your Application has been completed.`
        })
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
