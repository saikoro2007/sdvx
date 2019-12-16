<template>
  <v-container>
    <v-form>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="playerName1"
              label="Player 1"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="playerName2"
              label="Player 2"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="1"
          >
            <v-btn
              color="primary"
              rounded
              outlined
              @click="action"
            >
              Compare
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <score-table
      v-if="this.playerData1.length > 0"
      :score="playerData1"
      :temp="temp"
    ></score-table>
  </v-container>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import ScoreTable from './ScoreTable.vue'
import json from '../../assets/score.json'

export default {
  name: 'Home',
  components: {
    ScoreTable: ScoreTable
  },

  data: () => ({
    playerName1: '',
    playerName2: '',
    playerData1: {},
    playerData2: {},
    temp: {},
    isProduction: false,
  }),

  methods: {
    async action () {
      Promise.all([
        this.callApi(this.playerName1),
        this.callApi(this.playerName2)
      ]).then(result => {
        this.temp = this.hoge(result[0])
        this.playerData1 = result[0]
        this.playerData2 = result[1]
      })
    },
    async callApi (playerName) {
      let response = {}
      if (this.isProduction) {
        await axios.get(`https://pyzzle.herokuapp.com/api/sdvx/${playerName}`)
          .then(res => {
            console.log(this.readJson())
            if (res.data.profile) {
              response = res.data.profile.tracks
            }
          })
        // TODO: 取得できなかったときのハンドリング
      } else {
        let res = json
        response = res.data.profile.tracks
      }
      return response
    },
    // 絶対もっとどうにかなるけどJSむずかしい
    hoge: scoreData => {
			return _(scoreData).map(item => {
				const title = item.title
				const id = item.id
				return _(item).omit(['title', 'id']).map((score, difficulty) => {
					return _.assign({title: title, musicId: id, difficulty: difficulty}, score)
				}).value()
			}).flatten().value()
    }
  }
  
}
</script>
