<template>
    <div class="our-work">
        <video id="background-video" autoplay loop muted poster="">
            <source src="@/assets/Company/bee-video.mp4" type="video/mp4">
        </video>
        <div class="container">
            <div class="content">    
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <div class="card-list">
                    <Card image="https://thumbs.dreamstime.com/b/beekeeping-apple-trees-2777002.jpg"  />
                    <Card image="https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-184946277-f7732b2.jpg"  />
                    <Card image="https://media.istockphoto.com/id/1169718972/photo/beekeeper-working-collect-honey-beekeeping-concept.jpg?s=612x612&w=0&k=20&c=Wa7jqsjWL4m8cq2TJuhDRpsfK3AH0ZuH1mnJY5IN5qo="  />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

    export default {
    name: "OurWork",
    components: { Card }
}
</script>



<style lang="css" scoped>

    .our-work{
        display:flex;
        position:relative;
        width: 100%;
    }
    #background-video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    .container{
        display:flex;
        background-image: 
            linear-gradient(
                to right, 
                rgb(32, 32, 32, 0.95),
                rgb(32, 32, 32, 0.95));
        width: 100%;
        height: 100%;
        
    }

    .content{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 100%;
        padding: 10rem 0 10rem 0;
    }
    .content h2 {
        width: 60%;
        color: var(--color-grey-light);
        font-size: calc((4 - 1) * 1.2vw + 1rem);
        font-weight: bold; 
    }

    .card-list{
        display:grid;
        justify-content: center;
        grid-gap: 4rem;
        padding: 5rem 0 0 0;
        grid-template-columns: repeat(3, 1fr);
    }


    @media screen and (max-width: 1440px){

    }
    @media screen and (max-width: 1280px){

    }
    @media screen and (max-width: 768px){

        .our-work{
            height: auto;
        }
        .card-list{
            display:block;
        }

        .content h2 {
            width: 80%;
        }

    }

</style>


