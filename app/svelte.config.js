import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';

function getBasePath() {
	const branchName = process.env.BRANCH_NAME || 'master';
	const branchPath = branchName === 'master' ? '' : '/' + branchName;
	return branchPath;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang) => {
					const html = await codeToHtml(code, { lang, theme: 'nord' });
					return `{@html \`${escapeSvelte(html)}\`}`;
				}
			}
		})
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: getBasePath()
		}
	},

	extensions: ['.svelte', '.md'] // in order to handle .md files as well
};

export default config;
