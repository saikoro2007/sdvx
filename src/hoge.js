import _ from 'lodash'
export default class Score {
	constructor(hoge) {
			this.hoge = hoge
	}

	getFormatedScore () {
		return this.hoge.map(item => {
			const title = item.title
			const id = item.id
			return _(item).omit(['title', 'id']).map((score, difficulty) => {
				return {...score, id: `${id}_${difficulty}`, title: title, musicId: id, difficulty: difficulty}
			}).value()
		}).flatten().mapKeys(v => v.id).value()
	}
}