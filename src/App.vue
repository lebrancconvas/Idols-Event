<template>
  <div id="app">
    <Header />
    <List eventname="Idol Expo 2019" eventdate="30-05-2019" eventplace="Bitec Bangna"/>
    <List eventname="FESTIVE Idol Festival" eventdate="02-06-2019" eventplace="Siam Square" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import List from './components/List.vue'
import AddEvent from './components/AddEvent'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    List,
    AddEvent
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
