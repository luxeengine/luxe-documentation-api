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
				aliases: ["lx", "wren"],
			}]
		},
	},
	integrations: [
		starlight({
			title: 'luxe API',
			head: [
				{
					tag: 'script',
					attrs: {
						// Tweaks to the script URL or attributes can be made here.
						src: 'https://stats.anypercent.studio/script.js',
						'data-website-id': 'f606ae51-5dc7-4613-81c9-40201fc7451b',
						defer: true,
					},
				},
			],
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
