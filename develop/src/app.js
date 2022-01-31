import { createApp, h } from 'vue';
import AppTemplate from './App.vue';
import Router from '../router.config.js';
import './style/index.scss';

const MyApp = createApp({
	render() {
		return h(AppTemplate);
	},
});

console.log(MyApp);
MyApp.use(Router);
MyApp.mount('#app');
