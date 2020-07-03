<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <p class="title is-4 has-text-centered">
          Application Details
        </p>
        <div class="box">
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
      <div class="column">
        <p class="title is-4 has-text-centered">
          Student Details
        </p>
        <div class="box">
          <b-field label="Name">
            <b-input
              v-model="studentName"
              icon="account"
            />
          </b-field>
          <b-field label="Email">
            <b-input
              v-model="studentEmail"
              icon="email"
            />
          </b-field>
          <b-field label="Telephone">
            <b-input
              v-model="studentPhone"
              icon="phone"
            />
          </b-field>
        </div>
      </div>
    </div>
    <div class="columns has-text-centered">
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
      startDate: new Date(),
      endDate: new Date(),
      studentName: '',
      studentEmail: '',
      studentPhone: ''
    }
  },
  methods: {
    addApplication () {
      const application = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        bg: require('~/assets/application-bg.png'),
        student: {
          name: this.studentName,
          email: this.studentEmail,
          phone: this.studentPhone
        },
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.$store.commit('applications/add', application)
      this.$router.replace('/applications')
    }
  }
}
</script>

<style scoped>
  .section {
    margin-top: 2rem;
  }
</style>
