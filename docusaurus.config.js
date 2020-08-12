module.exports = {
  title: "VelocityX",
  tagline:
    "A minimalist Flutter framework inspired from TailwindCSS and SwiftUI for rapidly building custom designs.",
  url: "https://velocityx.dev",
  baseUrl: "/",
  favicon: "img/vx.svg",
  organizationName: "mtechviral", // Usually your GitHub org/user name.
  projectName: "velocityx",

  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['dart'],

    },// Usually your repo name.
    navbar: {
      title: "VelocityX",
      logo: {
        alt: "Vx Logo",
        src: "img/vx.svg",
      },
      links: [
        {
          to: "docs/install",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/iampawan/velocityx",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/install",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/velocityx",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/425920117856409",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/imthepk",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/iampawan/velocityx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MTechViral, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
