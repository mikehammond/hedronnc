<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by1">
        <img
          src="https://bit.ly/2CuBVOI"
          alt="Image"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            Application Form Tasks
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
          :value="25"
          show-value
          format="percent"
        />
        <div class="field">
          <b-checkbox
            true-value="Yes"
            false-value="No"
          >
            Fill Application Form
          </b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            true-value="Yes"
            false-value="No"
          >
            Get Transcripts and Other Documentations
          </b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            true-value="Yes"
            false-value="No"
          >
            Submit Application
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
  data () {
    return {
      newTask: ''
    }
  }
}
</script>

<style scoped>

</style>
