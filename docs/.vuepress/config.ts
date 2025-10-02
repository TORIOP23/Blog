import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/Blog/",
  locales: {
    "/": {
      lang: "en-US",
      title: "TORIOP",
      description: "Java Backend Developer",
    },
    "/vi/": {
      lang: "vi-VN",
      title: "TORIOP",
      description: "Java Backend Developer",
    },
  },
  theme,

  plugins: [],

  bundler: viteBundler(),
});
