<template>
	<div class="app">
		<div class="app__container">
			<router-link :to="{ name: 'home' }">home</router-link>
			<router-link :to="{ name: 'contacts' }">contacts</router-link>
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="scss">
.app {
	width: 100%;
	&__container {
		width: 100%;
	}
}
</style>
