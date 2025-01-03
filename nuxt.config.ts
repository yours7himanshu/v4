// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-02",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "shadcn-nuxt", "@nuxt/image"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  image: {
    provider: "ipx",
    quality: 80,
    format: ["webp", "jpeg"],
  },
});
