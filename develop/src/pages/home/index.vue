<template>
	<div class="home-page">
		<h2 class="home-page__title">Home page</h2>
		<button @click="onAlertClick">alert</button>
		<button @click="onContactsClick">contacts</button>
	</div>
</template>

<script>
	export default {
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
.home-page {
	&__title {
		//noinspection SassScssResolvedByNameOnly
		@include text_h1;
	}
}
</style>
