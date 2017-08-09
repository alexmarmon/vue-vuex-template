<template lang="pug">
  #home-page
    v-title
    v-user
</template>


<script>
import Title from './modules/title/title.vue';
import User from '../../shared_modules/user/user.vue';

export default {
  components: {
    'v-title': Title,
    'v-user': User,
  },
};
</script>
