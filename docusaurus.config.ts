import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Python School',
  tagline: 'Practical Python for production engineers',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://python-school.example.com',
  baseUrl: '/',
  organizationName: 'being-ai-engineer',
  projectName: 'playbook',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Python School',
      logo: {
        alt: 'Python School Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'pythonSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/school/python/interview-prep/top-python-interview-questions',
          label: 'Interview Prep',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Python School',
          items: [
            {
              label: 'Start Here',
              to: '/docs/school/python/intro/what-is-python',
            },
            {
              label: 'Interview Prep',
              to: '/docs/school/python/interview-prep/top-python-interview-questions',
            },
          ],
        },
        {
          title: 'Core Tracks',
          items: [
            {
              label: 'Fundamentals',
              to: '/docs/school/python/fundamentals/variables',
            },
            {
              label: 'Collections',
              to: '/docs/school/python/collections/lists',
            },
            {
              label: 'System Design',
              to: '/docs/school/python/system-design/python-architecture',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Python School.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
