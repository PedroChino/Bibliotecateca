// docusaurus.config.js

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Bibliotecateca',
  tagline: 'Um site incrível para organizar sua biblioteca',
  url: 'https://pedrochino.github.io',
  baseUrl: '/Bibliotecateca/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'PedroChino', // Seu nome de usuário ou organização no GitHub.
  projectName: 'Bibliotecateca', // Nome do repositório no GitHub.

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/PedroChino/Bibliotecateca/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/PedroChino/Bibliotecateca/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bibliotecateca',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/intro', label: 'Documentação', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/biblioteca', label: 'Biblioteca', position: 'left' }, // Aba Biblioteca
          {
            href: 'https://github.com/PedroChino/Bibliotecateca',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PedroChino/Bibliotecateca',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pedro Chino. Feito com Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
