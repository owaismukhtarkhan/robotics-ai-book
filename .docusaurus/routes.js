import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/robotics-ai-book/__docusaurus/debug',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug', '861'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/config',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/config', '150'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/content',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/content', '154'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/globalData',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/globalData', '7e6'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/metadata',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/metadata', 'e8f'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/registry',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/registry', '0ee'),
    exact: true
  },
  {
    path: '/robotics-ai-book/__docusaurus/debug/routes',
    component: ComponentCreator('/robotics-ai-book/__docusaurus/debug/routes', 'c65'),
    exact: true
  },
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
    component: ComponentCreator('/robotics-ai-book/docs', '647'),
    routes: [
      {
        path: '/robotics-ai-book/docs',
        component: ComponentCreator('/robotics-ai-book/docs', 'c13'),
        routes: [
          {
            path: '/robotics-ai-book/docs',
            component: ComponentCreator('/robotics-ai-book/docs', '314'),
            routes: [
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
                path: '/robotics-ai-book/docs/module-2-digital-twin',
                component: ComponentCreator('/robotics-ai-book/docs/module-2-digital-twin', 'aa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/module-2-digital-twin/sensors',
                component: ComponentCreator('/robotics-ai-book/docs/module-2-digital-twin/sensors', '7f0'),
                exact: true
              },
              {
                path: '/robotics-ai-book/docs/module-3-ai-robot-brain',
                component: ComponentCreator('/robotics-ai-book/docs/module-3-ai-robot-brain', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/robotics-ai-book/docs/module-4-vla-capstone',
                component: ComponentCreator('/robotics-ai-book/docs/module-4-vla-capstone', '755'),
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
