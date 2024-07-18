<script >
export default{
  name: "AppCarosel",
  data() {
    return {
      currentIndex: 0,
      translateX: 0,
      eventImage: [
                {
                    url: 'hip_hop_wired_to_dance_make.jpg',
                    title: 'HIP HOP WIRED TO DANCE MAKE',
                    date: "06 November 2021",
                    text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former "
                },
                {
                    url: 'music_business-worldwide.jpg',
                    title: 'MUSIC BUSINESS WORLDWIDE',
                    date: "27 May 2022",
                    text: "Accelerate work and drive productivity The Beatles' experimentation and creative freedom led other bands to experiment in various ways as well."
                },
                {
                    url: 'giveaways_rock.jpg',
                    title: 'GIVEAWEYS ROCK TO ALL',
                    date: "06 November 2021",
                    text: "Signs Your Car Battery Has To Be Replaced When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and"
                },
                {
                    url: 'drowned_in_sound_feel_joy.jpg',
                    title: 'DROWEND IN SOUND FEEL JOY',
                    date: "10 April 2022",
                    text: "Different Types of Music Content For most music creators, they take their work very seriously because of the emotional attachment they may harbor"
                },
                {
                    url: 'dancing_astronaut_bounce_ipsum.jpg',
                    title: 'DANCING ASTROUNAUT BOUNCE IPSUM',
                    date: "01 March 2022",
                    text: "Music Promotion Channels There are really a lot of music promotion channels out there. Being a music promotion channel involves a lot of work and"
                },
                {
                    url: 'consequence_of_sound_make_us.jpg',
                    title: 'CONSEQUENCE OF SOUND MAKE US',
                    date: "14 Februrary 2022",
                    text: "Electronic Dance Music Rhythm and Blues Before this, R & B was known as ‘race music,’ a term that originated in the African American"
                },
                {
                    url: 'artist_development_and_production.jpg',
                    title: 'ARTIST DEVELOPMENT AND PRODUCTION',
                    date: "06 November 2021",
                    text: "Characterised by its own beat patterns, the lyrics feature what is often extreme violence snd talk of criminal acts. As a result, there’s been"
                },
            ],
      
      itemsPerPage: 3, //sostituire con il numero di immagini desiderato
      itemWidth: 380, // Larghezza di ciascuna immagine
      margin: 30 // Margine delle immagini
    };
  },
  computed: {
    totalItems() {
      return this.eventImage.length;
    },
    carouselWidth() {
      return (this.$refs.widthImg1 + this.margin) * this.itemsPerPage;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.totalItems - this.itemsPerPage) {
        this.currentIndex++;
        this.translateX -= this.$refs.widthImg1 + this.margin;
        console.log(this.currentIndex)
      } else {
        this.currentIndex = 0
        console.log(this.currentIndex)
        this.translateX += this.carouselWidth + (this.$refs.widthImg1 + this.margin);
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateX += this.$refs.widthImg1 + this.margin;
        console.log(this.currentIndex)
      } else{
        this.currentIndex = this.totalItems - this.itemsPerPage;
        this.translateX -= this.carouselWidth + (this.$refs.widthImg1 + this.margin);
        console.log(this.currentIndex)
      }
    }
  }
};
</script>

<template>
  <div id="my_wrapper_carosel">
    <div class="my_carousel-container" :style="{ width: carouselWidth + 'px' }">
    <div class="my_carousel">
      <div class="my_carousel-inner" :style="{ transform: 'translateX(' + translateX + 'px)' }">
        <div v-for="(image, index) in eventImage" :key="index" class="carousel_my_item" ref="{{'widthImg' + index}}">
          <img :src="`../../public/assets/${image.url}`" alt="Carousel Image" />
          <h5>{{ image.title }}</h5>
          <span>{{ image.date }}</span>
          <p>{{ image.text }}</p>
        </div>
      </div>
    </div>
    <div class="my_btn_prev_next">
      <span id="my_prev" @click="prevSlide"><svg aria-hidden="true" class="thebase-svg-icon thebase-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
        </svg></span>
        <span id="my_next" @click="nextSlide"><svg aria-hidden="true" class="thebase-svg-icon thebase-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
      </svg></span>
    </div>
  </div>
  </div>
 
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.my_carousel-container {
  margin: 0 auto;
  overflow: hidden;
  text-align: left;

  h5{
    padding-left: 10px;
    padding-right: 10px;
  }

  span{
    color: $primary;
    padding-left: 10px;
  }
  p{
    padding-left: 10px;
    padding-right: 15px;
  }
}

.my_carousel {
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
}

.my_carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel_my_item {
  flex: 0 0 auto;
  max-width: calc(100% / 3 - 20px);
}

.my_carousel img {
  max-width: 100%;
  height: auto;
  margin: 0 10px;
}

.my_carousel-controls {
  display: flex;
  justify-content: center;

}
#my_wrapper_carosel{
  position: relative;
}

.my_btn_prev_next{
  display: flex;
  justify-content: space-between;
  width: 980px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  svg{
    fill: white;
    transform: scale(3);
  }
}

#my_prev{
  transform: rotate(90deg);
}
#my_next{
  transform: rotate(-90deg);
}



</style>
