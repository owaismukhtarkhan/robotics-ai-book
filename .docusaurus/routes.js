import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/robotics-ai-book/blog',
    component: ComponentCreator('/robotics-ai-book/blog', 'fed'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/archive',
    component: ComponentCreator('/robotics-ai-book/blog/archive', '63f'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/authors',
    component: ComponentCreator('/robotics-ai-book/blog/authors', '7cb'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/robotics-ai-book/blog/authors/all-sebastien-lorber-articles', 'e2d'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/authors/yangshun',
    component: ComponentCreator('/robotics-ai-book/blog/authors/yangshun', '12e'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/first-blog-post',
    component: ComponentCreator('/robotics-ai-book/blog/first-blog-post', '98d'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/long-blog-post',
    component: ComponentCreator('/robotics-ai-book/blog/long-blog-post', '2fb'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/mdx-blog-post',
    component: ComponentCreator('/robotics-ai-book/blog/mdx-blog-post', '47c'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/tags',
    component: ComponentCreator('/robotics-ai-book/blog/tags', 'cf1'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/tags/docusaurus',
    component: ComponentCreator('/robotics-ai-book/blog/tags/docusaurus', 'cc4'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/tags/facebook',
    component: ComponentCreator('/robotics-ai-book/blog/tags/facebook', 'f3c'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/tags/hello',
    component: ComponentCreator('/robotics-ai-book/blog/tags/hello', 'acf'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/tags/hola',
    component: ComponentCreator('/robotics-ai-book/blog/tags/hola', 'f0d'),
    exact: true
  },
  {
    path: '/robotics-ai-book/blog/welcome',
    component: ComponentCreator('/robotics-ai-book/blog/welcome', 'a77'),
    exact: true
  },
  {
    path: '/robotics-ai-book/markdown-page',
    component: ComponentCreator('/robotics-ai-book/markdown-page', '068'),
    exact: true
  },
  {
    path: '/robotics-ai-book/docs',
    component: ComponentCreator('/robotics-ai-book/docs', '425'),
    routes: [
      {
        path: '/robotics-ai-book/docs',
        component: ComponentCreator('/robotics-ai-book/docs', '036'),
        routes: [
          {
            path: '/robotics-ai-book/docs',
            component: ComponentCreator('/robotics-ai-book/docs', 'a8c'),
            routes: [
              {
                path: '/robotics-ai-book/docs/body',
                component: ComponentCreator('/robotics-ai-book/docs/body', '018'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/brain',
                component: ComponentCreator('/robotics-ai-book/docs/brain', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/category/tutorial---basics',
                component: ComponentCreator('/robotics-ai-book/docs/category/tutorial---basics', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/category/tutorial---extras',
                component: ComponentCreator('/robotics-ai-book/docs/category/tutorial---extras', '9ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/edge',
                component: ComponentCreator('/robotics-ai-book/docs/edge', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/foundations',
                component: ComponentCreator('/robotics-ai-book/docs/foundations', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/hardware-lab',
                component: ComponentCreator('/robotics-ai-book/docs/hardware-lab', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/intro',
                component: ComponentCreator('/robotics-ai-book/docs/intro', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/module-1-robotic-nervous-system',
                component: ComponentCreator('/robotics-ai-book/docs/module-1-robotic-nervous-system', 'fb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/congratulations', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/create-a-blog-post', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/create-a-document', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/create-a-page', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/deploy-your-site', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-basics/markdown-features', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-extras/manage-docs-versions', '63d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/robotics-ai-book/docs/tutorial-extras/translate-your-site', 'cb9'),
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
    path: '/robotics-ai-book/',
    component: ComponentCreator('/robotics-ai-book/', '3a8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
