<script>
export default {
  name: "CounterIcon",
  data() {
    return {
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      observer: null,
    };
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      this.observer.observe(this.$refs.myPadding);
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.incrementNumbers();
          this.observer.disconnect(); // Stop observing once increment starts
        }
      });
    },
    incrementNumbers() {
      this.incrementNumber("number1", 900, 3000);
      this.incrementNumber("number2", 400, 3000);
      this.incrementNumber("number3", 800, 3000);
      this.incrementNumber("number4", 1001, 3000);
    },
    incrementNumber(numberKey, finalValue, duration) {
      let startValue = this[numberKey];
      let increment = finalValue / (duration / 50); // aggiorna ogni 50ms

      let interval = setInterval(() => {
        startValue += increment;
        if (startValue >= finalValue) {
          this[numberKey] = finalValue;
          clearInterval(interval);
        } else {
          this[numberKey] = Math.round(startValue);
        }
      }, 50);
    },
  },
};
</script>

<template>
  <div class="container-fluid my_padding" ref="myPadding">
    <div class="row">
      <div class="col">
        <img src="../../public/assets/image (13).svg" alt="" />
        <span>{{ number1 }}</span>
        <h3>CONCERTS</h3>
      </div>
      <div class="col">
        <img src="../../public/assets/image (14).svg" alt="" />
        <span>{{ number2 }}</span>
        <h3>HAPPY CLIENTS</h3>
      </div>
      <div class="col">
        <img src="../../public/assets/image (15).svg" alt="" />
        <span>{{ number3 }}</span>
        <h3>MUSIC AWARDS</h3>
      </div>
      <div class="col">
        <img src="../../public/assets/image (16).svg" alt="" />
        <span>{{ number4 }}</span>
        <h3>TOTAL SONGS</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background-color: black;
  opacity: 0.98;
  background-image: url(../../public/assets/counter_parallax.jpg);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  &.my_padding {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  img {
    max-height: 75px;
    margin-bottom: 20px;
    filter: invert(1);
  }
}
</style>
