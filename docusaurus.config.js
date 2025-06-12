import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Easto Subscriptions',
  tagline: 'Documentation for Easto Subscriptions',
  favicon: 'img/favicon.ico',
  url: 'https://yenpham103.github.io/selfhost',
  baseUrl: '/selfhost/',
  trailingSlash: false,
  organizationName: 'yenpham103',
  projectName: 'selfhost',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/yenpham103/selfhost/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/yenpham103/selfhost/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Easto Subscriptions',
      logo: {
        alt: 'Easto Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Hướng dẫn',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yenpham103/selfhost',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Hướng dẫn',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yenpham103/selfhost',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easto Subscriptions, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
