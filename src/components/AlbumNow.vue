<script>
export default{
    name: "AblumNow",
}
</script>

<template>
    <!-- Immagine della chitarra da inserire in Home e AbouUs -->
     <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h5>INSTRUMENTAL ROCK</h5>
                <h2>ALBUM OUT NOW</h2>
                <button class="my_btn_read">READ MORE</button>
            </div>
        </div>
     </div>
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
    h2{
        font-size: 5rem;
        margin: 10px auto;
    }
}
</style>
