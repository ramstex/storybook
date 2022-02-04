<template>
	<div class="page-storybook-input">
		<MarkupContainer>
			<StorybookHeader
				title="Input"
			/>
			<MarkupGrid>
				<MarkupGridRow>
					<MarkupGridCol col="2">
						<p>Обычный инрут</p>
					</MarkupGridCol>
					<MarkupGridCol col="4">
						<UiInput>Название инпута</UiInput>
					</MarkupGridCol>
				</MarkupGridRow>
			</MarkupGrid>
		</MarkupContainer>
	</div>
</template>

<script>
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
}
</script>

<style lang="scss">
.page-storybook-input {

}
</style>
