<template>
	<v-container>
		<v-data-table
			:headers="headers"
			:items="this.score"
			:items-per-page="100"
			:expanded.sync="expanded"
			color="secondary"
			show-expand
			class="elevation-5"
		>
			<template v-slot:top>
				<v-text-field
					v-model="search"
					label="Search"
					append-icon="search"  
				/>
			</template>
			<template v-slot:expanded-item="{ headers, item }">
				<td :colspan="headers.length">
				<v-list
					flat
					dense
				>
					<v-list-item-group>
						<v-list-item v-if="item.novice">
							NOV(Lv.{{ item.novice.level }}): {{ item.novice.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.advanced">
							ADV(Lv.{{ item.advanced.level }}): {{ item.advanced.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.exhaust">
							EXH(Lv.{{ item.exhaust.level }}): {{ item.exhaust.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.maximum">
							MXM(Lv.{{ item.maximum.level }}): {{ item.maximum.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.infinite">
							INF(Lv.{{ item.infinite.level }}): {{ item.infinite.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.gravity">
							GRV(Lv.{{ item.gravity.level }}): {{ item.gravity.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.heavenly">
							HVN(Lv.{{ item.heavenly.level }}): {{ item.heavenly.score || 0 }}
						</v-list-item>
						<v-list-item v-if="item.vivid">
							VVD(Lv.{{ item.vivid.level }}): {{ item.vivid.score || 0 }}
						</v-list-item>
					</v-list-item-group>
				</v-list>
				</td>
			</template>
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
    expanded: [],
    search: '',
    headers: [
      { text: 'title', value: 'title' },
      { text: '', value: 'data-table-expand' },
    ],
	}),
}
</script>