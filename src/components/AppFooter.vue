<script>
export default{
    name: "AppFooter",
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
                    <li>502 New Design Str,</li>
                    <li>Melbourne, San Francisco,</li>
                    <li>CA 94110, United States Of</li>
                    <li>America​ Australia</li>
                    <li>T: 1 123-456-789</li>
                    <li>Email: demo@example.com</li>
                </ul>
            </div>

            <!-- Information -->
            <div class="col">

                <!-- Titol -->
                <h4>INFORMATION</h4>

                <!-- Voice -->
                <ul>
                    <li>Product Support</li>
                    <li>Checkout</li>
                    <li>Report Abuse</li>
                    <li>America​ Australia</li>
                    <li>Redeem Voucher</li>
                    <li>Order Status</li>
                </ul>
            </div>

            <!-- Support -->
            <div class="col">

                <!-- Titol -->
                <h4>SUPPORT</h4>

                <!-- Voice -->
                <ul>
                    <li>Policies e Rules</li>
                    <li>Privacy Policy</li>
                    <li>License Policy</li>
                    <li>My Account</li>
                    <li>Locality</li>
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
        <div class="row"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

// General
.container-fluid{
    padding: 50px;
    color: $secondary;
    background-color: $bgcolor;
}

// List style Sass
ul {
    list-style: none;
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
</style>
