<template>
	<div>
		<h1>Home page</h1>
		<button @click="onAlertClick">alert</button>
		<button @click="onContactsClick">contacts</button>
	</div>
</template>

<script>
	export default {
		methods: {
			onAlertClick() {
				alert('AAAAAAAAAAAAAAAAAAA');
			},

			onContactsClick() {
				this.$router.push('/index.php/contacts');
			},
		},
	}
</script>
