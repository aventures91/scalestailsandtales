/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scales, Tails & Tales',
  tagline: 'Your go-to guide for happy, healthy bearded dragons.',
  favicon: 'Scales_and_Tails_favicon_square.svg',

  url: 'https://www.scalestailsandtales.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'aventures91',
  projectName: 'scalestailsandtales',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/', // Makes the blog the root path
          postsPerPage: 10, // Optional: Number of posts per page
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
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
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scales & Tails. Built with Docusaurus.`,
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-M9SWGE4XZ9',
        anonymizeIP: true,
      },
    ],
  ],

  customFields: {
    cname: 'www.scalestailsandtales.com',
    gtmHead: `
      <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"></script>
    `,
    gtmBody: `
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    `,
  },
};

export default config;
