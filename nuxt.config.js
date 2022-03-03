export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Supporting Ukraine through music",
    titleTemplate: "%s | Musicians for Ukraine",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Musicians supporting Ukraine through music. Join the movement!",
      },
      /*
        Open Graph Information
      */
      {
        hid: "og:title",
        property: "og:title",
        content: "Supporting Ukraine through music",
        template: "%s | Musicians for Ukraine",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Musicians supporting Ukraine through music. Join the movement!",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: process.env.NUXT_ENV_SITE_DOMAIN || "musiciansforukraine.com",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          `https://${
            process.env.NUXT_ENV_SITE_DOMAIN || "musiciansforukraine.com"
          }/images/og-image.png` ||
          "https://musiciansforukraine.com/images/og-image.png",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/head-metadata.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "nl",
            iso: "nl-NL",
            file: "nl.json",
          },
          {
            code: "fr",
            iso: "fr-FR",
            file: "fr.json",
          },
          {
            code: "en",
            iso: "en-US",
            file: "en.json",
          },
          {
            code: "de",
            iso: "de-DE",
            file: "de.json",
          },
          {
            code: "ru",
            iso: "ru-RU",
            file: "ru.json",
          },
          {
            code: "uk",
            iso: "uk-UA",
            file: "uk.json",
          },
        ],
        lazy: true,
        langDir: "i18n/locales/",
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
        },
        baseUrl: "https://musiciansforukraine.com",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true, // recommended for SEO
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router configuration
  router: {
    middleware: "remove-double-slash",
  },
};
