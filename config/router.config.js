import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '/src/pages/home/index.vue';
import PageStorybook from '/src/pages/storybook/index.vue';
import PageStorybookInput from '/src/pages/storybook/input/index.vue';
import PageStorybookText from '/src/pages/storybook/text/index.vue';

const Router =  createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: PageHome,
		},

		{
			path: '/index.php/storybook',
			name: 'storybook',
			component: PageStorybook,
		},

		{
			path: '/index.php/storybook/text',
			name: 'storybook-text',
			component: PageStorybookText,
		},

		{
			path: '/index.php/storybook/input',
			name: 'storybook-input',
			component: PageStorybookInput,
		},
	],
});

export default Router;
