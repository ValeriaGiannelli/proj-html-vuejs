<script>
import AppHeader from './components/AppHeader.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';



export default{
  name: "App",
  components:{
    AppAbout,
    AppContact,
    AppHeader
  }
}
</script>

<template>
  <h1>Ciao sono app</h1>
  <AppHeader/>
</template>

<style lang="scss">

</style>
