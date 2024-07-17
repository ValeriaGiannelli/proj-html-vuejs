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
    <section>
<!-- Prima sezione con cambio immagine home -->
        <div class="container-fluid">
            <div class="row first_home">
                <div class="col">
                    <h5>INSTRUMENTAL ROCK</h5>
                    <h2>MUSIC IN THE SPIRT</h2>
                    <button class="my_btn_read">READ MORE</button class="btn_read">
                </div>
            </div>
            <div class="row second_home d-none">
                <div class="col">
                    <h5>INSTRUMENTAL ROCK</h5>
                    <h2>MUSIC IN THIS VIDEO</h2>
                    <button class="my_btn_read">READ MORE</button class="btn_read">
                </div>
            </div>
        </div>
    </section>
<!-- Sezione tre icons e sense the jazz -->
    <div class="container-fluid" id="position_icons">
        <div class="row my_icons_home">
            <div class="col-3">
                <img src="../../public/assets/image (10).svg" alt="">
                <h3>ORIGINAL IDEAS</h3>
                <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random Text.</span>
            </div>
            <div class="col-3">
                <img src="../../public/assets/image (11).svg" alt="">
                <h3>MUSIC STUDIO</h3>
                <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random Text.</span>
            </div>
            <div class="col-3">
                <img src="../../public/assets/image (12).svg" alt="">
                <h3>ACOUSTIC COVERS</h3>
                <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random Text.</span>
            </div>
        </div>
<!-- SENSE THE JEZZ -->
        <div class="row bg-black justify-content-center">
            <div class="col-9">
                <h5>WHO WE ARE</h5>
                <h2>SENSE THE JAZZ</h2>
                <p>The Story Of Jazz And Blues Society Is The Story Of Determination, Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.</p>
                <button class="my_btn_read">READ MORE</button>
            </div>      
        </div>
    </div>
    <section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-9">
                    <img src="../../public/assets/image (22).svg" alt="">
                    <h2>NEW MUSIC VIDEO</h2>
                </div>
            </div>
        </div>
    </section>
       
    <CounterIcon/>
    <AlbumNow/>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.container-fluid{
    background-position: center;
    text-align: center;

    h2{
        font-size: 4rem;
    }

    .row{
        min-height: 100vh;
        align-items: center;
    }

    .first_home{
        background-image: url(../../public/assets/home1.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .second_home{
        background-image: url(../../public/assets/home2.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    h5{
        color: $primary;
    }
}
#position_icons{
    position: relative;

    h5{
        margin-top: 100px;
    }
}

.my_icons_home{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 0;
    left: 50%;
    justify-content: space-around;
    width: 100%;
    
    .col-3{
        background-color: #121212;
        padding: 30px;
        text-align: center;
        img{
            max-height: 150px;
            filter: invert(1);
        }
    }

}
</style>
