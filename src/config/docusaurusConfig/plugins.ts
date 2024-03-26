import { PluginConfig } from "@docusaurus/types";

const config: PluginConfig[] = [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env",
        systemvars: false
      },
    ]
];

export default config;
