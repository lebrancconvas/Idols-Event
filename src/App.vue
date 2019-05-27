<template>
  <div id="app">
    <Header />
    <AddEvent />
    <b-container>
      <b-row>
        <b-col>
          <List eventname="Idol Expo 2019" eventdate="30-05-2019" eventplace="Bitec Bangna"/>
        </b-col>
        <b-col>
          <List eventname="FESTIVE Idol Festival" eventdate="02-06-2019" eventplace="Siam Square" />
        </b-col>
        <b-col>
          <List eventname="Cat Expo" eventdate="02-06-2019" eventplace="Airport Link - Makkasan Station" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <List eventname="Blackpink : Kill this love in your area - Live in Bangkok" eventdate="31-09-2019" eventplace="Impact Arena Muangthong-Thani" />
        </b-col>
        <b-col>
          <List eventname="Jaigayray Concert" eventdate="30-10-2019" eventplace="GMM Live House @ Centralworld" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import List from './components/List.vue'
import AddEvent from './components/AddEvent'
import Api from './components/Api.vue'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    List,
    AddEvent,
    Api
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
