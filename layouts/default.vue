<template>
  <div class="default-template">
    <TheHeader />
    <Nuxt class="page max-w-2xl mx-auto px-8 md:px-0" />
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
