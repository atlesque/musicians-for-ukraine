<template>
  <div class="inline-block relative text-left">
    <div>
      <button
        type="button"
        class="
          inline-flex
          items-center
          justify-center
          w-full
          rounded-md
          px-4
          py-2
          font-semibold
        "
        :class="[
          outline === true ? 'border border-black text-black' : 'bg-white',
        ]"
        aria-expanded="true"
        aria-haspopup="true"
        @click="isLanguageDropdownVisible = !isLanguageDropdownVisible"
      >
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 21.911 21.911"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="a"
            d="M10.955.563A10.955,10.955,0,1,0,21.911,11.518,10.955,10.955,0,0,0,10.955.563Zm3.635,15.8-.5.5a1.056,1.056,0,0,0-.273.473c-.067.25-.121.5-.211.745l-.768,2.07a8.828,8.828,0,0,1-1.884.207v-1.21a3.307,3.307,0,0,0-1-2.264,1.414,1.414,0,0,1-.414-1V14.466a1.409,1.409,0,0,0-.727-1.236c-.635-.351-1.538-.842-2.156-1.153a6.368,6.368,0,0,1-1.4-.961l-.035-.032a5.071,5.071,0,0,1-.8-.916C4.013,9.56,3.338,8.559,2.9,7.909a8.883,8.883,0,0,1,4.559-4.5l1.061.531a.707.707,0,0,0,1.023-.632v-.5A8.829,8.829,0,0,1,10.619,2.7l1.25,1.25a.707.707,0,0,1,0,1l-.207.207-.457.457a.354.354,0,0,0,0,.5l.207.207a.354.354,0,0,1,0,.5l-.353.353a.354.354,0,0,1-.25.1h-.4a.353.353,0,0,0-.246.1L9.727,7.8a.354.354,0,0,0-.07.411l.689,1.378a.353.353,0,0,1-.316.512H9.781a.353.353,0,0,1-.231-.087l-.41-.356a.708.708,0,0,0-.687-.137l-1.377.459a.528.528,0,0,0-.069.973L7.5,11.2a2.992,2.992,0,0,0,1.339.316c.465,0,1,1.206,1.414,1.414H13.2a1.414,1.414,0,0,1,1,.414l.6.6a1.347,1.347,0,0,1,.394.953,2.056,2.056,0,0,1-.606,1.457Zm3.83-4.035a1.06,1.06,0,0,1-.625-.44L17,10.692a1.059,1.059,0,0,1,0-1.176l.865-1.3a1.059,1.059,0,0,1,.408-.36l.573-.287a8.558,8.558,0,0,1,.861,5.074Z"
            transform="translate(0 -0.563)"
          />
        </svg>
        <span class="uppercase px-2">{{ $i18n.locale }}</span>
        <svg
          class="w-3 h-3"
          :class="{ 'transform rotate-180': position === 'up' }"
          fill="currentColor"
          viewBox="0 0 11.282 6.837"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="a"
            d="M6.079.181,11.1,5.2a.619.619,0,0,1,0,.876l-.586.585a.621.621,0,0,1-.876,0l-4-3.974-4,3.974a.621.621,0,0,1-.876,0L.182,6.071a.619.619,0,0,1,0-.876L5.2.181A.621.621,0,0,1,6.079.181Z"
            transform="translate(11.282 6.837) rotate(180)"
          />
        </svg>
      </button>
    </div>
    <div
      v-show="isLanguageDropdownVisible === true"
      class="
        origin-top-right
        absolute
        min-w-full
        right-0
        mt-2
        rounded-md
        shadow-md
        ring-1 ring-black ring-opacity-5
        focus:outline-none
        bg-white
      "
      :class="{ 'bottom-10': position === 'up' }"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <ul class="language px-2">
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="my-2"
          >
            <NuxtLink :to="switchLocalePath(locale.code)" @click="close"
              ><span class="uppercase">{{ locale.code }}</span> -
              {{ $t(`languages.${locale.code}`) }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  props: {
    position: {
      type: String,
      default: "down",
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLanguageDropdownVisible: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isLanguageDropdownVisible = false;
      }
    },
  },
};
</script>
