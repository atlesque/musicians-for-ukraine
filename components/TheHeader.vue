<template>
  <nav
    ref="navMenu"
    class="fixed z-40 w-full transition-all duration-500 bg-white px-4"
  >
    <div
      class="
        flex
        items-center
        justify-between
        mx-auto
        nav-wrapper
        max-w-7xl
        lg:justify-start
        py-4
      "
    >
      <NuxtLink :to="localePath('/')" class="pr-4 text-2xl font-bold logo">
        <Logo />
      </NuxtLink>
      <div class="items-center flex-1 hidden lg:flex justify-between">
        <div class="flex">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="localePath(link.url)"
            class="nav-link whitespace-nowrap"
            :class="[
              {
                'nav-link--active': isLinkActive(link.url),
                'nav-link--cta': link.isCtaButton === true,
              },
            ]"
            ><span class="link-name">{{
              $t(link.translationKey)
            }}</span></NuxtLink
          >
        </div>
        <div class="flex items-center">
          <LanguageSwitcher class="nav-link" />
        </div>
      </div>
      <button
        class="flex items-center mobile-menu-toggle lg:hidden"
        @click="openMobileMenu"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-6 h-6"
        >
          <path
            fill="currentColor"
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
            class=""
          ></path>
        </svg>
      </button>
      <div v-show="isMobileMenuVisible === true" class="mobile-menu">
        <div class="flex flex-col">
          <div class="flex justify-between pb-4 items-center">
            <button class="logo--mobile" @click="handleMobileLinkClick('/')">
              <Logo class="" />
            </button>
            <button
              class="flex items-center w-6 h-full"
              @click="closeMobileMenu"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="w-full"
              >
                <path
                  fill="currentColor"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                  class=""
                ></path>
              </svg>
            </button>
          </div>
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="localePath(link.url)"
            class="flex nav-link--mobile"
            :class="[
              {
                'nav-link--active': isLinkActive(link.url),
                'nav-link--cta': link.isCtaButton === true,
              },
            ]"
            ><span class="link-name">{{
              $t(link.translationKey)
            }}</span></NuxtLink
          >
          <LanguageSwitcher
            class="nav-link--mobile mr-4"
            @changed="isMobileMenuVisible = false"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuVisible: false,
      navLinks: [
        {
          translationKey: "home.linkTitle",
          url: "/",
        },
        {
          translationKey: "scores.meta.title",
          url: "/music-scores",
        },
      ],
    };
  },
  watch: {
    $route() {
      this.isMobileMenuVisible = false;
    },
  },
  methods: {
    openMobileMenu() {
      this.isMobileMenuVisible = true;
    },
    closeMobileMenu() {
      this.isMobileMenuVisible = false;
    },
    handleMobileLinkClick(linkUrl) {
      this.$router.push(linkUrl);
    },
    isLinkActive(link) {
      return this.$route.path === link;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link--active {
  @apply font-extrabold;

  .link-name {
    @apply border-b-2;
    @apply border-orange;
  }

  &.nav-link--cta {
    .link-name {
      @apply border-light-green;
    }
  }
}

.nav-link {
  @apply px-4;
  @apply pt-8;
  @apply pb-4;
  @apply font-semibold;

  .link-name:hover,
  .link-name:active {
    @apply border-b-2;
    @apply border-orange;
  }
}

.nav-link--mobile {
  @apply font-bold;
  @apply py-3;
}

.nav-link--cta {
  @apply text-white;
  @apply bg-orange;
  @apply py-2;
  @apply ml-4;

  &.nav-link--mobile {
    @apply ml-0;
    @apply px-2;
    @apply self-start;
  }
}

.mobile-menu {
  @apply absolute;
  @apply inset-0;
  @apply w-screen;
  @apply h-screen;
  @apply px-4;
  @apply py-4;
  @apply bg-white;
  @apply text-black;
  @apply overscroll-contain;
  @apply z-10;
  @apply max-h-screen;
  @apply overflow-auto;
}
</style>
