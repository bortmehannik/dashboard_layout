<template lang="pug">
  h1 Количество посещений страницы {{ $route.name }} — {{ $store.state.indexCounter }}
</template>
<script>
export default {
  name: 'Home'
}
</script>
