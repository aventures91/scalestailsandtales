// @ts-check
// This configuration includes elements from the Hugo `config.toml` file.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scales&Tails',
  tagline: 'Your go-to guide for happy, healthy bearded dragons.',
  favicon: 'img/favicon.ico',

  // Site URL and Base URL
  url: 'https://scalestailsandtales.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'aventures91', // Replace with your GitHub organization or username
  projectName: 'scalestailsandtales', // Replace with your repo name

  // Handling broken links and markdown links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/aventures91/scalestailsandtales/tree/main/',
        },
        blog: {
          path: './blog',
          routeBasePath: '/blog',
          showReadingTime: true,
          postsPerPage: 6,
          editUrl:
            'https://github.com/aventures91/scalestailsandtales/tree/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Scales & Tails',
      logo: {
        alt: 'Scales & Tails Logo',
        src: 'img/favicon.ico',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        {
          href: 'https://github.com/aventures91/scalestailsandtales',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: 'About', to: '/about' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aventures91/scalestailsandtales',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/your-discord-link',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scales & Tails. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/packages/prism-react-renderer/src/themes/github').default,
      darkTheme: require('prism-react-renderer/packages/prism-react-renderer/src/themes/dracula').default,
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-M9SWGE4XZ9', // Hugo `services.googleAnalytics.id`
        anonymizeIP: true,
      },
    ],
  ],
};
const tags = {
  '101': {
    label: '101', // Corrected to string
    permalink: '/101',
    description: 'Bearded Dragon Basics',
  },
  Health: {
    label: 'Health',
    permalink: '/Health',
    description: 'Everything there is to know about Bearded Dragon health and wellness.',
  },
  Habitat: {
    label: 'Habitat',
    permalink: '/habitat',
    description: 'Everything you need to know about Bearded Dragons Habitats.',
  },
  Diet: {
    label: 'Diet',
    permalink: '/diet',
    description: 'Everything you need to know about Bearded Dragons diet and feeding habits.',
  },
  Beginners: {
    label: 'Beginners',
    permalink: '/Beginners',
    description: 'Beginners guide to Bearded Dragons',
  },
  Behaviour: {
    label: 'Behaviour',
    permalink: '/Behaviour',
    description: 'Bearded Dragon Behaviour',
  },
  Enrichment: {
    label: 'Enrichment',
    permalink: '/enrichment',
    description: 'Bearded Dragon Enrichment',
  },
  'How To Guides': {
    label: 'How to Guides',
    permalink: '/guides',
    description: 'Step by step guides for everything bearded dragon related',
  },
  'Product Reviews': {
    label: 'Reviews',
    permalink: '/reviews',
    description: 'Reviews and comparisons of Bearded Dragon Products and services',
  },
};

export default config;
