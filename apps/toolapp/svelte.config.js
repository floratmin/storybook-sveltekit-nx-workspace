import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import fs from 'fs';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
            pages: '../../dist/apps/toolapp',
            assets: '../../dist/apps/toolapp',
            fallback: undefined,
            precompress: false,
            strict: true,
        }),
        typescript: {
            config: (config) => {
                console.log(config);
                const tsconfigBase = JSON.parse(fs.readFileSync(path.join(process.cwd(), '../../tsconfig.base.json')));
                config.compilerOptions.paths = {
                    ...config.compilerOptions.paths,
                    ...tsconfigBase.compilerOptions.paths,
                };
                return config;
            },
        }
	},
};

export default config;
