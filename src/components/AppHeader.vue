<script>
import { router } from '../router';

export default{
    name: "AppHeader",
    data(){
        return {
            routes: [
                {
                    path: '/',
                    name: 'home',
                },
                {
                    path: '/blog',
                    name: 'blog',
                },
                {
                    path: '/events',
                    name: 'events',
                },
                {
                    path: '/gallery',
                    name: 'gallery',
                },
                {
                    path: '/about',
                    name: 'about us',
                },
                {
                    path: '/contact',
                    name: 'contact us',
                },
                {
                    path: '/shop',
                    name: 'shop',
                }
            ]
        } 
    }
}
</script>

<template>
<!-- nav bar -->
    <nav class="navbar navbar-expand-lg bg-black p-4 sticky-top custom-shadow">

        <div class="container-fluid">
            <!-- logo -->
            <a class="navbar-brand" href="#">
                <img src="/assets/Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            </a>
            
            <!-- menu di navigazione -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(route, index) in routes" :key="index">
                        <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> c'era classe "active" -->
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a> -->
                        <!-- sezione del dropdown -->
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
                </ul>

                <!-- <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
            </div>            
        </div>
    </nav>

   
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.navbar-nav .nav-link{
    color: $secondary;
    text-transform: uppercase;
    font-weight: bold;
}
.navbar-nav:hover, .nav-link:hover{
    color:orange;
}

.router-link-active.router-link-exact-active{
    color:$primary;
}

.custom-shadow {
    box-shadow: 0px 5px 5px 0px rgba(255, 255, 255, 0.1);
}


</style>
