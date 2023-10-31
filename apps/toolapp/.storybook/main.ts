import {mergeConfig} from 'vite';

import {StorybookConfig} from '@storybook/sveltekit';
/* eslint-disable @typescript-eslint/ban-ts-comment */
const storyBookConfig : StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/sveltekit',
        options: {
            builder: {
                viteConfigPath: 'apps/toolapp/vite.config.ts',
            },
        },
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            server: {
                fs: {
                    allow: [
                        '..',
                    ],
                },
            },
        });
    },
};

export default storyBookConfig;
