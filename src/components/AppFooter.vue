<script>
export default{
    name: "AppFooter",
    data() {
        return {
            bookings: [
                '502 New Design Str, Melbourne, San Francisco, CA 94110, United States Of America​ Australia',
                'T: 1 123-456-789',
                'Email: demo@example.com'
            ],
            information: [
                'Product Support',
                'Checkout',
                'Report Abuse',
                'America Austarlia',
                'Redeem Voucher',
                'Order Status'
            ],
            support: [
                'Poliicies e Rules',
                'Privacy Policy',
                'License Polixy',
                'My Account',
                'Locality'
            ]
        }
    }
}
</script>

<template>

    <!-- Footer -->
    <div class="container-fluid">

        <!-- Menu con Voci + Small Form -->
        <div class="row">

            <!-- Bokings -->
            <div class="col">

                <!-- Titol -->
                <h4>BOOKINGS</h4>

                <!-- Voice -->
                <ul>
                    <li v-for="(book,index) in bookings" :key="index">{{ book }}</li>
                </ul>
            </div>

            <!-- Information -->
            <div class="col">

                <!-- Titol -->
                <h4>INFORMATION</h4>

                <!-- Voice -->
                <ul>
                    <li v-for="(info,index) in information" :key="index">{{ info }}</li>
                </ul>
            </div>

            <!-- Support -->
            <div class="col">

                <!-- Titol -->
                <h4>SUPPORT</h4>

                <!-- Voice -->
                <ul>
                    <li v-for="(sup,index) in support" :key="index">{{ sup }}</li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div class="col">

                <!-- Titol -->
                <h4>NEWSLETTER</h4>

                <!-- Form -->

                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                </div>


                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>

                <div>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="row border_color">
            <div class="col d-flex justify-content-around p-3">© 2024 All Rights Reserved. Developed By TemplateMela</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

// General
.container-fluid>.row{
    padding: 50px;
    color: $secondary;
    background-color: $bgcolor;
}

// List style Sass
ul {
    list-style: none;

    li{
        max-width: 200px;
    }
}


// Button style
button{
    // Button Settings
    font-size: 12px;
    padding: 7px 25px;
    border-color: $primary;
    color: $secondary;
    background-color: $bgcolor;
}

.border_color{
    border-top: 1px solid #ffffff;
}
</style>
