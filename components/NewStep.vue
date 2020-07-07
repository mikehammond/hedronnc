<template>
  <div class="card">
    <div class="card-content">
      <div class="columns is-mobile">
        <div class="column">
          <h1 class="title is-4">
            Add New Step
          </h1>
          <b-field label="Step Title">
            <b-input
              v-model="title"
              icon="format-title"
            />
          </b-field>
          <b-button
            type="is-primary"
            :disabled="!title"
            @click="addStep"
          >
            Continue
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewStep',
  props: {
    application: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addStep () {
      const step = {
        userId: this.$auth.user.sub,
        applicationId: this.application._id,
        title: this.title,
        completed: false
      }
      this.$axios.$post('/steps', step).then((data) => {
        this.$store.commit('steps/add', data)
        this.$parent.close()
      }).catch(() => {
        // Show Error Notification
      })
    }
  }
}
</script>

<style scoped>

</style>
