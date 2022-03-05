<template>
	<div class="page-storybook-input">
		<MarkupContainer>
			<StorybookHeader
				title="Input"
			/>

			<form action="">
			<MarkupGrid>
				<MarkupGridRow>
					<MarkupGridCol col="4">
						<UiInput
							v-model="v$.firstName.$model"
							required
							:invalid="v$.firstName.$error"
						>Имя</UiInput>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<p>{{ state.firstName }}</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="2" align-v="center">
						<h5>Email</h5>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<UiInput v-model="v2" type="email">Введите Email</UiInput>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<p>{{ v2 }}</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="2" align-v="center">
						<h5>Число</h5>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<UiInput v-model="v3" type="number" @invalid="onInvalid">Введите число</UiInput>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<p>{{ v3 }}</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="2" align-v="center">
						<h5>Пароль</h5>
					</MarkupGridCol>

					<MarkupGridCol col="4">
						<UiInput v-model="vPass" type="password" required @invalid="onInvalid">Пароль</UiInput>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="2"></MarkupGridCol>

					<MarkupGridCol col="4">
						<UiInput v-model="vConf" type="password" :pattern="vPass" required
								 @invalid="onInvalid">Подтвердите
						</UiInput>
					</MarkupGridCol>
				</MarkupGridRow>


				<MarkupGridRow>
					<button type="submit">Submit</button>
				</MarkupGridRow>
			</MarkupGrid>
			</form>
		</MarkupContainer>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import StorybookHeader from '../header.vue';
import MarkupContainer from '../../../components/markup/container/index.vue';
import MarkupGrid, { MarkupGridRow, MarkupGridCol } from '../../../components/markup/grid/index.vue';
import UiInput from '../../../components/ui/input/index.vue';

export default {
	name: 'PageStorybookInput',

	components: {
		StorybookHeader,
		MarkupContainer,
		MarkupGrid,
		MarkupGridRow,
		MarkupGridCol,
		UiInput,
	},

	setup(props, { emit }) {
		const v2 = ref('qwe@qwe.qwe');
		const v3 = ref(123);
		const vPass = ref('');
		const vConf = ref('');
		const onInvalid = () => {

		};

		const state = reactive({
			firstName: '',
		})
		const rules = {
			firstName: { required, $autoDirty: true },
		}
		const v$ = useVuelidate(rules, state);

		return {
			v2,
			v3,
			vPass,
			vConf,
			onInvalid,

			state,
			v$,
		}
	},
}
</script>

<style lang="scss">
@import '../../../style/modules/src.scss';

.page-storybook-input {
	.markup-grid-row {
		&:not(:last-child) {
			margin-bottom: 32px;
		}
	}
}
</style>
