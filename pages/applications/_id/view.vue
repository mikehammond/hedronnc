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
            value="Kevin Garvey"
          />
        </b-field>
        <b-field label="Application Description">
          <b-input
            type="textarea"
            value="Kevin Garvey"
          />
        </b-field>
        <b-field label="Student Name">
          <b-input
            icon="account"
            value="Kevin Garvey"
          />
        </b-field>
        <b-field label="Start Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
          />
        </b-field>
        <b-field label="End Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
          />
        </b-field>
      </div>
      <div class="column">
        <p>Welcome</p>
      </div>
    </div>
    <div class="columns is-mobile has-text-centered">
      <div class="column">
        <b-button
          type="is-primary"
        >
          Update Application
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ViewApplication'
}
</script>

<style scoped>

</style>
