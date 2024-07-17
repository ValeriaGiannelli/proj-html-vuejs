<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';
import AppBread from './components/AppBread.vue';
import DescriptionLeft from './components/DescriptionLeft.vue';
import DescriptionRight from './components/DescriptionRight.vue';
import AlbumNow from './components/AlbumNow.vue';


export default{
  name: "App",
  components:{
    AppAbout, //ABOUT
    AppContact,//CONTACT US
    AppHeader, // For all page
    AppHome, //HOME PAGE
    AppFooter, 
    AppBread,
    DescriptionLeft,
    DescriptionRight,
    AlbumNow
  }
}
</script>

<template>


  <AppHeader/>
  <main>
    <!-- <AppHome /> -->

    <!-- DEBUG -->
    <!-- <AppContact /> -->
    <!-- <AppBread /> -->

    <!-- Insserire App Paragrafo -->
    <!-- <DescriptionLeft /> -->

    <!-- Album out now -->
    <!-- <AlbumNow /> -->

     <!-- Insserire App Paragrafo -->
    <!-- <DescriptionRight /> -->
  </main>

    <!-- <h1>Ciao sono app</h1> -->
  <!-- <AppHeader/> -->
  <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/general.scss';

</style>
