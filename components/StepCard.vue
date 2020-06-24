<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src="https://bit.ly/2CuBVOI" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p>
            {{ title }}
          </p>
        </div>
        <div class="media-right">
          <figure class="image is-32x32">
            <img
              class="is-rounded"
              src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
              alt="Placeholder image"
            >
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCard',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
