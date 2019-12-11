<template>
  <v-container>
    <v-form v-model="valid">
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
              @click="search"
            >
              Compare
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      {{ this.playerData1 }}
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data: () => ({
    playerName1: '',
    playerName2: '',
    playerData1: {},
    playerData2: {},
  }),

  methods: {
    async search () {
      await this.callApi(this.playerName1)
      await this.callApi(this.playerName2)
    },
    callApi (username) {
      console.log(username)
      let response = {}
      axios.get(`https://nearnoah.net/api/showUserData.json?username=${username}`)
        .then(res => (this.playerData1 = res))
      return response
    },
  }
}
</script>
