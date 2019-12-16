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
    ></score-table>
  </v-container>
</template>

<script>
import axios from 'axios'
import ScoreTable from './ScoreTable.vue'

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
  }),

  methods: {
    async action () {
      Promise.all([
        this.callApi(this.playerName1),
        this.callApi(this.playerName2)
      ]).then(result => {
        this.playerData1 = result[0]
        this.playerData2 = result[1]
      })
    },
    async callApi (playerName) {
      let response = {}
      await axios.get(`https://pyzzle.herokuapp.com/api/sdvx/${playerName}`)
        .then(res => {
          if (res.data.profile) {
            response = res.data.profile.tracks
          }
        })
      // TODO: 取得できなかったときのハンドリング
      return response
    },
  }
  
}
</script>
