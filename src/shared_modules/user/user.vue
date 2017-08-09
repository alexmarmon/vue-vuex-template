<template lang="pug">
  .user-module
    button(@click="getUser") Get User
    p {{ fullName }}
    p {{ person.phone }}
</template>

<script>
import { mapState, mapGetters, /* mapMutations, */ mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      person: state => state.user.person,
    }),
    ...mapGetters([
      'fullName',
    ]),
  },
  methods: {
    // ...mapMutations([
    //   'changeUser',
    // ]),
    ...mapActions([
      'getUser',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import './user.scss';
</style>
