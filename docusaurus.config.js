import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Site',
  tagline: 'Documentation for Site',
  favicon: 'img/favicon.ico',
  url: 'https://yenpham103.github.io',
  baseUrl: '/selfhost',
  trailingSlash: false,
  organizationName: 'yenpham103',
  projectName: 'Side',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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

  // Multi-instance docs configuration
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-docs',
        path: 'api-docs',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars/api-sidebars.js'),
        editUrl: 'https://github.com/yenpham103/selfhost/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides-docs',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars/guides-sidebars.js'),
        editUrl: 'https://github.com/yenpham103/selfhost/edit/main/',
      },
    ],
  ],
  
  // Updated search configuration for multi-instance docs
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["vi", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: ['docs', 'api', 'guides'],
        docsDir: ['docs', 'api-docs', 'guides'],
      },
    ],
  ],
  
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Disable theme switching
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SITE',
      logo: {
        alt: 'SITE Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          to: 'https://github.com/yenpham103/selfhost',
          label: 'Contact & Support',
          position: 'right',
        },
        // Search sẽ tự động xuất hiện ở đây
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2012 SITE, SITE. Built with Docusaurus.`,
    },
  },
};