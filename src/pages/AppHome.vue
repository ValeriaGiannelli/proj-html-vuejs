<script>
import AlbumNow from '../components/AlbumNow.vue';
import AppCard from '../components/AppCard.vue';
import CounterIcon from '../components/CounterIcon.vue';

export default{
    name: "AppHome",
    components:{
        CounterIcon,
        AlbumNow,
        AppCard
    },
    data(){
        return{
            imagesGallery:[
                {
                    url: 'gallery1.jpg',
                    title: 'A ROLL AND BANG THE FLOOR'
                },
                {
                    url: 'gallery2.jpg',
                    title: 'YOUR MELODY TO OUR MUSIC'
                },
                {
                    url: 'gallery3.jpg',
                    title: 'TOUCHING HEAVEN ON FREQUENCY'
                },
                {
                    url: 'gallery4.jpg',
                    title: 'MUSIC MAKES STRONGE BEATS'
                },
                {
                    url: 'gallery5.jpg',
                    title: 'SOUND IS THE SPARK OF TIME'
                },
                {
                    url: 'gallery6.jpg',
                    title: 'MAKE YOUR NIGHT GROOVY'
                },
                
            ],
            eventImage: [
                {
                    url: 'hip_hop_wired_to_dance_make.jpg',
                    title: 'HIP HOP WIRED TO DANCE MAKE'
                },
                {
                    url: 'music_business-worldwide.jpg',
                    title: 'MUSIC BUSINESS WORLDWIDE'
                },
                {
                    url: 'giveaways_rock.jpg',
                    title: 'GIVEAWEYS ROCK TO ALL'
                },
                {
                    url: 'drowned_in_sound_feel_joy.jpg',
                    title: 'DROWEND IN SOUND FEEL JOY'
                },
                {
                    url: 'dancing_astronaut_bounce_ipsum.jpg',
                    title: 'DANCING ASTROUNAUT BOUNCE IPSUM'
                },
                {
                    url: 'consequence_of_sound_make_us.jpg',
                    title: 'CONSEQUENCE OF SOUND MAKE US'
                },
                {
                    url: 'artist_development_and_production.jpg',
                    title: 'ARTIST DEVELOPMENT AND PRODUCTION'
                },
            ]
        }
    }

}

</script>

<template>
    <section>
    <!-- Prima sezione con cambio immagine home -->
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
            <div class="carousel-inner">

                <!-- elemento iniziale attivo -->
                <div class="carousel-item active">
                    <!-- prima immagine del carosello -->
                    <img src="/assets/home1.png" alt="">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>INSTRUMENTAL ROCK</h5>
                        <h2>MUSIC IN THE SPIRT</h2>
                        <button class="my_btn_read">READ MORE</button>
                    </div>
                </div>

                <!-- secondo elemento -->
                <div class="carousel-item">
                    <img src="/assets/home2.png" alt="">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>INSTRUMENTAL ROCK</h5>
                        <h2>MUSIC IN THE SPIRT</h2>
                        <button class="my_btn_read">READ MORE</button>
                    </div>
                </div>
            </div>

            <!-- bottone di immagine precedente -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <!-- bottone di immagine successiva -->
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
                <button class="my_btn_read my_btn_jazz">READ MORE</button>
            </div>      
        </div>
    </div>
<!-- Sezione new video -->
    <section>
        <div class="container-fluid">
            <div class="row justify-content-center my_new_video">
                <div class="col-9">
                    <img src="../../public/assets/image (22).svg" alt="">
                    <h2>NEW MUSIC VIDEO</h2>
                </div>
            </div>
        </div>
    </section>
<!-- Sezione six card -->
    <section>
        <div class="container-fluid bg-black pt-5">
            <div class="row">
                <h5>WHO WE ARE</h5>
                <h2>SENSE THE JAZZ</h2>
                <AppCard v-for="(singleImage,i) in imagesGallery" :img="singleImage.url" :imgTitle="singleImage.title" :key="i"/>
            </div>
        </div>
    </section>
    <AlbumNow/>
    <CounterIcon/>
<!-- Musci blog da rifa -->
    <section>
        <div class="container-fluid">
            <div class="row bg-black justify-content-center">
                <div class="col-9">
                    <h5>MUSIC BLOG</h5>
                    <h2>BEST MUSIC BLOG</h2>
                    <div class="slider_img">
                        
                    </div>
                </div>      
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.container-fluid{
    
    color: white;
    text-align: center;

    h2{
        font-size: 4rem;
    }

    .row{
        align-items: center;
    }

    .carousel-item.active{
        position: relative;

        .d-md-block {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

  

    h5{
        color: $primary;
    }
}
#position_icons{
    position: relative;

    h5{
        margin-top: 300px;
    }
}

.my_icons_home{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 0;
    left: 50%;
    justify-content: space-around;
    width: 100%;
    z-index:5;
    
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

// bottone sezione who we are sense the jazz
.my_btn_jazz{
    margin-bottom: 150px;
}

.my_new_video{
    background-image: url(../../public/assets/Video-1536x541.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    img{
        max-height: 150px;
    }
}

.slider_img{
    display: flex;
    justify-content: flex-start;
}
</style>
