<script>
import AlbumNow from '../components/AlbumNow.vue';
import CounterIcon from '../components/CounterIcon.vue';

export default{
    name: "AppHome",
    components:{
        CounterIcon,
        AlbumNow,
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h5>INSTRUMENTAL ROCK</h5>
                <h2>MUSIC IN THE SPIRT</h2>
                <button class="my_btn_read">READ MORE</button class="btn_read">
            </div>
        </div>
     </div>
     <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h5>INSTRUMENTAL ROCK</h5>
                <h2>MUSIC IN THIS VIDEO</h2>
                <button class="my_btn_read">READ MORE</button class="btn_read">
            </div>
        </div>
     </div>
    <CounterIcon/>
    <AlbumNow/>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.container-fluid{
    background-image: url(../../public/assets/cms_parallax.jpg);
    background-position: center;
    text-align: center;
    padding: 200px 0;

    h5{
        color: $primary;
    }
}
</style>
