<template>
  <main>
    <section class="hero text-center flex flex-col items-center pb-16 md:py-32">
      <h1 class="max-w-xl headline-xl mb-8">
        {{ $t(`home.meta.title`) }}
      </h1>
      <p class="md:text-xl max-w-md md:max-w-2xl mb-10">
        {{ $t(`home.meta.description`) }}
      </p>
    </section>
  </main>
</template>

<script>
export default {
  layout: "fullWidth",
  head() {
    return this.$getHeadMetadata({
      title: this.$t(`home.meta.title`),
      description: this.$t(`home.meta.description`),
    });
  },
}
</script>
