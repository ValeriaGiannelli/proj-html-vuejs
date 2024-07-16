<script>
import AppHeader from './components/AppHeader.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';



export default{
  name: "App",
  components:{
    AppAbout,
    AppContact,
    AppHeader,
    AppHome
  }
}
</script>

<template>
  <h1>Ciao sono app</h1>
  <AppHeader/>
  <main>
    <AppHome />
  </main>
</template>

<style lang="scss">
@use './assets/styles/general.scss';

</style>
