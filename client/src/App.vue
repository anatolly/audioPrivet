<template>
  <div id="app" class="container">
    <GreetingsTable/>
  </div>
</template>

<script>
import GreetingsTable from './components/GreetingsTable.vue'

export default {
  name: 'App',
  components: {
    GreetingsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
  color: #5c5c5c;
}
</style>
