<template>
  <section class="section">
    <div class="columns is-mobile has-text-centered">
      <div class="column">
        <h1 class="title">
          Application Details
        </h1>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <b-field label="Application Title">
          <b-input
            icon="format-title"
            :value="application.title"
            disabled
          />
        </b-field>
        <b-field label="Application Description">
          <b-input
            type="textarea"
            :value="application.description"
            disabled
          />
        </b-field>
        <b-field label="Student Name">
          <b-input
            icon="account"
            :value="application.student.name"
            disabled
          />
        </b-field>
        <b-field label="Start Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
            :value="application.startDate"
            disabled
          />
        </b-field>
        <b-field label="End Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
            :value="application.endDate"
            disabled
          />
        </b-field>
      </div>
      <div class="column has-text-centered">
        <p class="subtitle">
          Application Steps
        </p>
        <div class="tile box">
          <div class="columns is-mobile is-multiline">
            <div
              v-for="(step, key) in steps"
              :key="key"
              class="column is-half"
              @click="isModalActive = true"
            >
              <step-card :title="step.title" />
            </div>
          </div>
        </div>
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <b-button
              type="is-primary"
              @click="isModalActive = true"
            >
              Add New Step
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isModalActive"
      :width="640"
    >
      <step-detail />
    </b-modal>
  </section>
</template>

<script>
import StepCard from '~/components/StepCard'
import StepDetail from '~/components/StepDetail'

export default {
  name: 'ViewApplication',
  components: {
    StepCard,
    StepDetail
  },
  data () {
    return {
      // applicationsList: [],
      // application: {},
      steps: [
        { title: 'Application Form' },
        { title: 'Visa Application' },
        { title: 'Application Submission' }
      ],
      isModalActive: false
    }
  },
  computed: {
    application () {
      const id = this.$route.params.id
      return this.$store.getters['applications/getApplicationById'](+id)
    }
  }
}
</script>

<style scoped>

</style>
