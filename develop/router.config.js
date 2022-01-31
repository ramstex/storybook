import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './src/pages/home/index.vue';
import PageStorybook from './src/pages/storybook/index.vue';

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
	],
});

export default Router;
