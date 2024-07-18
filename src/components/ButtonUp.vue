<script>
export default{
    name: "ButtonUp",
    data(){
        return{
            isVisible: false,
        }
    },
    methods: {
        checkScroll(){
            // funzione per dire che deve mostrare il pulsante quando la persona fa uno scroll di 200px
            this.isVisible = window.scrollY > 200;
        }
    },
    mounted(){
        window.addEventListener('scroll', this.checkScroll);
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.checkScroll);
    }
}
</script>

<template>
        <button v-if="isVisible">
            <a href="#"><svg aria-hidden="true" class="thebase-svg-icon thebase-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg></a>
        </button>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

button{
    position: fixed;
    bottom: 20px;
    right:20px;
    border: 1px solid $primary;
    transform: rotate(180deg); 
    padding: 10px;
    background-color: transparent;
    a{
        color: $primary; 
    }
}

</style>