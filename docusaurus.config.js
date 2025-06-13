import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Easto Subscriptions',
  tagline: 'Documentation for Easto Subscriptions',
  favicon: 'img/favicon.ico',
  url: 'https://yenpham103.github.io',
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
  
  // Thêm themes cho local search
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["vi", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
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
        // Search sẽ tự động xuất hiện ở đây
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Easto Subscriptions, Inc. Built with Docusaurus.`,
    },
  },
};