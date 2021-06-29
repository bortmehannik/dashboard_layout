<template lang="pug">
  .header
    .container
      .row.align-center.space-between
        router-link(to='/')
          img.header__logo(src="../assets/logo.png")
        app-search
        .header__exit
          button.btn Выход
</template>

<script>
import AppSearch from './AppSearch'
export default {
  components: { AppSearch }
}
</script>
