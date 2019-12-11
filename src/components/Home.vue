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
              v-model="player1"
              label="Player 1"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="player2"
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
              required
            >
              Compare
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    player1: '',
    player2: '',
  }),
};
</script>
