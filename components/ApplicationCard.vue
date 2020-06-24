<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          src="https://bit.ly/3dr4MAs"
          alt="Placeholder image"
        >
      </figure>
      <figure class="image is-48x48 avatar">
        <img
          class="is-rounded"
          src="https://bit.ly/2VdXyJH"
          alt="Avatar"
        >
      </figure>
      <p class="avatar-name has-text-white">
        Student
      </p>
    </div>
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="columns">
        <div class="column is-one-third">
          <b-icon
            icon="sign-direction"
            size="is-small"
          />
          24 steps
        </div>
        <div class="column is-one-third">
          <b-icon
            icon="calendar-check"
            size="is-small"
          />
          12 tasks
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
            :value="60"
            show-value
          >
            60%
          </b-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
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
