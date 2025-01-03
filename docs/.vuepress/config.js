import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "WeDance",
  description:
    "A participatory network transforming how dance communities connect, organize, and thrive together",

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          vue: "vue/dist/vue.runtime.esm-bundler.js",
        },
      },
    },
  }),
  theme: defaultTheme({
    repo: "WeDance/concept2",
    docsDir: "docs",
    editLink: true,

    navbar: [
      { text: "Vision", link: "/VISION.md" },
      {
        text: "Guide",
        children: [
          { text: "Posts", link: "/guide/posts.md" },
          { text: "Points", link: "/guide/points.md" },
          { text: "Voting", link: "/guide/voting.md" },
          { text: "Profiles", link: "/guide/profiles.md" },
          { text: "Event Types", link: "/guide/event-types.md" },
          { text: "Levels", link: "/guide/levels.md" },
          { text: "Navigation", link: "/guide/navigation.md" },
        ],
      },
      {
        text: "Strategy",
        children: [
          { text: "Dance Style First", link: "/strategy/dance-style-first.md" },
          { text: "City First", link: "/strategy/city-first.md" },
        ],
      },
      {
        text: "Business",
        children: [
          { text: "Model", link: "/business/model.md" },
          { text: "Epics", link: "/epics.md" },
        ],
      },
      {
        text: "Sources",
        children: [
          { text: "Introduction", link: "/source/00-intro.md" },
          {
            text: "Participatory Economy",
            link: "/source/01-participatory-economy.md",
          },
          {
            text: "Hacking Your Way To Critical Mass",
            link: "/source/02-hacking-your-way-to-critical-mass.md",
          },
          {
            text: "Network Effects",
            link: "/source/03-network-effects-arent-enough.md",
          },
          {
            text: "Critical Mass",
            link: "/source/04-critical-mass-complete-guide.md",
          },
          {
            text: "Micro Universe",
            link: "/source/05-micro-universe-niche-seeding.md",
          },
          {
            text: "Case Studies",
            link: "/source/06-groupon-clones-critical-mass-paypal.md",
          },
          {
            text: "Seeding Strategy",
            link: "/source/07-seeding-two-sided-businesses-strategy-chicken-and-egg-problem.md",
          },
          {
            text: "Platform Design",
            link: "/source/08-the-three-design-elements-for-designing-platforms.md",
          },
          {
            text: "Producer Strategy",
            link: "/source/09-how-to-use-your-producers-to-seed-the-platform.md",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsible: true,
          children: [
            "/guide/content.md",
            "/guide/event-types.md",
            "/guide/levels.md",
            "/guide/navigation.md",
            "/guide/profiles.md",
          ],
        },
      ],
      "/source/": [
        {
          text: "Sources",
          collapsible: true,
          children: [
            "/source/00-intro.md",
            "/source/01-participatory-economy.md",
            "/source/02-hacking-your-way-to-critical-mass.md",
            "/source/03-network-effects-arent-enough.md",
            "/source/04-critical-mass-complete-guide.md",
            "/source/05-micro-universe-niche-seeding.md",
            "/source/06-groupon-clones-critical-mass-paypal.md",
            "/source/07-seeding-two-sided-businesses-strategy-chicken-and-egg-problem.md",
            "/source/08-the-three-design-elements-for-designing-platforms.md",
            "/source/09-how-to-use-your-producers-to-seed-the-platform.md",
          ],
        },
      ],
      "/strategy/": [
        {
          text: "Strategy",
          collapsible: true,
          children: [
            "/strategy/dance-style-first.md",
            "/strategy/city-first.md",
          ],
        },
      ],
      "/business/": [
        {
          text: "Business",
          collapsible: true,
          children: ["/business/model.md"],
        },
      ],
      "/": [
        {
          text: "Getting Started",
          collapsible: true,
          children: ["/README.md", "/VISION.md", "/epics.md"],
        },
      ],
    },
  }),
});
