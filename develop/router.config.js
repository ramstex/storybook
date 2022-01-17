import PageHome from './src/pages/home/index.vue';
import PageStorybook from './src/pages/storybook/index.vue';

export default {
	mode: 'history',

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
}