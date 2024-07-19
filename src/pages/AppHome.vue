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
      ],
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
                        <h2 class="spirit">MUSIC IN THE VIDEO</h2>
                        <button class="my_btn_read">READ MORE</button>
                    </div>
                </div>

                <!-- secondo elemento -->
                <div class="carousel-item">
                    <img src="/assets/home2.png" alt="">
                    <div class="carousel-caption d-none d-md-block">

                        <!-- <div class="my_caption"> -->
                            <h5>INSTRUMENTAL ROCK</h5>
                            <h2 class="spirit">MUSIC OF THE SPIRIT</h2>
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
    <div class="row jusitfy-contante-around my_icons_home">

     <!-- icona -->
      <div class="col-3 d-flex justify-content-center my_bg_dark">

         <!-- gestione animazione con mouse over e leave -->
        <div class="icons_up">

            <div class="animation">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708.98 990.01"><defs></defs><path class="cls-1" d="M34.72,11C22.15,17.36,11.07,31.21,7.24,45.06c-3,10.87-3,889,0,899.9,3.83,13.85,14.91,27.7,27.48,34.09L46,985H663l11.29-6c12.57-6.39,23.65-20.24,27.48-34.09,3-10.87,3-889,0-899.9-3.83-13.85-14.91-27.7-27.48-34.09L663,5H46ZM655.1,49.74c4,2.34,4,9.37,4,445.26s0,442.92-4,445.26c-5.75,3-595.45,3-601.21,0-4-2.34-4-9.38-4-445.26,0-419.48.21-443.13,3.83-445C58.8,47,649.35,46.76,655.1,49.74Z"></path><path class="cls-1" d="M340.65,70.4c-26.43,3.2-49,14.49-69.45,34.73-24.93,24.5-36,50.49-36,84.58,0,52.62,33,97.15,85.22,114.83,8.52,3,17.9,4,34.09,4,34.09,0,60.29-10.65,83.94-34.09a119,119,0,0,0,35.37-85.22c0-34.09-12.14-62.21-37.07-85.64C410.1,78.07,375.16,66.14,340.65,70.4ZM385,119.62c23.22,10.44,42.4,36.64,45.38,62.42,2.55,22.79-9.16,51.77-26.63,65.62-17.47,13.63-24.93,16.19-49.21,16.19s-31.74-2.56-49.21-16.19c-17.48-13.85-29.19-42.82-26.63-65.83,3.41-29.19,25.35-56.24,53-65.19C344.7,112.37,372.17,113.87,385,119.62Z"></path><path class="cls-1" d="M317.22,366.32c-17,2.77-43,10-59.65,16.62C113.76,440.89,51.13,609.4,122.5,746.6c28.33,54.33,77.55,99.06,133.15,121.44,30.89,12.36,54.11,17.26,89.26,18.32,47.93,1.7,85-6.18,125.27-26.2,73.5-36.64,123.35-101.62,141.25-183.43,5.12-23.22,5.12-78.61,0-101.41-22.58-101.84-93.1-176.19-193-203.24-17.47-4.69-25.35-5.54-57.52-6C340.44,365.68,320.84,365.9,317.22,366.32Zm91.6,48.58A216.58,216.58,0,0,1,549.43,530.16c17.68,36.22,21.3,52.2,21.3,95.87,0,31.11-.85,38.78-4.9,54.33-24.07,88.41-97.57,151.69-188.54,162.12C288,852.92,199.61,803.92,159.56,721.9c-17.9-36.43-21.3-52-21.09-96.93,0-44.74,3.2-58.8,20.88-94.8,31.1-63.27,87.56-105.88,158.29-119.3C342.35,406.16,381.77,407.87,408.82,414.9Z"></path><path class="cls-1" d="M333.82,530.15c-37.07,8.1-67.52,38.77-75.41,75.84-4.05,19.17-1.29,42.18,7.24,60.5,17.26,36.43,49.21,56.67,88.84,56.67,73.71,0,119.73-75,87.35-142.1-12.36-25.35-42.83-47.29-72.44-52C352.37,526.53,350.45,526.53,333.82,530.15Zm43.05,46.66c20,9.16,31.53,27.48,31.53,49.21-.21,21.09-9.16,36.43-28.13,47.51-8.31,4.9-12.13,5.75-25.77,5.75-18.75-.21-29.4-4.69-40.48-17.26-9.8-11.08-13.42-21.09-13.42-36s3.62-24.93,13.64-36.22C329.57,572.33,355.77,566.8,376.87,576.81Z"></path></svg>
              <!-- parte l'animazione se in hover -->
              <div class="pulsating-circle"></div>
            </div>
            
            <h3>ORIGINAL IDEAS</h3>
            <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random
              Text.</span>
        </div>
      </div>

      <!-- icona -->
      <div class="col-3 d-flex justify-content-center my_bg_dark">
         <!-- gestione animazione con mouse over e leave -->
        <div class="icons_up">

          <div class="animation">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980"><path d="M490,980C219.8,980,0,760.2,0,490S219.8,0,490,0,980,219.8,980,490,760.2,980,490,980Zm0-919.3C253.3,60.7,60.7,253.3,60.7,490S253.3,919.3,490,919.3,919.3,726.7,919.3,490,726.7,60.7,490,60.7Z"></path><path d="M490,604.2A114.2,114.2,0,1,1,604.2,490,114.29,114.29,0,0,1,490,604.2Zm0-167.7a53.4,53.4,0,1,0,53.4,53.4A53.45,53.45,0,0,0,490,436.5Z"></path><path d="M135.4,524.8c-8.1,0-14.8-7.8-15.2-15.9-.3-5.8-.4-12.3-.4-18.2A15.45,15.45,0,0,1,135,475.2a15,15,0,0,1,15.2,15c0,5.4.1,12.1.4,17.4.4,8.4-6.1,17.2-14.5,17.2Z"></path><path d="M315.2,814.2a14.82,14.82,0,0,1-7.5-2c-97.1-55.1-163.6-149.5-182.5-259.1a15.17,15.17,0,0,1,29.9-5.1c17.3,100.6,78.4,187.2,167.6,237.8a15.2,15.2,0,0,1-7.5,28.4Z"></path><path d="M293.4,690a15.06,15.06,0,0,1-10.8-4.5,242.21,242.21,0,0,1-69.9-170.8,15.2,15.2,0,1,1,30.4,0,211.93,211.93,0,0,0,61.2,149.5,15.18,15.18,0,0,1-.2,21.5A15.38,15.38,0,0,1,293.4,690Z"></path><path d="M343.8,728.8a15.9,15.9,0,0,1-7.5-2c-4.9-2.8-9.7-5.7-14.4-8.9a15.17,15.17,0,1,1,16.9-25.2c4.1,2.7,8.3,5.3,12.6,7.7a15.2,15.2,0,0,1,5.7,20.7A15.48,15.48,0,0,1,343.8,728.8Z"></path><path d="M364.3,640.2a14.82,14.82,0,0,1-7.5-2,122.62,122.62,0,0,1-62.1-106.5,15.2,15.2,0,0,1,30.4,0,92.2,92.2,0,0,0,46.7,80.1,15.2,15.2,0,0,1-7.5,28.4Z"></path><path d="M836.5,530.7a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9c14.3-121.5-38-241.9-136.4-314.1a15.13,15.13,0,1,1,17.9-24.4A371.28,371.28,0,0,1,851.5,517.4,15,15,0,0,1,836.5,530.7Z"></path><path d="M750.7,503.2a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9A214,214,0,0,0,650,289a15.13,15.13,0,1,1,17.9-24.4,244.41,244.41,0,0,1,97.8,225.2A15.13,15.13,0,0,1,750.7,503.2Z"></path><path d="M667.2,467.2a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9,92.16,92.16,0,0,0-36.9-85,15.13,15.13,0,1,1,17.9-24.4,122.62,122.62,0,0,1,49.1,113.1A15,15,0,0,1,667.2,467.2Z"></path></svg>
            <!-- parte l'animazione se in hover -->
            <div class="pulsating-circle"></div>
          </div>

          <h3>MUSIC STUDIO</h3>
          <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random Text.</span>
        </div>  
      </div>

      <!-- icona -->
      <div class="col-3 d-flex justify-content-center my_bg_dark">
         <!-- gestione animazione con mouse over e leave -->
        <div class="icons_up">
          <div class="animation">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980"><path d="M238.2,770.2H154.3C69.2,770.2,0,701,0,615.9v-42c0-85.1,69.2-154.3,154.3-154.3h83.9A28.38,28.38,0,0,1,266.6,448V741.7A28.4,28.4,0,0,1,238.2,770.2ZM154.3,476.4a97.56,97.56,0,0,0-97.5,97.5v42a97.56,97.56,0,0,0,97.5,97.5h55.6v-237Z"></path><path d="M825.7,770.2H741.8a28.38,28.38,0,0,1-28.4-28.4V448a28.38,28.38,0,0,1,28.4-28.4h83.9c85.1,0,154.3,69.2,154.3,154.3v42C980,701,910.8,770.2,825.7,770.2Zm-55.5-56.8h55.5a97.56,97.56,0,0,0,97.5-97.5v-42a97.56,97.56,0,0,0-97.5-97.5H770.2Z"></path><path d="M115.7,482.7a28.42,28.42,0,0,1-28-23.9A333.57,333.57,0,0,1,84,406C83.9,182.2,266.1,0,490,0S896.1,182.2,896.1,406.1a334.91,334.91,0,0,1-3.7,52.7,28.4,28.4,0,0,1-56.1-8.9,283.31,283.31,0,0,0,3-43.8C839.3,213.5,682.6,56.8,490,56.8S140.7,213.5,140.7,406.1c0,17,.9,31,3,43.8a28.38,28.38,0,0,1-23.5,32.5A36.39,36.39,0,0,1,115.7,482.7Z"></path><path d="M490,980c-82.4,0-112.3-67.2-112.3-112.3S407.6,755.4,490,755.4s112.3,67.2,112.3,112.3a121.38,121.38,0,0,1-9.1,45.2C724.9,884.3,786.3,801.6,814.9,730a28.38,28.38,0,0,1,52.7,21.1C825.9,855.5,726.6,980,490,980Zm0-167.9c-52.9,0-55.6,46.3-55.6,55.5.2,12.9,4.8,55.6,55.6,55.6,52.9,0,55.6-46.3,55.6-55.6C545.4,854.8,540.7,812.1,490,812.1Z"></path></svg>
            <!-- parte l'animazione se in hover -->
            <div class="pulsating-circle"></div>
          </div>

            <h3>ACOUSTIC COVERS</h3>
            <span>Contary Popular Belied, Lorem Ipsum Not Simply Ipsum Random Text.</span>
        </div>
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
                    <iframe width="80%" height="50%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
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
    <div class="container-fluid bg-black">
      <div class="row bg-black justify-content-center">
        <div class="col-9">
          <h5>MUSIC BLOG</h5>
          <h2>BEST MUSIC BLOG</h2>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid bg-black text-white overflow_hidden">
    <AppCarosel />
  </div>
  <section>
        <div class="my_instagram_carosel">
            <div class="instragam_img" v-for="(img,i) in instragamImg" :key="i">
                <img :src="`../../public/assets/${img}`" alt="">
            </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.overflow_hidden{
  overflow-x: hidden;
}

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
        width: 100%;
        left:50%;
        top:42%;
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

    .my_bg_dark{
      background-color: #121212;
    }
    
    .icons_up{
        background-color: #121212;
        padding: 30px 0;
        text-align: center;
        display:flex;
        flex-direction: column;
        align-items: center;
        width:80%;
        // all'over della card diventa bianco
        &:hover .animation .pulsating-circle{
          display: block;
          border-color: $secondary;
          opacity: 0;
          transform: scale(1.5);
        }
        
        .animation{
          width:150px;
          height: 150px;
          position:relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
          // all'over della card diventa arancione
          &:hover .pulsating-circle{
            display: block;
            border-color: $primary;
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.5);
          }
          &:hover svg{
            fill: $primary;
          }

          svg{
            max-height: 130px;
            fill: white;
            z-index: 1;
            &:hover {
                cursor: pointer;
            }
          }

          // cerchio pulsante
          .pulsating-circle{
            display:none;
            position:absolute;
            width: 150px;
            height: 150px;
            border-radius: 50%;
          
            // box-shadow: ;
            border: 8px solid $secondary;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
            animation: fade-out 1.5s infinite;
            animation-delay: 0s;

            z-index: 0;
            &:hover{
              border-color: $primary;
            }
          }

        }
        
        
    }
}

@keyframes fade-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
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
    width: 100px;
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
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar{
        display: none;
    }

    .instragam_img{
    min-width: calc(100% / 8);
    overflow: hidden;
    
        img:hover{
            transform: scale(1.1);
        }
    }
}

// Carosel Font
.spirit{
  font-size: 55px;
}
</style>
