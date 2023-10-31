/// <reference types='vitest' />
// @ts-ignore
import { sveltekit } from '@sveltejs/kit/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    cacheDir: '../../node_modules/.vite/toolapp',

    server: {
        fs: {
            allow: [
                '../../..'
            ]
        }
    },

	plugins: [sveltekit(), nxViteTsPaths()],

	test: {
        globals: true,
        cache: {
            dir: '../../node_modules/.vitest',
        },
        environment: 'jsdom',
        setupFiles: [
            'configs/vitest/vitest.config.ts',
            'configs/vitest/vitest.storybook.config.ts',
        ],
        include: ['apps/toolapp/src/**/*.{test,spec}.{js,ts}'],
	},
});
