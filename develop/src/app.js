import Vue from 'vue';
import App from './App.vue';
import Router from './plugins/router.js';
import './style/index.scss';

new Vue({
	el: '#app',
	router: Router,

	render: h => h(App),
});
