<script>
import AppBread from '../components/AppBread.vue';
import DescriptionLeft from '../components/DescriptionLeft.vue';
import DescriptionRight from '../components/DescriptionRight.vue';
import AlbumNow from '../components/AlbumNow.vue';

export default{
    name: "AppAbout",
    components:{
        AppBread,
        DescriptionLeft,
        DescriptionRight,
        AlbumNow
  }
}
</script>

<template>
    <AppBread />

    <!-- Insserire App Paragrafo -->
    <DescriptionLeft />

    <!-- Album out now -->
    <AlbumNow />

    <!-- Insserire App Paragrafo -->
    <DescriptionRight />
</template>

<style lang="scss" scoped>

</style>
