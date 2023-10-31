import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: {
            /**
             * Storybook (specifically the interactions addon) requires that we use their
             *   instrumented version of jest-expect. So our storybook does so. To make
             *   these interactions still work in vitest we have @storybook/jest aliased
             *   to resolve to vitest which, critically, exports { expect } as well.
             *   see https://github.com/storybookjs/storybook/issues/17326
             */
            '@storybook/jest': 'vitest',
        },
    },
});
