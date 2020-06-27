<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <p class="title is-4 has-text-centered">
          Application Details
        </p>
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
      <div class="column">
        <p class="title is-4 has-text-centered">
          Application Steps
        </p>
        <div class="box">
          <div class="columns is-multiline">
            <div
              v-for="(step, key) in steps"
              :key="key"
              class="column is-half"
              @click="openModal(step)"
            >
              <step-card :step="step" />
            </div>
          </div>
        </div>
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <b-button
              type="is-primary"
              @click="isNewStepModalActive = true"
            >
              Add New Step
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isStepDetailModalActive"
      :width="640"
    >
      <step-detail
        :application="application"
        :step="selectedStep"
      />
    </b-modal>
    <b-modal
      :active.sync="isNewStepModalActive"
      :width="640"
    >
      <new-step :application="application" />
    </b-modal>
  </section>
</template>

<script>
import StepCard from '~/components/StepCard'
import StepDetail from '~/components/StepDetail'
import NewStep from '~/components/NewStep'

export default {
  name: 'ViewApplication',
  middleware: ['application'],
  components: {
    StepCard,
    StepDetail,
    NewStep
  },
  data () {
    return {
      isNewStepModalActive: false,
      isStepDetailModalActive: false,
      selectedStep: null
    }
  },
  computed: {
    application () {
      const id = this.$route.params.id
      return this.$store.getters['applications/getApplicationById'](+id)
    },
    steps () {
      const id = this.$route.params.id
      return this.$store.getters['steps/getStepsByApplicationId'](+id)
    }
  },
  methods: {
    openModal (step) {
      this.selectedStep = step
      this.isStepDetailModalActive = true
    }
  }
}
</script>

<style scoped>
  .section {
    margin-top: 2rem;
  }
</style>
