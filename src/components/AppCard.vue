<script>
export default{
    name: "AppCard",
    props: {
            img : String,
            imgTitle : String
        }
}
</script>

<template>
    <div class="wrapper_card">
        <img :src="`../../public/assets/${img}`" alt="">
        <span>{{ imgTitle }}</span>
        <div class="social_stream">
            <span>Stream On: </span>
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-music"></i>
            <i class="fa-brands fa-soundcloud"></i>
            <i class="fa-solid fa-compass"></i>
            
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/partials/variables' as*;

.wrapper_card{
    flex-basis: calc(100% / 3);
    margin: 30px auto;

    .social_stream{
        i{
            margin: 0 5px;
            max-height: 18px;
            max-width: 18px;
            &:hover{
                color: $primary;
                cursor: pointer;
            }
        }
    }
}

</style>