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
            <span>Stream On:</span>
            <img src="../../public/assets/image (20).svg" alt="">
        </div>
    </div>
</template>

<style lang="scss">

.wrapper_card{
    flex-basis: calc(100% / 3);
    margin: 30px auto;

    .social_stream{
        img{
            margin: 0 5px;
            max-width: 18px;
            filter: invert(1);
        }
    }
}

</style>