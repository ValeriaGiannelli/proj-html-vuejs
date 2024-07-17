<script>
// importo lo store
import {store} from '../store.js';

export default{
    name: "AppContact",

    // export il data store
    data(){
        return {
            store,
            infoBread: [
                {
                    "namePath": "Contact Us",
                    "home": "Home"
                }
            ]
        }
    },
}
</script>

<template>
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
                <div>
                    <div>
                        <img src="" alt="">
                    </div>

                    <div>
                        <h3>ADRESS INFO</h3>
                        <p>
                            {{ store.homeBooking.addres }}
                        </p>
                    </div>
                </div>

                <!-- contact -->
                <div>
                    <div>
                        <img src="" alt="">
                    </div>

                    <div>
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
                <div>
                    <div>
                        <img src="" alt="">
                    </div>

                    <div>
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

</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.my_container{
    background-color: $bgcolor;
    padding-top:70px;
}
.form-control{
    border-radius: 0;
    background-color: black;
    color: $secondary;
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

</style>
