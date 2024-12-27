import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Bibliotecateca/__docusaurus/debug',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug', '29f'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/config',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/config', '1a6'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/content',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/content', 'f65'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/globalData',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/globalData', '04b'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/metadata',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/metadata', 'f9d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/registry',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/registry', '63d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/__docusaurus/debug/routes',
    component: ComponentCreator('/Bibliotecateca/__docusaurus/debug/routes', 'ab2'),
    exact: true
  },
  {
    path: '/Bibliotecateca/biblioteca',
    component: ComponentCreator('/Bibliotecateca/biblioteca', '0ab'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog',
    component: ComponentCreator('/Bibliotecateca/blog', '6e4'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/archive',
    component: ComponentCreator('/Bibliotecateca/blog/archive', 'eb4'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/first-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/first-blog-post', 'b19'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/long-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/long-blog-post', '64d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/mdx-blog-post',
    component: ComponentCreator('/Bibliotecateca/blog/mdx-blog-post', '7f2'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags',
    component: ComponentCreator('/Bibliotecateca/blog/tags', '65d'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/docusaurus',
    component: ComponentCreator('/Bibliotecateca/blog/tags/docusaurus', '6b6'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/facebook',
    component: ComponentCreator('/Bibliotecateca/blog/tags/facebook', 'a9f'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/hello',
    component: ComponentCreator('/Bibliotecateca/blog/tags/hello', 'b6b'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/tags/hola',
    component: ComponentCreator('/Bibliotecateca/blog/tags/hola', '56e'),
    exact: true
  },
  {
    path: '/Bibliotecateca/blog/welcome',
    component: ComponentCreator('/Bibliotecateca/blog/welcome', '6ae'),
    exact: true
  },
  {
    path: '/Bibliotecateca/markdown-page',
    component: ComponentCreator('/Bibliotecateca/markdown-page', 'd13'),
    exact: true
  },
  {
    path: '/Bibliotecateca/SobreNos',
    component: ComponentCreator('/Bibliotecateca/SobreNos', 'dc7'),
    exact: true
  },
  {
    path: '/Bibliotecateca/docs',
    component: ComponentCreator('/Bibliotecateca/docs', '31d'),
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
    component: ComponentCreator('/Bibliotecateca/', 'f1c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
