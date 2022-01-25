<template>
	<div class="page-home">
		<h2 class="page-home__title">Home page</h2>
		<button @click="onAlertClick">alert</button>
		<button @click="onContactsClick">storybook</button>
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
				this.$router.push({ name: 'storybook' });
			},
		},
	}
</script>

<style lang="scss">
@import "../../style/globals/src";

.page-home {
	&__title {
		@include text_h1;
	}
}
</style>
