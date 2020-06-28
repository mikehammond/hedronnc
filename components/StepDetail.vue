<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by1">
        <img
          :src="step ? step.bg : 'https://bit.ly/2CuBVOI'"
          alt="Image"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            {{ step ? step.title : '' }}
          </p>
          <p>
            <span>for Rosemarlines Effiong</span>
            <b-icon
              icon="account"
            />
          </p>
        </div>
        <div class="media-right">
          <p>Assigned To Karim Kasim</p>
          <figure class="is-flex image is-48x48 is-pulled-right">
            <img
              src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
              alt="Image"
              class="is-rounded"
            >
          </figure>
        </div>
      </div>

      <div class="content">
        <div class="field">
          <b-icon icon="checkbox-marked-outline" />
          <span><strong>Checklists</strong></span>
        </div>
        <b-progress
          type="is-primary"
          :value="progress"
          show-value
          format="percent"
        />
        <div
          v-for="task in tasks"
          :key="task.id"
          class="field"
        >
          <b-checkbox
            :value="task.checked"
            @change.native="toggleChecked(task.id)"
          >
            {{ task.title }}
          </b-checkbox>
        </div>
        <b-field label="Add New Task">
          <b-input
            v-model="newTask"
            type="textarea"
          />
        </b-field>
        <b-button
          type="is-primary"
          outlined
          :disabled="!newTask"
          @click="addTask"
        >
          Add Item
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepDetail',
  props: {
    application: {
      type: Object,
      required: true
    },
    step: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      newTask: ''
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['tasks/getTasksByStepId'](this.step.id)
    },
    progress () {
      return this.$store.getters['tasks/getStepProgress'](this.step.id)
    }
  },
  methods: {
    addTask () {
      const task = {
        id: Date.now(),
        applicationId: this.application.id,
        stepId: this.step.id,
        title: this.newTask,
        checked: false
      }
      this.$store.commit('tasks/add', task)
      this.newTask = ''
    },
    toggleChecked (id) {
      this.$store.commit('tasks/toggleChecked', id)
    }
  }
}
</script>

<style scoped>

</style>
