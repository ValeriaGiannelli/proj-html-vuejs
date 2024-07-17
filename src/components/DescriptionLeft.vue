<script>
export default{
    name: 'DescriptionLeft'
}
</script>

<template>
    <div class="container-fluid bg-black p-5">

        <!-- Description  -->
        <div class="padding row d-flex justify-content-around align-items-end">
            <div class="col margin margin-primary text-danger">

                <!-- Span -->
                <h3>WHO WE ARE</h3>
                <h2>SENSE THE JAZZ</h2>

                <!-- Paragraph -->
                <p>The Story Of Jazz And Blues Society Is The Story Of Determination, Passion, Idealism, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For Organization Located In Vancouver, British Columbia, The Society, From The Very Begi To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds</p>

                <button class="my_btn_read">READ MORE</button>
            </div>



            <div class="col margin margin-primary text-danger d-flex justify-content-around">
                <img src="/img_about/about_img.jpg" alt="debug">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss';
@use '../assets/styles/partials/variables' as *;

// Css for colors
h3{
    color: $primary
}

h2{
    font-size: 45px;
}

// Indentation
p{
    max-width: 50%;
    font-size: 15px;
    margin: 25px 0;
}

img{
    max-width: 650px;
}

.padding{
    padding: 100px 5%;

}

button.my_btn_read{
    padding: 10px 45px
}
</style>
