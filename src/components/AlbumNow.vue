<script>
export default{
    name: "AblumNow",
    props:{
        align:{
            type: String,
            default: 'center',
        }
    }
}
</script>

<template>
    <!-- Immagine della chitarra da inserire in Home e AbouUs -->
    <div class="container-fluid my_padding">
        <div class="row justify-content-center">
            <div :class="['col-10', {'text-start' : align === 'left'}]">
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
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    // padding: 200px 0;
    &.my_padding{
        padding-top: 450px;
        padding-bottom: 450px;
    }

    h5{
        font-size: 30px;
        color: $primary;
    }
    h2{
        font-size: 6.5rem;
        margin: 10px auto;
    }
}

.my_btn_read{
    padding: 10px 45px;
    background: rgba($color: #000000, $alpha: 0);
    transition: 0.5s;
}
</style>
