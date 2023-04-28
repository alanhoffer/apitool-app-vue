<template>
    <div class="galery">
        <div class="card-list">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
    export default {
        name: 'GaleryComponent',
        components:{
            Card
        },
    }
</script>

<style lang="css" scoped>


    .galery{
        display:flex;
        width: 100%;
        background-color:var(--color-black);
    }
    .card-list{
        display:grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8rem;
        width: 50%;
        margin:auto;
        padding: 8rem 0;
    }




    @media (max-width: 1440px){

    }

    @media (max-width: 1280px){
        .card-list{
        width: 60%;
        }
    }

    @media (max-width: 768px){

        .card-list{
        display:block;
        width: 80%;
        }
    }
</style>