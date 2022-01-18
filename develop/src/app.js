import Vue from 'vue';
import App from './App.vue';
import Router from './plugins/router.js';
import Helper from './plugins/helper.js';
import './style/index.scss';

Vue.use(Helper);

new Vue({
	el: '#app',
	router: Router,

	render: h => h(App),
});
