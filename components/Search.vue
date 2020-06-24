<template>
  <section class="navbar-item">
    <b-autocomplete
      v-model="name"
      rounded
      :data="filteredDataArray"
      placeholder="e.g. jQuery"
      icon="magnify"
      clearable
      @select="option => selected = option"
    >
      <template slot="empty">
        No results found
      </template>
    </b-autocomplete>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      data: [
        'Angular',
        'Angular 2',
        'Aurelia',
        'Backbone',
        'Ember',
        'jQuery',
        'Meteor',
        'Node.js',
        'Polymer',
        'React',
        'RxJS',
        'Vue.js'
      ],
      name: '',
      selected: null
    }
  },
  computed: {
    filteredDataArray () {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .includes(this.name.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>

</style>
