<template lang="pug">
  #app
    notifications
    the-navbar
    .container
      .row
        .col-4
          the-sidebar
        .col-8
          .counter
            app-breadcrumbs
            router-view
</template>

<script>
import TheNavbar from './components/TheNavbar'
import AppBreadcrumbs from './components/AppBreadcrumbs'
import TheSidebar from './components/TheSidebar'
import { mapActions } from 'vuex'

export default {
  updated () {
    this.pageName(this.$route.path)
    this.$notify({
      text: this.$route.name,
      duration: 1000
    })
  },
  mounted () {
    if (this.$route.name) {
      this.pageName(this.$route.path)
      this.$notify({
        text: this.$route.name,
        duration: 1000
      })
    }
  },
  methods: {
    ...mapActions(['pageName'])
  },
  components: { TheNavbar, AppBreadcrumbs, TheSidebar }
}
</script>
