import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Shim for Node.js v25+ localStorage compatibility during SSG
try {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  if (!descriptor || descriptor.configurable) {
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        get length() { return 0 },
        key: () => null,
      },
      writable: true,
      configurable: true,
    });
  }
} catch (e) {
  // Ignore errors
}

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Definitive Guide to Physical AI',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://owaismukhtarkhan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/robotics-ai-book/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'owaismukhtarkhan', // Usually your GitHub org/user name.
  projectName: 'robotics-ai-book', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      ur: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI Book',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Textbook',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/owaismukhtarkhan/robotics-ai-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {
              label: 'Module 1: Nervous System',
              to: '/docs/module-1-robotic-nervous-system/',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module-2-digital-twin/',
            },
            {
              label: 'Module 3: AI Brain',
              to: '/docs/module-3-ai-robot-brain/',
            },
            {
              label: 'Module 4: VLA Capstone',
              to: '/docs/module-4-vla-capstone/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Hardware Lab',
              to: '/docs/hardware-lab/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/owaismukhtarkhan/robotics-ai-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Owais Mukhtar Khan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
