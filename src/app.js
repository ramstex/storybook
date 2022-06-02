import { createApp, h } from 'vue';
import AppTemplate from '/src/App.vue';
import Router from '/config/router.config.js';
import '/src/style/index.scss';

const MyApp = createApp({
	render() {
		return h(AppTemplate);
	},
});

MyApp.use(Router);
MyApp.mount('#app');
