<script>
export default {
    name: 'DescriptionRight',
    data() {
        return{
            
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <div class="boxs">

        <!-- img -->
        <div class="box">
            <img src="/img_about/about_Img-02.jpg" alt="">
        </div>
        <div class="box">
            
            <!--  -->

            <!-- Accordion -->
            <div class="accordion bg-black" id="accordionExample">
            <div class="accordion-item">

                <h2 class="accordion-header">
                <button class="accordion-button orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                    CAN I SPECIFY A DELIVERY DATE WHEN ORDERING?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    HOW INVESTING IN DEPENDEND INCER
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ASING TO BUSINESS SECURITY
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    ELEMENT OR PAGE BUILDER USED
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-black">
                    Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium
                    Doloremque Laudantium, Tota Aperiam, Eaque Ipsa 
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
</template>

<style lang='scss' scoped>

@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

.boxs{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    background-color: $bgcolor;
}

.box{
    width: 550px;
    height: 450px;

}

#accordionExample{
    margin-top: 30px;
}

.accordion-button{
    background-color: black;
    color: $secondary;
}

.accordion-button:hover{
    color: $primary;
}

.accordion-item{
    border: none;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
    
}


</style>