<template>
	<div class="page-home">
		<h2 class="page-home__title">Home page</h2>
		<button @click="onAlertClick">alert</button>
		<button @click="onContactsClick">contacts</button>
	</div>
</template>

<script>
	export default {
		name: 'PageHome',

		methods: {
			onAlertClick() {
				alert('ALERT');
			},

			onContactsClick() {
				this.$router.push({ name: 'contacts' });
			},
		},
	}
</script>

<style lang="scss">
@import "src/style/globals/globals.scss";

.page-home {
	&__title {
		@include text_h1;
	}
}
</style>
