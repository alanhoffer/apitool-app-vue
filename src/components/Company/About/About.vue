<template>
    <div class="about">
        <div class="content">
            <h2> 
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style lang="css" scoped>

    .about{
        display:flex;
        width: 100%;
        height: 700px;
        background-image: 
            linear-gradient(
                to right, 
                var(--color-black-transparent),
                var(--color-black-transparent)),
                url('https://wallpaperaccess.com/full/7379851.jpg'
            );
        background-repeat: no-repeat;
        background-size: cover;
    }
    .content{
        width: 60%;
        margin:auto;
        
    }
    .content h2 {
        padding: 3rem;
        color: var(--color-grey-light);
        font-size: calc((4 - 1) * 1.2vw + 1rem);
        font-weight: bold; 
    }

    @media screen and (max-width: 1440px){

    }
    @media screen and (max-width: 1280px){

     
    }
    @media screen and (max-width: 768px){
        .about{
            height: 300px;
        }

        .content{
            width: 90%;
            margin:auto;
            
        }
    }


</style>