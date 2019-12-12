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
    <v-container>
      <v-data-table
        v-if="this.playerData1.length > 0"
        :headers="headers"
        :items="this.playerData1"
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
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data: () => ({
    expanded: [],
    playerName1: '',
    playerName2: '',
    playerData1: {},
    playerData2: {},
    search: '',
    headers: [
      { text: 'title', value: 'title' },
      { text: '', value: 'data-table-expand' },
    ],
  }),

  methods: {
    async action () {
      this.playerData1 = await this.callApi(this.playerName1)
      this.playerData2 = await this.callApi(this.playerName2)
    },
    async callApi (playerName) {
      let response = {}
      await axios.get(`/api/showUserData.json?username=${playerName}`)
        .then(res => {
          if (res.data.profile) {
            response = res.data.profile.tracks
          }
        })
      return response
    },
  }
  
}
</script>
