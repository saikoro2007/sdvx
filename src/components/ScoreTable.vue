<template>
	<v-container>
		<apex-charts
			type="pie"
			:series="seriesTemp"
		></apex-charts>
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
import ApexCharts from 'apexcharts'

export default {
	name: 'ScoreTable',
	components: {
		ApexCharts: ApexCharts,
	},
	props: ['playerScore', 'playerName', 'levelFilter', 'rivalScore', 'rivalName'],
	data: () => ({
		search: '',
		defaultHeaders: [
			{ text: 'title', value: 'title' },
			{ text: 'level', value: 'level' },
			{ text: 'difficulty', value: 'difficulty' },
			{ text: 'clearlamp', value: 'clearlamp' },
			{ text: 'grade', value: 'grade' },
			// TODO: playerName表示
			{ text: 'playerScore', value: 'score' },
		],
		// TODO: 別のファイルに切り出す
		grades: ['A', 'A+', 'AA', 'AA+', 'AAA', 'AAA+', 'S'],
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
			
			// とりあえずスコア差ある曲だけ表示
			return !this.hasRivalScore ? _(hoge).filter((uni) => uni.score).value() : hoge//_(hoge).filter((uni) => uni.diff).value()
			//return _(hoge).filter((uni) => uni.diff).value()
		},
		score: function () {
			if (!this.hasRivalScore) {
				return this.playerScore
			}
			return this.setRivelScore(this.playerScore, this.rivalScore)
		},
		hasRivalScore: function () {
			return Object.keys(this.rivalScore).length > 0
		},
		headers: function () {
			if (!this.hasRivalScore) {
				return this.defaultHeaders
			} else {
				return this.defaultHeaders.concat([
					{text: this.rivalName, value: 'rivalScore'},
					{text: 'diff', value: 'diff'}
				])
			}
		},
		seriesTemp: function() {
			const hoge = _(this.filteredItems).groupBy(a => a.grade).mapValues(a => a.length).value()
			const result = this.grades.map(t => { return hoge[t] || 0})		
			return result
		},
	},
	methods: {
    // ライバルのスコアと比較して譜面ごとの差分要素を追加する
		setRivelScore (playerScore, rivalScore) {
			return _(playerScore).map((score, id) => {
				const rival = rivalScore[id]
				return {...score, rivalScore: rival.score, diff: score.score - rival.score}
			}).value()
		},
		hogefuga () {
			return {
				labels: this.grades,
			}
		},
	}
}
</script>