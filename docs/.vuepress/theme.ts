import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  repo: "https://github.com/TORIOP23/Blog",
  locales: {
    "/": {
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
