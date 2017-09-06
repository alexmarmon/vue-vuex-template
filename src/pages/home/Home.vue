<template lang="pug">
  #home-page
    v-title
    v-user
</template>


<script>
import User from 'shared_modules/user/user.vue';
import Title from './modules/title/title.vue';

export default {
  components: {
    'v-title': Title,
    'v-user': User,
  },
};
</script>
