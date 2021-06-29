<template lang="pug">
  ul.breadcrumbs
    li
      router-link.breadcrumbs__link(to="/" v-if="$route.path !== '/'") Главная
      span.breadcrumbs__current.breadcrumbs__current--solo(v-else) {{ this.$route.name }}
    li(v-if="$route.path !== '/'")
      span.breadcrumbs__current {{ this.$route.name }}
</template>
