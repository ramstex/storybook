<template>
	<div class="app">
		<Layout>
			<div class="app__container">
				<router-link :to="{ name: 'home' }">home</router-link>
				<router-link :to="{ name: 'contacts' }">contacts</router-link>
				<router-view></router-view>
			</div>
		</Layout>
	</div>
</template>

<script>
import Layout from './layouts/index.vue';

export default {
	name: 'App',

	components: {
		Layout,
	},
}
</script>

<style lang="scss">
.app {
	width: 100%;
	&__container {
		width: 100%;
	}
}
</style>
