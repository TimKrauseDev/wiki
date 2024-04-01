import {themes as prismThemes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import { ThemeConfig } from '@docusaurus/types';

const config: ThemeConfig = {
  image: 'img/docusaurus-social-card.jpg',
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
  navbar: {
    logo: {
      alt: 'Tim\'s Wiki',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'recipesSidebar',
        position: 'left',
        label: 'Recipes',
      },
      {
        type: 'docSidebar',
        sidebarId: 'plantsSidebar',
        position: 'left',
        label: 'Plants',
      },
      {
        type: 'docSidebar',
        sidebarId: 'miscSidebar',
        position: 'left',
        label: 'Misc',
      },
      {
        href: 'https://github.com/TimKrauseDev/wiki',
        label: 'GitHub',
        position: 'right',
      },
      {
        href: 'http://192.168.1.230/',
        label: 'Printer',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Recipes',
            to: '/docs/recipes/intro',
          },
          {
            label: 'Plants',
            to: '/docs/plants/current',
          },
          {
            label: 'Misc',
            to: '/docs/misc/intro',
          },
        ],
      },
      {
        title: 'Tim',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/TimKrauseDev',
          },
          {
            label: 'Portfolio',
            href: 'https://timkrause.dev',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Tim's Wiki.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;


export default config;
