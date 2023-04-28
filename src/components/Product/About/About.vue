<template>
    <div class="about">
        <div class="branch"> 
            <SolidLogo/>
            <h2> APITOOL+</h2>
        </div>
        <p class="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas maxime facere voluptate magni, quasi quisquam ea laborum, nesciunt eos officia ex atque sit nobis incidunt! A nihil odio perferendis.</p>
        <div class="buttons">
            <a href="https://apps.apple.com/us/app/apitool">
                <img src="https://files.facepunch.com/Rohan/2020/May/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png" alt="">
            </a>
            <a href="https://play.google.com/store/apps/details?id=apitool">
                <img src="https://files.facepunch.com/Rohan/2020/May/google-play-badge2.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import SolidLogo from '@/components/Product/About/SolidLogo.vue';

    export default {
    name: "AboutComponent",
    components: { SolidLogo }
}
</script>

<style lang="css" scoped>
    .about{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 800px;
        margin:auto;
        
    }
    .branch{
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .branch h2{
        margin:10px;
        margin-top:20px;
        font-size: 160px;
        color:var(--color-grey-light)
    }

    .description{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5rem;
        padding: 3rem 0 3rem 0;
        color: var(--color-grey-light);
        width: 60%;
    }
    .buttons{
        display:flex;
        align-items: center;
    }
    a{
        margin:10px
    }

    img{
        max-height: 48px;
        transform: translateY(0px);
        transition: 0.15s ease;
    }
    img:hover{
        transform: translateY(-3px);
        transition: 0.15s ease;
    }

    @media screen and (max-width: 1280px) {

        .branch h2{
            font-size: 90px;
        }
        .description{
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {

        .about{
            width: 90%;
            height: 700px;
        }
        .branch h2{
            font-size: 80px;
        }
        .description{
            width: 90%;
        }

    }
</style>