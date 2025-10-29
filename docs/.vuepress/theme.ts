import { hopeTheme } from "vuepress-theme-hope";
import enSidebar from "./sidebar/en-sidebar";
import viSidebar from "./sidebar/vi-sidebar";

export default hopeTheme({
  repo: "https://github.com/TORIOP23/Blog",
  locales: {
    "/": {
      sidebar: enSidebar,
      navbar: [
        {
          text: "Blog",
          link: "/blogs/",
        },
        {
          text: "Author",
          link: "/author/",
        },
      ],
    },
    "/vi/": {
      sidebar: viSidebar,
      navbar: [
        {
          text: "Blog",
          link: "/vi/blogs/",
        },
        {
          text: "Tác giả",
          link: "/vi/author/",
        },
      ],
    },
  },
  plugins: {
    blog: true,

    copyright: {
      license: "MIT",
      triggerLength: 100,
      maxLength: 700,
      global: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
    },
  },
});
