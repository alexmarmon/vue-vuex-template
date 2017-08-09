<template lang="pug">
  p.text-module {{ text }}
</template>

<script>
export default {
  props: { text: { type: String, required: true } },
};
</script>

<style lang="scss" scoped>
  @import './text.scss';
</style>
