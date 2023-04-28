<template>
    <div class="card">
        <img src="https://miro.medium.com/max/1400/0*kz3EpLcVIyGgodXY" />
        <div class="title">
            <i class="pi pi-map" style="font-size: 1.2rem" @click="toggleHamburger"></i>
            <h3>text</h3>
        </div>
        <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum, alias numquam earum, dicta error ipsum distinctio aspernatur voluptate perferendis fugit sit reiciendis optio voluptates aliquam explicabo neque fugiat officiis?
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:{
            img: String,
            icon: String,
            text: String,
            description: String,
        },
    }
</script>

<style lang="css" scoped>

    .card{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .card:nth-of-type(even){
        margin-top: 20vh;
    }
    .card img{
        width: 100%;
        height: 600px;
        border-radius: 10px;
        filter: drop-shadow(5px 5px 4px rgb(32, 32, 32));
    }
    .title{
        display:flex;
        align-items: center;
        margin-top: 40px;
        width: 100%;
    }

    .title i{
        border: 1px solid var(--color-grey-light);
        background-color:var(--color-black);
        border-radius: 50%;
        padding:0.6rem;
        color: var(--color-grey-light);
    }

    .title h3{
        font-size: 2.5rem;
        font-weight: 400;
        margin-left: 1rem;
        color: var(--color-yellow);
    }


    .description{
        margin-top: 20px;
        text-align: left;
        color: var(--color-grey-light);
        line-height: 1.5rem;
        font-family: 'Open Sans';
    }

    
    @media (max-width: 1440px){

        .card img{
            height: 500px;
        }
    }

    @media (max-width: 1280px){

        .card img{
            height: 400px;
        }
    }

    @media (max-width: 768px){

        .card img{
            height: 400px;
        }

        .card:nth-of-type(even){
        margin-top: 10vh;
        }   
        .card:nth-of-type(3){
            margin-top: 10vh;
        }
    }
    
</style>