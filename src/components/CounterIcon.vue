<script>
export default{
    name: "CounterIcon",
    data(){
        return {
            
        }
    },
    methods: {

        getCounters(){

        // JavaScript code goes here
        const counter = document.getElementById('counter');
        const duration = 2000; // 2 secondi
        let target = 900;
        const interval = 10; // interval in milliseconds
        const increment = target / (duration / interval); //Calcolo per arrivare a 900

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.innerText = Math.round(current);
            }, interval);
        }
        
    },
    mounted(){
        // this.getCounters();
    }
}
</script>

<template>
    <div class="container-fluid my_padding">
        <div class="row">
            <div class="col">
                <img src="../../public/assets/image (13).svg" alt="">
                <span @click="getCounters" id="counter">0</span>
                <h3>CONCERTS</h3>

            </div>
            <div class="col">
                <img src="../../public/assets/image (14).svg" alt="">
                <span></span>
                <h3>HAPPY CLIENTS</h3>
            </div>
            <div class="col">
                <img src="../../public/assets/image (15).svg" alt="">
                <span>COUNTER</span>
                <h3>MUSIC AWARDS</h3>
            </div>
            <div class="col">
                <img src="../../public/assets/image (16).svg" alt="">
                <span>COUNTER</span>
                <h3>TOTAL SONGS</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.container-fluid {
    background-color: black;
    opacity: 0.8;
    background-image:url(../../public/assets/counter_parallax.jpg);
    background-position: center;
    color: white;
    text-align: center;
    &.my_padding{
        padding-top: 200px;
        padding-bottom: 200px;
    }

    img{
    max-height: 75px;
    margin-bottom: 20px;
    filter: invert(1);
    }
}


</style>
