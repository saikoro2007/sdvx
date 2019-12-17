<template>
	<v-container>
		<v-data-table
			:headers="headers"
			:items="filteredItems"
			:items-per-page="100"
		>
		</v-data-table>
	</v-container>
</template>

<style scoped lang="scss">
</style>

<script>
import _ from 'lodash'
export default {
	props: ['score', 'temp', 'levelFilter'],
	data: () => ({
    search: '',
    headers: [
      { text: 'title', value: 'title' },
      { text: 'level', value: 'level' },
			{ text: 'difficulty', value: 'difficulty' },
			{ text: 'clearlamp', value: 'clearlamp' },
			{ text: 'grade', value: 'grade' },
      { text: 'score', value: 'score' },
    ],
	}),
	computed: {
		filteredItems: function () {
			if (!this.levelFilter) {
				return this.temp
			}
			// クソ実装した ぜったいもっとなんかある
			return _(this.temp).filter(score => _.includes(this.levelFilter, String(score.level))).value()
		},
	}
}
</script>