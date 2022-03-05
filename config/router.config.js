import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '/src/pages/home/index.vue';
import PageStorybook from '/src/pages/storybook/index.vue';
import PageStorybookText from '/src/pages/storybook/text/index.vue';
import PageStorybookColor from '/src/pages/storybook/color/index.vue';
import PageStorybookInput from '/src/pages/storybook/input/index.vue';

const Router =  createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: PageHome,
		},

		//	Далее идут демо-страницы.
		// {
		// 	path: '/index.php/storybook',
		// 	name: 'storybook',
		// 	component: PageStorybook,
		// },
		//
		// {
		// 	path: '/index.php/storybook/text',
		// 	name: 'storybook-text',
		// 	component: PageStorybookText,
		// },
		//
		// {
		// 	path: '/index.php/storybook/text',
		// 	name: 'storybook-text',
		// 	component: PageStorybookText,
		// },
		//
		// {
		// 	path: '/index.php/storybook/color',
		// 	name: 'storybook-color',
		// 	component: PageStorybookColor,
		// },

		{
			path: '/index.php/storybook/input',
			name: 'storybook-input',
			component: PageStorybookInput,
		},
	],
});

export default Router;
