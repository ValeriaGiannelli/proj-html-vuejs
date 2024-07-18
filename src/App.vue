<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import ButtonUp from './components/ButtonUp.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';


export default{
  name: "App",
  components:{
    AppAbout, //ABOUT
    AppContact,//CONTACT US
    AppHeader, // For all page
    AppHome, //HOME PAGE
    AppFooter, 
    ButtonUp
  }
}
</script>

<template>


  <AppHeader/>
  <router-view></router-view>
  <ButtonUp />
  <main>

    <!-- <AppHome /> -->
    <!-- <AppAbout /> -->
    <!-- <AppContact /> -->

  </main>

    <!-- <h1>Ciao sono app</h1> -->
  <!-- <AppHeader/> -->
  <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/general.scss';

</style>
