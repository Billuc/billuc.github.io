import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { exec } from 'child_process';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';

function getBranchName() {
	return new Promise((res, rej) =>
		exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
			if (err) rej(err);
			if (typeof stdout !== 'string') rej('Not a string');

			res(stdout.trim());
		})
	);
}

function getBasePath() {
	return getBranchName().then((branch) => (branch === 'master' ? '' : '/' + branch));
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
			base: await getBasePath()
		}
	},

	extensions: ['.svelte', '.md'] // in order to handle .md files as well
};

export default config;
