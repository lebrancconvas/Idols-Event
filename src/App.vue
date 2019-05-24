<template>
  <div id="app">
    <Header />
    <List />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    List
  }
}
</script>

<style>
  * {
    background: rgb(255, 237, 137);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
