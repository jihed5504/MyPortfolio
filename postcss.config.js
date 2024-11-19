module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { // Add cssnano for CSS minification in production
      preset: "default",
    },
  },
};
