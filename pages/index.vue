<template>
  <section class="section">
    <div class="columns is-variable is-8">
      <div class="column">
        <div class="card has-background-application-count has-text-white summary-card">
          <div class="card-content summary-card-content">
            <p>
              <b-icon
                icon="book-outline"
              />
              {{ applicationsCount }}
            </p>
            <p class="summary-card-content-text">
              Application Counts
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-background-application-completed has-text-white summary-card">
          <div class="card-content summary-card-content">
            <p>
              <b-icon
                icon="clock-outline"
              />
              10
            </p>
            <p class="summary-card-content-text">
              Pending Applications
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-background-application-pending has-text-white summary-card">
          <div class="card-content summary-card-content">
            <p>
              <b-icon
                icon="checkbox-marked-circle-outline"
              />
              10
            </p>
            <p class="summary-card-content-text">
              Completed Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  computed: {
    applicationsCount () {
      return this.$store.getters['applications/getApplicationsCount']
    }
  }
}
</script>
<style scoped>
  .section {
    margin-top: 2rem;
  }
  .summary-card {
    border-radius: 1rem;
  }
  .summary-card-content {
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
  }
  .summary-card-content-text {
    align-self: flex-end;
  }
</style>
