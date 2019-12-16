<template>
	<v-container>
		<v-data-table
			:headers="headers"
			:items="this.temp"
			:items-per-page="100"
		>
		</v-data-table>
	</v-container>
</template>

<style scoped lang="scss">
</style>

<script>
//import _ from 'lodash'
export default {
	props: ['score', 'temp'],
	data: () => ({
    search: '',
    headers: [
      { text: 'title', value: 'title' },
      { text: 'level', value: 'level' },
      { text: 'difficulty', value: 'difficulty' },
      { text: 'score', value: 'score' },
    ],
	}),
}
</script>