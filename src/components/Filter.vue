<template>
	<v-container>
      <p>{{ selected }}</p>
      <v-row>
        <v-checkbox v-model="checked" label="Lv15" value="15"></v-checkbox>
        <v-checkbox v-model="checked" label="Lv16" value="16"></v-checkbox>
        <v-checkbox v-model="checked" label="Lv17" value="17"></v-checkbox>
        <v-checkbox v-model="checked" label="Lv18" value="18"></v-checkbox>
        <v-checkbox v-model="checked" label="Lv19" value="19"></v-checkbox>
        <v-checkbox v-model="checked" label="Lv20" value="20"></v-checkbox>
      </v-row>
	</v-container>
</template>
<style scoped lang="scss">
</style>

<script>
export default {
	data: () => ({
    selected: [],
  }),
  computed: {
    checked: {
      get () {
        return this.selected
      },
      set (value) {
        this.selected = value
        this.$emit('updateFilter', this.selected)
      },
    },
  },
  methods: {
    onChange: event => {
      console.log(event)
    }
  }
}
</script>