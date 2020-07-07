<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img
          src="~/assets/application-bg.png"
          alt="Placeholder image"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <p>
          {{ step.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCard',
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
