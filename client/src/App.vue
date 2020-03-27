<template>
  <div id="app">
    <List/>
  </div>
</template>

<script>
//const API_URL = "http://localhost:3000/api/todos";
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
