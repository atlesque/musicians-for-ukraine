<template>
  <footer class="w-full footer">
    <div class="text-black bg-orange bg-theme-primary pt-16 pb-8">
      <div class="flex flex-col max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row mb-8">
          <div class="flex flex-col sm:flex-row flex-1 px-8">
            <div
              class="
                flex flex-col
                lg:flex-row
                flex-1
                justify-between
                mb-8
                md:mb-0
              "
            >
              <div class="flex flex-col">
                <NuxtLink :to="localePath('/')" class="link">{{
                  $t(`home.linkTitle`)
                }}</NuxtLink>
                <NuxtLink :to="localePath('/music-scores')" class="link">{{
                  $t(`scores.meta.title`)
                }}</NuxtLink>
              </div>
            </div>
            <div class="flex flex-col flex-1 lg:justify-center lg:items-center">
              <div class="flex flex-col">
                <address class="flex flex-col pb-4">
                  <span>Musicians for Ukraine</span>
                </address>
                <a href="mailto:music@musiciansforukraine.com" class="pb-4 break-all link mb-8"
                  >music@musiciansforukraine.com</a
                >
                <small>Made with 🧡 by <a href="https://atlesque.dev">Atlesque</a></small>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-end px-8">
          <LanguageSwitcher
            class="text-black font-semibold"
            position="up"
            :outline="true"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  .link {
    @apply pb-4;
  }
}
</style>
