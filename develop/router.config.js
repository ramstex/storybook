import PageHome from './src/pages/home/index.vue';
import PageContacts from './src/pages/contacts/index.vue';

export default {
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: PageHome,
		},
		{
			path: '/index.php/contacts',
			name: 'contacts',
			component: PageContacts,
		},
	],
}
