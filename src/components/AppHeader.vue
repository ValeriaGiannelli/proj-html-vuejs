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
            <a class="navbar-brand" href="/">
                <img src="/assets/Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            </a>
            
            <!-- menu di navigazione -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(route, index) in routes" :key="index">
                        <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> c'era classe "active" -->
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <svg aria-hidden="true" class="thebase-svg-icon thebase-search-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Search</title><path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
                        </svg>
                        </a>
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

.thebase-svg-icon.thebase-search-svg{
    color:$secondary;
    &:hover{
        color:$primary;
        cursor: pointer;
    }
}

</style>
