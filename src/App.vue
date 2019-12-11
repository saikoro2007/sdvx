<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
  
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text>Link 1</v-btn>
          <v-btn text>Link 2</v-btn>
          <v-btn text>Link 3</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    
    <router-view></router-view>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  padding: 0;
}
.theme--light .v-toolbar--fixed {
  color: white;
  button {
    color: white;
  }
}
</style>
