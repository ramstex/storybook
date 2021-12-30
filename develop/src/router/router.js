import Vue from 'vue';
import VueRouter from 'vue-router'

import PageHome from '../pages/home/index.vue';
import PageContacts from '../pages/contacts/index.vue';

Vue.use(VueRouter);

const Router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/index.php',
			name: 'home',
			redirect: '/',
			component: PageHome,
		},
		{
			path: '/index.php/contacts',
			name: 'contacts',
			component: PageContacts,
		},
	],
});

export default Router;
