<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<button @click="onAlertClick">alert</button>
			<button @click="onContactsClick">storybook</button>
			<UiInput
				v-model="v$.name.$model"
			>имя</UiInput>
		</MarkupContainer>
	</div>
</template>

<script>
import MarkupContainer from '../../../src/components/markup/container/index.vue';
import UiInput from '../../../src/components/ui/input/index.vue';

import { ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
	name: 'PageHome',

	components: {
		MarkupContainer,
		UiInput,
	},

	setup() {
		const name = ref('');

		const onFocus = () => {
			console.log('FOCUS');
		};

		return {
			name,
			onFocus,
			v$: useVuelidate(),
		};
	},

	validations: {
		name: {
			required: helpers.withMessage('Обязательное поле', required),
		},
	},

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
