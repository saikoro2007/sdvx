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
			{ text: 'rival', value: 'rivalScore' },
			{ text: 'diff', value: 'diff' },
    ],
	}),
	computed: {
		filteredItems: function () {
			let hoge
			if (!this.levelFilter.length) {
				hoge = _.values(this.score)
			} else {
			// TODO: v-data-tableのfilter機能を使う
				hoge = _(this.score).filter(score => _.includes(this.levelFilter, score.level)).values().value()
			}
			console.log(hoge)
			// とりあえずスコア差ある曲だけ表示
			return _(hoge).filter((uni) => uni.diff).value()
		},
	}
}
</script>