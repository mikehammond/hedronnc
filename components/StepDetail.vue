<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by1">
        <img
          src="~/assets/application-bg.png"
          alt="Image"
        >
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">
        {{ step ? step.title : '' }}
      </p>
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
            @change.native="toggleChecked(task._id, task.checked)"
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
      return this.$store.getters['tasks/getTasksByStepId'](this.step._id)
    },
    progress () {
      const result = this.$store.getters['tasks/getStepProgress'](this.step._id)
      if (result === 100) {
        // Set Step completed to true
      } else {
        // Set Step completed to false
      }
      return result
    }
  },
  methods: {
    addTask () {
      const task = {
        userId: this.$auth.user.sub,
        applicationId: this.application._id,
        stepId: this.step._id,
        title: this.newTask,
        checked: false
      }
      this.$axios.$post('/tasks', task).then((data) => {
        this.$store.commit('tasks/add', data)
        this.newTask = ''
      }).catch(() => {
        // Show Error Notification
      })
    },
    toggleChecked (id, checked) {
      this.$axios.$patch(`/tasks/${id}`, { checked: !checked }).then(() => {
        this.$store.commit('tasks/toggleChecked', id)
      }).catch(() => {
        // Show Error Notification
      })
    }
  }
}
</script>

<style scoped>

</style>
