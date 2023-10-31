import type {Meta, StoryObj} from '@storybook/svelte';
import {expect} from '@storybook/jest';

import page from './+page.svelte';
import {within} from '@storybook/testing-library';

const meta = {
    title: 'Homepage',
    component: page,
} satisfies Meta<page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('Welcome to SvelteKit')).toBeInTheDocument();
    }
};
