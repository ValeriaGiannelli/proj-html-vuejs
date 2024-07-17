<script>
export default{
    name: "CounterIcon",
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <img src="../../public/assets/image (13).svg" alt="">
                <span>COUNTER</span>
                <h3>CONCERTS</h3>
            </div>
            <div class="col">
                <img src="../../public/assets/image (14).svg" alt="">
                <span>COUNTER</span>
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

<style scoped>
.container-fluid {
    background-color: black;
    opacity: 0.8;
    background-image:url(../../public/assets/counter_parallax.jpg);
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 0;

    img{
    max-height: 150px;
    margin-bottom: 20px;
    filter: invert(1);
    }
}


</style>
