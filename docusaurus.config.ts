import type {Config} from '@docusaurus/types';
import {
  i18n,
  plugins,
  presets,
  themeConfig,
} from './src/config/docusaurusConfig/index';

const config: Config = {
  title: 'Tim\'s Wiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.timkrause.dev',
  baseUrl: '/',
  organizationName: '',
  projectName: 'wiki',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  noIndex: true,

  i18n,
  presets,
  plugins,
  themeConfig,
};

export default config;
