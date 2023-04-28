<template>
    <div class="download">
            <h3 class="title">Available Now</h3>
            <p class="description"> Download on iOS and Android today.</p>
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
    export default {
        name: 'DownloadComponent'
    }
</script>

<style lang="css" scoped>

    .download{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        margin:auto;
        background-color:var(--color-black-light);
    }

    .download  h3{
        font-size: 2.5rem;
        color:var(--color-grey-light);
    }

    .download p{
        padding: 1rem 0 1rem 0 ;
        font-size: 1.5rem;
        margin-bottom:50px;
        color:var(--color-grey-light);
        border:1px solid var(--color-yellow);
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top:none;
    }

    .buttons{
        display:flex;
        align-items: center;
    }
    a{
        margin:10px
    }

    img{
        max-height: 80px;
        transform: translateY(0px);
        transition: 0.15s ease;
    }
    img:hover{
        transform: translateY(-3px);
        transition: 0.15s ease;
    }



    @media (max-width: 1440px){
        img{
            max-height: 70px;
            transform: translateY(0px);
            transition: 0.15s ease;
        }

    }

    @media (max-width: 1280px){
        img{
            max-height: 60px;
            transform: translateY(0px);
            transition: 0.15s ease;
        }

        .download p{
            width: 80%;
        }

    }

    @media (max-width: 768px){

        img{
            max-height: 50px;
            transform: translateY(0px);
            transition: 0.15s ease;
        }
        .download p{
            width: 80%;
        }

    }
</style>