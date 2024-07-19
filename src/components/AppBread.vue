<script>
export default{
    name: 'AppBread',
    props:{
        info: Object,
    }
}
</script>

<template>
    <div class="my_container">
        <div class="padding container-fluid bg-dark d-flex justify-content-around ">
            <div class="row">
                <div class="col d-flex flex-column align-items-center">
                    <h2>{{info[0].namePath}}</h2>
                    <div>
                        <a href="/">{{info[0].home}}</a>
                        <span> / {{info[0].namePath}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.my_container{
    color:$secondary;
    a{
        color:$secondary;
    }
}

.padding{
    padding: 150px;
}

h2{
    font-size: 64px;
    margin-bottom: 25px;
    text-transform: uppercase;
}
</style>