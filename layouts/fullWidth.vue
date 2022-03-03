<template>
  <div class="full-width-template">
    <TheHeader />
    <Nuxt class="page" />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
};
</script>
