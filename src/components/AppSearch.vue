<template lang="pug">
  .header__search(v-if="$route.path !== '/settings'")
    input.header__input(
      v-model="value"
      maxlength="10"
      @focus="showList = true"
    )
    ul.search-result(v-if="showList && value.length > 0")
      li.search-result__element(v-for="i in value") Элемент: {{ i }}
  .header__return(v-else)
    router-link.btn.btn-link(to="/") Вернуться к публичной части
</template>

<script>
export default {
  data: () => ({
    value: '',
    showList: false
  })
}
</script>
