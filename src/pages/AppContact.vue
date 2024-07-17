<script>
// importo lo store
import {store} from '../store.js';

import AppBread from '../components/AppBread.vue';


export default{
    name: "AppContact",
    components:{
        AppBread,
    },
    // export il data store
    data(){
        return {
            store,
            infoBread: [
                {
                    "namePath": "Contact Us",
                    "home":"Home"
                }
            ]
        }
    },
}
</script>

<template>
    <!-- da gestire in modo dinamico con props -->
    <AppBread :info="infoBread"/>
    
    <!-- componente che sta creando Samuele -->
    <div class="my_container">
        <div class="container">
            <div class="row">
                <!-- parte del form -->
                <div class="col-6 p-4 border">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>

                        <div class="col-md-6">
                            <label for="emailUser" class="form-label">Your Email</label>
                            <input type="email" class="form-control" id="emailUser">
                        </div>

                        <div class="col-12">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject">
                        </div>

                        <div class="col-12">
                            <label for="message" class="form-label">Your Message (Optional)</label>
                            <textarea class="form-control" id="message" rows="5"></textarea>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="my_btn_read">SUBMIT</button>
                        </div>
                    </form>
                </div>

                <!-- parte dei contatti -->
                <div class="col-6">
                    <h5>GET IN TOUCH</h5>
                    <h2>GET LATAEST UPDATE</h2>
                    <div class="row">
                        <div class="col-auto pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" width="26" height="28"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        </div>

                        <div class="col-5">
                            <h3>ADRESS INFO</h3>
                            <p>
                                {{ store.homeBooking.addres }}
                            </p>
                        </div>
                    </div>

                    <!-- contact -->
                    <div class="row">
                        <div class="col-auto pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="26" height="28"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        </div>

                        <div class="col-5">
                            <h3>CONTACT INFO</h3>
                            <p>
                                {{ store.homeBooking.email }}
                            </p>
                            <p>
                                {{ store.homeBooking.cell }}
                            </p>
                        </div>
                    </div>

                    <!-- working hours -->
                    <div class="row">
                        <div class="col-auto pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="26" height="28"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </div>

                        <div class="col-5">
                            <h3>WORKING HOURS</h3>
                            <p>
                                Open: 8:00AM – Close: 18:00PM
                            </p>
                            <p>
                                Saturday – Sunday: Close
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79480.38794566938!2d-0.2533077801302908!3d51.499232593196666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sit!2sit!4v1721225215918!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.my_container{
    background-color: $bgcolor;
    padding-top:70px;
    padding-bottom:70px;
    color: $secondary;
}
.form-control{
    border-radius: 0;
    background-color: black;
    color: $secondary;
    border-color: gray;
}

.form-control::placeholder{
    color: $secondary;
}

.my_btn_read{
    width: 100%;
}

h2{
    font-size: 3rem;
}

p{
    color: gray;
}

</style>
