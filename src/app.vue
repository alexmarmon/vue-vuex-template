<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './shared_modules/header/header.vue';

export default {
  components: {
    'v-header': Header,
  },
};
</script>

<style lang="scss">
  @import './shared_styles/base.scss';
</style>
