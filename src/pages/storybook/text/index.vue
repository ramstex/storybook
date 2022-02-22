<template>
	<div class="page-storybook-text">
		<MarkupContainer>
			<StorybookHeader
				title="Text"
			/>
		</MarkupContainer>

		<MarkupContainer>
			<MarkupGrid>
				<MarkupGridRow>
					<MarkupGridCol col="5">
						<p>Сайт рыбатекст поможет дизайнеру, <BaseLink to="/">верстальщику</BaseLink>, вебмастеру
							сгенерировать
							несколько
							абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
						<p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.</p>
					</MarkupGridCol>

					<MarkupGridCol align-v="center" col="3">
						<p>Абзац - тег <b>p</b> либо класс <b>p</b>.</p>
						<p>
							Отступ добавляется сверху всем абзацам, которые следуют после другого абзаца.<br />
							Модификатор <b>_no-margin</b> удаляет отступ.
						</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="5">
						<p class="_subtext">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
							несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
							оратору отточить навык публичных выступлений в домашних условиях.</p>
					</MarkupGridCol>

					<MarkupGridCol align-v="center" col="3">
						<p>Абзац с модификатором <b>_subtext</b>.</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow>
					<MarkupGridCol col="5">
						<p class="_footnote">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
							несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
							оратору отточить навык публичных выступлений в домашних условиях.</p>
					</MarkupGridCol>

					<MarkupGridCol align-v="center" col="3">
						<p>Абзац с модификатором <b>_footnote</b>.</p>
					</MarkupGridCol>
				</MarkupGridRow>

				<MarkupGridRow v-for="level in [1, 2, 3, 4, 5, 6]">
					<MarkupGridCol col="5">
						<component
							:is="`h${ level }`"
							:class="`h${ level }`"
						>
							Заголовок {{ level }} уровня
						</component>

						<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру. А тебе - не поможет.</p>
					</MarkupGridCol>

					<MarkupGridCol align-v="center" col="3">
						<p>Тег <b>h{{ level }}</b> либо класс <b>h{{ level }}</b>.</p>
						<p>
							Отступ добавляется снизу.<br />
							Модификатор <b>_no-margin</b> удаляет отступ.
						</p>
					</MarkupGridCol>
				</MarkupGridRow>
			</MarkupGrid>
		</MarkupContainer>
	</div>
</template>

<script>
import StorybookHeader from '../header.vue';
import BaseLink from '/src/components/base/link/index.vue';
import MarkupContainer from '../../../components/markup/container/index.vue';
import MarkupGrid, { MarkupGridRow, MarkupGridCol } from '../../../components/markup/grid/index.vue';

export default {
	name: 'PageStorybookInput',

	components: {
		StorybookHeader,
		BaseLink,
		MarkupContainer,
		MarkupGrid,
		MarkupGridRow,
		MarkupGridCol,
	},
}
</script>

<style lang="scss">
@use 'sass:math';

@import './src/style/globals/src.scss';

.page-storybook-text {
	.markup-grid-row {
		padding-top: math.div($gutter, 2);
		padding-bottom: math.div($gutter, 2);

		&:nth-child(even) {
			margin-top: math.div($gutter, 2);
			margin-bottom: math.div($gutter, 2);
			background-color: var(--color-basic-muted--light);
		}
	}
}
</style>
