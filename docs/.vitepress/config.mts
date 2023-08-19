import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "seti",
  description: "A dev page",
  vite: {
      ssr: {
        noExternal: ["vuetify"]
      }
  },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Notes", link: "/notes/", activeMatch: "/notes/.*" },
      { text: "Blog", link: "/blog" },
    ],

    sidebar: {
      "/notes": [
        {
          text: "Notes",
          link: "/notes/",
          items: [
            {
              text: "Machine Learning",
              link: "/notes/machine-learning/",
              collapsed: false,
              items: [
                {
                  text: "Supervised Learning",
                  link: "/notes/machine-learning/supervised-learning/",
                  collapsed: true,
                  items: [
                    { "text": "Linear Regression", link: "/notes/machine-learning/supervised-learning/linear-regression"},
                    { "text": "Logistic Regression", link: "/notes/machine-learning/supervised-learning/logistic-regression"}
                  ],
                },
                {
                  text: "Unsupervised Learning",
                  link: "/notes/machine-learning/unsupervised-learning/",
                },
              ],
            },
            { text: "Data Science", link: "/notes/data-science/" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/gitseti" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/till-seeberger-23357b184",
      },
    ],
  },
});
