<script>
export default {
  name: "AppCarousel",
  data() {
    return {
      currentIndex: 0,
      translateX: 0,
      eventImage: [
        {
          url: 'hip_hop_wired_to_dance_make.jpg',
          title: 'HIP HOP WIRED TO DANCE MAKE',
          date: "06 November 2021",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former"
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
          date: "14 February 2022",
          text: "Electronic Dance Music Rhythm and Blues Before this, R & B was known as ‘race music,’ a term that originated in the African American"
        },
        {
          url: 'artist_development_and_production.jpg',
          title: 'ARTIST DEVELOPMENT AND PRODUCTION',
          date: "06 November 2021",
          text: "Characterised by its own beat patterns, the lyrics feature what is often extreme violence snd talk of criminal acts. As a result, there’s been"
        },
      ],
      itemsPerPage: 3, // Default number of items per page
      itemWidth: 350, // Default width of each item
      margin: 20 // Margin between items
    };
  },
  computed: {
    totalItems() {
      return this.eventImage.length;
    },
    carouselWidth() {
      return (this.itemWidth + this.margin) * this.itemsPerPage;
    },
    computedItemWidth() {
      return (window.innerWidth - this.margin * (this.itemsPerPage + 1)) / this.itemsPerPage;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.totalItems - this.itemsPerPage) {
        this.currentIndex++;
        this.translateX -= this.computedItemWidth + this.margin;
      } else {
        this.currentIndex = 0;
        this.translateX = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateX += this.computedItemWidth + this.margin;
      } else {
        this.currentIndex = this.totalItems - this.itemsPerPage;
        this.translateX = -((this.computedItemWidth + this.margin) * this.currentIndex);
      }
    },
    handleResize() {
      this.itemsPerPage = this.getItemsPerPage();
      this.translateX = -(this.currentIndex * (this.computedItemWidth + this.margin));
    },
    getItemsPerPage() {
      if (window.innerWidth >= 1200) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleResize();
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.itemsPerPage = this.getItemsPerPage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<template>
  <div id="my_wrapper_carousel">
    <div class="my_carousel-container" :style="{ width: carouselWidth + 'px' }">
      <div class="my_carousel">
        <div class="my_carousel-inner" :style="{ transform: 'translateX(' + translateX + 'px)' }">
          <div v-for="(image, index) in eventImage" :key="index" class="carousel_my_item">
            <div class="my_div_carousel" :style="{ width: computedItemWidth + 'px' }">
              <img :src="`../../public/assets/${image.url}`" alt="Carousel Image" />
              <h5>{{ image.title }}</h5>
              <span>{{ image.date }}</span>
              <p>{{ image.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my_btn_prev_next">
        <span id="my_prev" @click="prevSlide">
          <svg aria-hidden="true" class="thebase-svg-icon thebase-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Expand</title>
            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        </span>
        <span id="my_next" @click="nextSlide">
          <svg aria-hidden="true" class="thebase-svg-icon thebase-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Expand</title>
            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        </span>
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

  span {
    color: $primary;
  }
}

.my_carousel {
  display: flex;
  margin-bottom: 10px;
}

.my_div_carousel {
  margin: 0 10px;
}

.my_carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel_my_item {
  flex: 0 0 auto;
}

.my_carousel img {
  width: 100%;
  height: auto;
}

.my_carousel-controls {
  display: flex;
  justify-content: center;
}

#my_wrapper_carousel {
  position: relative;
}

.my_btn_prev_next {
  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    fill: white;
    transform: scale(3);
  }
}

#my_prev {
  transform: rotate(90deg);
}

#my_next {
  transform: rotate(-90deg);
}
</style>
