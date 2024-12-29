import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Bibliotecateca/__docusaurus/debug',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug', '2f1'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/config',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/config', 'c3d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/content',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/content', '100'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/globalData',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/globalData', '620'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/metadata',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/metadata', '53e'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/registry',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/registry', 'b50'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/routes',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/routes', 'b1d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/biblioteca',
    component: ComponentCreator('/Bibliotecateca/biblioteca', '476'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog',
    component: ComponentCreator('/Bibliotecateca/blog', '76c'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/archive',
    component: ComponentCreator('/Bibliotecateca/blog/archive', 'd3f'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/first-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/first-blog-post', '445'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/long-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/long-blog-post', '11d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/mdx-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/mdx-blog-post', 'ea0'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags',
    component: ComponentCreator('/Bibliotecateca/blog/tags', '553'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/docusaurus',
    component: ComponentCreator('/Bibliotecateca/blog/tags/docusaurus', '5f1'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/facebook',
    component: ComponentCreator('/Bibliotecateca/blog/tags/facebook', 'edb'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/hello',
    component: ComponentCreator('/Bibliotecateca/blog/tags/hello', 'fd7'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/hola',
    component: ComponentCreator('/Bibliotecateca/blog/tags/hola', '933'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/welcome',
    component: ComponentCreator('/Bibliotecateca/blog/welcome', 'b24'),
    exact: true
  },
  {
    path: '/Bibliotecateca/markdown-page',
    component: ComponentCreator('/Bibliotecateca/markdown-page', 'ff8'),
    exact: true
  },
  {
    path: '/Bibliotecateca/SobreNos',
    component: ComponentCreator('/Bibliotecateca/SobreNos', '563'),
    exact: true
  },
  {
    path: '/Bibliotecateca/Wiki',
    component: ComponentCreator('/Bibliotecateca/Wiki', 'e4e'),
    exact: true
  },
  {
    path: '/Bibliotecateca/docs',
    component: ComponentCreator('/Bibliotecateca/docs', '379'),
    routes: [
      {
        path: '/Bibliotecateca/docs/category/tutorial---basics',
        component: ComponentCreator('/Bibliotecateca/docs/category/tutorial---basics', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/category/tutorial---extras',
        component: ComponentCreator('/Bibliotecateca/docs/category/tutorial---extras', '10c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/intro',
        component: ComponentCreator('/Bibliotecateca/docs/intro', '074'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/congratulations', 'b7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/create-a-blog-post', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/create-a-document', '0b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/create-a-page', 'd91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/deploy-your-site', '370'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-basics/markdown-features', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-extras/manage-docs-versions', '187'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Bibliotecateca/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Bibliotecateca/docs/tutorial-extras/translate-your-site', '392'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Bibliotecateca/',
    component: ComponentCreator('/Bibliotecateca/', '1cf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
