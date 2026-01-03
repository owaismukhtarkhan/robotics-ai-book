import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ur/blog',
    component: ComponentCreator('/ur/blog', '5a6'),
    exact: true
  },
  {
    path: '/ur/blog/archive',
    component: ComponentCreator('/ur/blog/archive', '1c5'),
    exact: true
  },
  {
    path: '/ur/blog/authors',
    component: ComponentCreator('/ur/blog/authors', '186'),
    exact: true
  },
  {
    path: '/ur/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ur/blog/authors/all-sebastien-lorber-articles', '536'),
    exact: true
  },
  {
    path: '/ur/blog/authors/yangshun',
    component: ComponentCreator('/ur/blog/authors/yangshun', '09b'),
    exact: true
  },
  {
    path: '/ur/blog/first-blog-post',
    component: ComponentCreator('/ur/blog/first-blog-post', 'fdc'),
    exact: true
  },
  {
    path: '/ur/blog/long-blog-post',
    component: ComponentCreator('/ur/blog/long-blog-post', '941'),
    exact: true
  },
  {
    path: '/ur/blog/mdx-blog-post',
    component: ComponentCreator('/ur/blog/mdx-blog-post', 'db8'),
    exact: true
  },
  {
    path: '/ur/blog/tags',
    component: ComponentCreator('/ur/blog/tags', '14b'),
    exact: true
  },
  {
    path: '/ur/blog/tags/docusaurus',
    component: ComponentCreator('/ur/blog/tags/docusaurus', '591'),
    exact: true
  },
  {
    path: '/ur/blog/tags/facebook',
    component: ComponentCreator('/ur/blog/tags/facebook', 'bc0'),
    exact: true
  },
  {
    path: '/ur/blog/tags/hello',
    component: ComponentCreator('/ur/blog/tags/hello', '6e2'),
    exact: true
  },
  {
    path: '/ur/blog/tags/hola',
    component: ComponentCreator('/ur/blog/tags/hola', '2c4'),
    exact: true
  },
  {
    path: '/ur/blog/welcome',
    component: ComponentCreator('/ur/blog/welcome', 'c57'),
    exact: true
  },
  {
    path: '/ur/markdown-page',
    component: ComponentCreator('/ur/markdown-page', 'c0a'),
    exact: true
  },
  {
    path: '/ur/docs',
    component: ComponentCreator('/ur/docs', '98e'),
    routes: [
      {
        path: '/ur/docs',
        component: ComponentCreator('/ur/docs', '78f'),
        routes: [
          {
            path: '/ur/docs',
            component: ComponentCreator('/ur/docs', 'a7b'),
            routes: [
              {
                path: '/ur/docs/body/',
                component: ComponentCreator('/ur/docs/body/', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/brain/',
                component: ComponentCreator('/ur/docs/brain/', '571'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/category/tutorial---basics',
                component: ComponentCreator('/ur/docs/category/tutorial---basics', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/category/tutorial---extras',
                component: ComponentCreator('/ur/docs/category/tutorial---extras', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/edge/',
                component: ComponentCreator('/ur/docs/edge/', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/foundations/',
                component: ComponentCreator('/ur/docs/foundations/', '291'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/intro',
                component: ComponentCreator('/ur/docs/intro', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/ur/docs/tutorial-basics/congratulations', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ur/docs/tutorial-basics/create-a-blog-post', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ur/docs/tutorial-basics/create-a-document', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ur/docs/tutorial-basics/create-a-page', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ur/docs/tutorial-basics/deploy-your-site', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/ur/docs/tutorial-basics/markdown-features', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/ur/docs/tutorial-extras/manage-docs-versions', '7b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/ur/docs/tutorial-extras/translate-your-site', '114'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ur/',
    component: ComponentCreator('/ur/', 'f17'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
