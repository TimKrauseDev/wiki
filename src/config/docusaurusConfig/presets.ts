import type * as Preset from '@docusaurus/preset-classic';
import { PresetConfig } from '@docusaurus/types';
import { DeepPartial } from 'utility-types';


const config: DeepPartial<PresetConfig[]> = [
    [
      'classic',
      {
        docs: {
          sidebarPath: './src/config/docusaurusConfig/sidebars.ts',
          editUrl: 'https://github.com/TimKrauseDev/wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/TimKrauseDev/wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('../../styles/custom.scss'),
        },
        gtag: {
          trackingID: 'G-8C0SYEC0GN',
        },
      } satisfies Preset.Options,
    ],
];

export default config;
