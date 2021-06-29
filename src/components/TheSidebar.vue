<template lang="pug">
  ul.nav(v-if="$route.path === '/settings'")
    li.nav__element(v-for="element in menu.secondary")
      span.nav__link {{ element.name }}
  ul.nav(v-else)
    li.nav__element(v-for="element in menu.main")
      router-link.nav__link(:to="element.path") {{ element.name }}
</template>

<script>
export default {
  data: () => ({
    menu: {
      main: [
        {
          name: 'Главная',
          path: '/'
        }, {
          name: 'Сайт',
          path: '/site'
        }, {
          name: 'Заявки',
          path: '/requests'
        }, {
          name: 'Настройки',
          path: '/settings'
        }
      ],
      secondary: [
        {
          name: 'Группы пользователей'
        }, {
          name: 'Пользователи'
        }
      ]
    }
  })
}
</script>
