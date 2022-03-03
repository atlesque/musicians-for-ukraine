<template>
  <main class="mx-auto max-w-page page">
    <section class="px-10 pb-16 mx-auto text-center max-w-7xl">
      <h1 class="h1">
        <template v-if="error.message != null">
          {{ error.message }}
        </template>
        <template v-else-if="error.statusCode === 404">{{
          $t(`errors.pageNotFound`)
        }}</template
        ><template v-else>{{ $t(`errors.loadingPage`) }}</template>
      </h1>
      <NuxtLink
        v-if="(error.backButton || {}).url != null"
        :to="error.backButton.url"
        class="button-primary"
      >
        {{ error.backButton.text }}
      </NuxtLink>
      <NuxtLink v-else :to="localePath('/')" class="button-primary">{{
        $t(`general.backToHome`)
      }}</NuxtLink>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
};
</script>
