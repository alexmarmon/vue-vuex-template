<template lang="pug">
  .header-module
    router-link(v-for="link in links", :to="link.path", :key="link.name") {{ link.name }}
</template>

<script>
export default {
  data: () => ({
    links: [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  @import './header.scss';
</style>
