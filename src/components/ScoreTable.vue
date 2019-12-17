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
	props: ['score', 'rivalScore', 'levelFilter'],
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
			if (!this.levelFilter.length) {
				return this.score
			}
			// TODO: v-data-tableのfilter機能を使う
			return _(this.score).filter(score => _.includes(this.levelFilter, String(score.level))).value()
		},
	}
}
</script>