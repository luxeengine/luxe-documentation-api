// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightKbd from 'starlight-kbd';
import starlightAutoSidebar from 'starlight-auto-sidebar';

import luxeGrammar from "./src/grammars/luxe.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
			langs: [{
        ...luxeGrammar,
				aliases: ["lx"],
      }]
    },
	},
	integrations: [
		starlight({
			title: 'luxe API',
			expressiveCode: {
				useStarlightDarkModeSwitch: true,
				useStarlightUiThemeColors: true,
			},
			logo: {
				src: './src/assets/image/luxe-dark.svg',
			},
			customCss: [
				'./src/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'API overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'Versions',
					autogenerate: { directory: 'v' },
				}
			],
			plugins: [
				starlightAutoSidebar(),
				catppuccin({
          dark: { flavor: "frappe", accent: "mauve" },
          light: { flavor: "latte", accent: "pink" }
				}),
				starlightKbd({
					types: [
						{ id: 'default', label: 'Default Keys', default: true  },
						{ id: 'windows', label: 'Windows'  },
						{ id: 'mac', label: 'macOS' },
					],
				}),
			]
		}),
	],
});
