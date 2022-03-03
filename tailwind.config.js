module.exports = {
  mode: "jit",
  purge: ["./content/**/*.md"], // Whitelist classes used in Markdown files
  theme: {
    colors: {
      /*
        Base colours
      */
      white: "#ffffff",
      gray: "#e6e7e8",
      black: "#000f15",
      /*
        Primary colours
      */
      orange: "#FFD500",
      blue: "#005BBB",
      /*
        Secondary colours
      */
      yellow: "#efe086",
      "light-blue": "#8dc3cc",
      "dark-blue": "#153a51",
      "light-green": "#95d68b",
      green: "#29b285",
      "dark-green": "#207272",
      "darkest-green": "#003c42",
      /*
        Utility
      */
      transparent: "transparent",
      current: "currentColor",
    },
    fontSize: {
      /*
        Type scale: https://bit.ly/3yAyui5
        Format: [fontSize, lineHeight]
      */
      sm: ["0.8rem", 1.75], // Small - 12.80px
      base: ["1rem", 1.75], // Body - 16.00px
      lg: ["1.25rem", 1.3], // Heading 3 - 12.80px
      xl: ["1.563rem", 1.3], // Heading 2 - 25.00px
      "2xl": ["1.953rem", 1.3], // Heading 1 - 31.25px
      "3xl": ["2.441rem", 1.3], // Headlines - 39.06px
      "4xl": ["3.052rem", 1.3], // XL-Headlines - 48.83px
    },
  },
  plugins: [],
};
