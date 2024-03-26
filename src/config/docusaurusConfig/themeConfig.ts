import {themes as prismThemes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import { ThemeConfig } from '@docusaurus/types';

const config: ThemeConfig = {
  image: 'img/docusaurus-social-card.jpg',
  colorMode: {
    respectPrefersColorScheme: true
  },
  navbar: {
    title: 'Tim\'s Wiki',
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
            label: 'Tutorial',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Wiki.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;


export default config;
