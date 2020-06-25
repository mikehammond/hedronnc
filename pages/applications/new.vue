<template>
  <section class="section">
    <div class="columns is-mobile has-text-centered">
      <div class="column">
        <h1 class="title">
          Add New Application
        </h1>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <b-field label="Application Title">
          <b-input
            v-model="title"
            icon="format-title"
          />
        </b-field>
        <b-field label="Application Description">
          <b-input
            v-model="description"
            type="textarea"
          />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Student Name">
          <b-input
            v-model="studentName"
            icon="account"
          />
        </b-field>
        <b-field label="Start Date">
          <b-datepicker
            v-model="startDate"
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
          />
        </b-field>
        <b-field label="End Date">
          <b-datepicker
            v-model="endDate"
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
          />
        </b-field>
      </div>
    </div>
    <div class="columns is-mobile has-text-centered">
      <div class="column">
        <b-button
          type="is-primary"
          @click="addApplication"
        >
          Create Application
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'New',
  data () {
    return {
      title: '',
      description: '',
      studentName: '',
      startDate: new Date(),
      endDate: new Date()
    }
  },
  methods: {
    addApplication () {
      const application = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        bg: 'https://bit.ly/3dr4MAs',
        student: {
          name: this.studentName,
          avatar: 'https://bit.ly/2VdXyJH'
        },
        startDate: this.startDate,
        endDate: this.endDate,
        steps: 12,
        tasks: 32,
        progress: 60
      }
      this.$store.commit('applications/add', application)
      this.$router.replace('/applications')
    }
  }
}
</script>

<style scoped>

</style>
