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
                <div class="col">
                    <h1>{{info[0].namePath}}</h1>
                    <a href="/">{{info[0].home}}</a>
                    <span> / {{info[0].namePath}}</span>
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
</style>