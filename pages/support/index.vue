<template>
  <main>
    <section class="hero text-center flex flex-col items-center mb-8">
      <div class="w-32 h-32 mb-4">
        <img
          src="~/assets/images/logo/musicians-for-ukraine-logo-lotte.png"
          alt="Logo"
        />
      </div>
      <h1 class="max-w-xl headline-xl">
        {{ $t(`support.meta.title`) }}
      </h1>
      <p class="md:text-xl max-w-md md:max-w-2xl mb-8">
        {{ $t(`support.meta.description`) }}
      </p>
    </section>
    <section class="max-w-2xl mx-auto px-8 md:px-0 nuxt-content">
      <div v-html="$t(`support.fullDescription`)"></div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "fullWidth",
  head() {
    return this.$getHeadMetadata({
      title: this.$t(`support.meta.title`),
      description: this.$t(`support.meta.description`),
    });
  },
};
</script>

