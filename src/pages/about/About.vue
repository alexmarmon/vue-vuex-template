<template lang="pug">
  #about-page
    h3 About Page
    v-text(:text="text")
    v-user
</template>


<script>
import Text from './modules/text/text.vue';
import User from '../../shared_modules/user/user.vue';

export default {
  components: {
    'v-text': Text,
    'v-user': User,
  },
  data: () => ({
    text: 'Notice that the selected user persists when api calls are working',
  }),
};
</script>
