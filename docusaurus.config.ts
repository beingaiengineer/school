import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BAE School',
  tagline: 'Learn engineering, one topic at a time',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://school.beingaiengineer.com',
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
      title: 'BAE School',
      logo: {
        alt: 'BAE School Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Courses',
          position: 'left',
          items: [
            { type: 'docSidebar', sidebarId: 'pythonSidebar', label: '🐍 Python' },
            { type: 'docSidebar', sidebarId: 'agenticFrameworksSidebar', label: '🤖 Agentic Frameworks' },
            { type: 'docSidebar', sidebarId: 'appSecuritySidebar', label: '🛡️ App Security' },
            { type: 'docSidebar', sidebarId: 'cicdPipelinesSidebar', label: '🚀 CI/CD Pipelines' },
            { type: 'docSidebar', sidebarId: 'gitWorkflowsSidebar', label: '🌿 Git Workflows' },
            { type: 'docSidebar', sidebarId: 'incidentManagementSidebar', label: '🚨 Incident Management' },
            { to: '#', label: '⚡ FastAPI Concepts (Soon)' },
            { to: '#', label: '📊 Observability (Soon)' },
            { to: '#', label: '🧩 OOP & Patterns (Soon)' },
            { to: '#', label: '🚢 Release & Deployment (Soon)' },
            { to: '#', label: '📏 Requirements & Estimation (Soon)' },
            { to: '#', label: '🔄 SDLC & Agile (Soon)' },
            { to: '#', label: '📈 SLIs & SLOs (Soon)' },
            { to: '#', label: '🧪 Software Testing (Soon)' },
            { to: '#', label: '👥 Team Structure (Soon)' },
          ],
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
          title: 'Courses',
          items: [
            {
              label: '🐍 Python',
              to: '/docs/school/python/intro/what-is-python',
            },
          ],
        },
        {
          title: 'Python Tracks',
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
        {
          title: 'Resources',
          items: [
            {
              label: 'Interview Prep',
              to: '/docs/school/python/interview-prep/top-python-interview-questions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BAE School. Built with ❤️ by Being AI Engineer.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
