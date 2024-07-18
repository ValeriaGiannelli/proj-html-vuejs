<script>
import AlbumNow from "../components/AlbumNow.vue";
import AppCard from "../components/AppCard.vue";
import AppCarosel from "../components/AppCarosel.vue";
import CounterIcon from "../components/CounterIcon.vue";

export default {
  name: "AppHome",
  components: {
    CounterIcon,
    AlbumNow,
    AppCard,
    AppCarosel
  },
  data() {
    return {
      imagesGallery: [
        {
          url: "gallery1.jpg",
          title: "A ROLL AND BANG THE FLOOR",
        },
        {
          url: "gallery2.jpg",
          title: "YOUR MELODY TO OUR MUSIC",
        },
        {
          url: "gallery3.jpg",
          title: "TOUCHING HEAVEN ON FREQUENCY",
        },
        {
          url: "gallery4.jpg",
          title: "MUSIC MAKES STRONGE BEATS",
        },
        {
          url: "gallery5.jpg",
          title: "SOUND IS THE SPARK OF TIME",
        },
        {
          url: "gallery6.jpg",
          title: "MAKE YOUR NIGHT GROOVY",
        },
      ],
      x: false,
      instragamImg: [
        "instagram_img1.jpg",
        "instagram_img2.jpg",
        "instagram_img3.jpg",
        "instagram_img4.jpg",
        "instagram_img5.jpg",
        "instagram_img6.jpg",
        "instagram_img7.jpg",
        "instagram_img8.jpg",
        "instagram_img9.jpg",
        "instagram_img10.jpg"
      ]
    };
  },
  methods: {
    showVideo() {
      // Variabile per il click
      let start = document.querySelector("iframe"); // IMG;
      let player = document.getElementById("player"); // Player Img;
      let immage = document.getElementById("sezione"); // All Container Component;
      let bd = document.querySelector('body');

      //gray box 
      let box = document.querySelector('.gray-box');


      if (this.x == false) {
        //Mostare il video e rimuovere l'immagine del player;
        start.style.display = "inline-block";
        start.style.position = "fixed";
        player.style.display = "none";
        box.style.display = "block"

        // Click al di fuori del video per chiuderlo;
        // let bodyOut = document.querySelector("body");

        this.x = true;
      } else  {
        start.style.display = "none";
        player.style.display = "inline-block";
        box.style.display = "none"
        this.x = false;
      }

      return x;
    },
  },
};
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

                        <!-- <div class="my_caption"> -->
                            <h5>INSTRUMENTAL ROCK</h5>
                            <h2>MUSIC IN THE SPIRT</h2>
                            <button class="my_btn_read">READ MORE</button>
                        <!-- </div>                         -->
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

      <div class="row second_home d-none">
        <div class="col">
          <h5>INSTRUMENTAL ROCK</h5>
          <h2>MUSIC IN THIS VIDEO</h2>
          <button class="my_btn_read">READ MORE</button>
        </div>
      </div>

  </section>
  <!-- Sezione tre icons e sense the jazz -->
  <div class="container-fluid" id="position_icons">
    <div class="row my_icons_home">
      <div class="col-3">
        <img src="../../public/assets/image (10).svg" alt="" />
        <h3>ORIGINAL IDEAS</h3>
        <span
          >Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random
          Text.</span
        >
      </div>
      <div class="col-3">
        <img src="../../public/assets/image (11).svg" alt="" />
        <h3>MUSIC STUDIO</h3>
        <span
          >Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random
          Text.</span
        >
      </div>
      <div class="col-3">
        <img src="../../public/assets/image (12).svg" alt="" />
        <h3>ACOUSTIC COVERS</h3>
        <span
          >Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random
          Text.</span
        >
      </div>
    </div>
    <!-- SENSE THE JEZZ -->
    <div class="row bg-black justify-content-center">
      <div class="col-9">
        <h5>WHO WE ARE</h5>
        <h2>SENSE THE JAZZ</h2>
        <p>
          The Story Of Jazz And Blues Society Is The Story Of Determination,
          Passion, Idealism, Community, And Of Course, Music. Founded In 1985
          And Incorporated In 1986, As A Community Based, Not-For-Profit,
          Charitable Arts Organization Located In Vancouver, British Columbia,
          The Society, From The Very Beginning, Has Worked Diligently To
          Establish Vancouver As A Centre For The Creation And Exchange Of
          Sounds And Ideas Between The Local, National And International Music
          Communities.
        </p>
        <button class="my_btn_read my_btn_jazz">READ MORE</button>
      </div>
    </div>
  </div>

  <!-- Sezione new video -->
  <section>
    <div class="container-fluid" id="sezione" @click="showVideo">
      <div class="row justify-content-center my_new_video">
        <div class="col-9">
            <div class="my_class">
                <!-- immagine del player -->
                <div class="my_icon_player">
                    <svg id="player" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>      
                </div>
                <!-- titolo sezione -->
                <h2>NEW MUSIC VIDEO</h2>
                <!-- container del video youtube -->
                <div class="container-frame">
                    <!-- sfondo del video -->
                    <div class="gray-box">
                        <svg class="thebase-svg-icon thebase-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu Close</title><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                    </div>
                    <!-- importazione video -->
                    <iframe width="1420" height="565" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>  
                
            </div>
         
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
        <AppCard
          v-for="(singleImage, i) in imagesGallery"
          :img="singleImage.url"
          :imgTitle="singleImage.title"
          :key="i"
        />
      </div>
    </div>
  </section>
  <AlbumNow />
  <CounterIcon />
  <!-- Musci blog da rifa -->
  <section>
    <div class="container-fluid">
      <div class="row bg-black justify-content-center">
        <div class="col-9">
          <h5>MUSIC BLOG</h5>
          <h2>BEST MUSIC BLOG</h2>
          <AppCarosel />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-fluid">
        <div class="my_instagram_carosel">
            <div v-for="img in instragamImg">
                <img :src="`../../public/assets/${img}`" alt="">
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.container-fluid {
  color: white;
  text-align: center;

  h2 {
    font-size: 4rem;
  }

    .row{
        align-items: center;
    } 

    h5{
        color: $primary;
    }
}

// caption del carosello iniziale posizione centrale
.carousel-caption{
        position:absolute;
        left:50%;
        top:50%;
        bottom:auto;
        transform: translate(-50%, -50%);
        opacity: 0;
        transform: translate(-50%, -50%) translateY(50px) scale(0.5);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }

// zoom in delle caption quando diventa attiva la slide
.carousel-item.active .carousel-caption {
        opacity: 1;
        transform: translate(-50%, -50%) translateY(0) scale(1);
}

// posizione delle icone grandi sotto il primo carosello
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

h5 {
    color: $primary;
}

// posizione delle icone ideas / studio / covers
#position_icons {
  position: relative;

  h5 {
    margin-top: 300px;
  }
}

// container del player e del titolo
.my_class{
    height: 635px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

// sfondo della sezione per il player del video
.my_new_video {
  background-image: url(../../public/assets/Video-1536x541.jpg);
  background-repeat: no-repeat;
  background-size: cover;

// icona del player
  .my_icon_player{
    width:100px;
    color:orange;
    border:5px solid orange;
    border-radius: 50%;
    padding: 30px;
    padding-left: 40px;
  }
}

// visualizzazione del video
iframe {
  display: none;
  z-index: 900;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position: fixed;
}

// parte di div che serve da sfondo per il video
.gray-box{
    display: none;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.9;
    position: fixed;
    top: 0; /* Correzione per coprire l'intera pagina */
    left: 0;
    .thebase-svg-icon.thebase-close-svg{
        position: absolute;
        top: 110px;
        right: 16px;
        color: white;
        z-index: 999;
        &:hover{
            cursor: pointer;
        }
    }
    
}
// Carosello Instragram

.my_instagram_carosel{
    display: flex;
    overflow: auto;

    // div{
    //     flex-basis: calc(100% / 7);
    // }
}
</style>
