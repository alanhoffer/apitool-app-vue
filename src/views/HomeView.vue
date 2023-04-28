<template>
        <section class="news">
            <div class="container" id="news">
                <News />
            </div>
        </section>
</template>

<script>

import News from '@/components/Home/News/News.vue'

export default {
    name: 'HomeView',
    components:{
        News,
    }
   

}
</script>

<style lang="css" scoped>


    .news{
        height: 100%;
        display:flex;
        background-image: 
            linear-gradient(
                to right, 
                var(--color-black-transparent),
                var(--color-black-transparent)),
                url('https://i.imgur.com/gFaiJa3.jpeg');
    }

    .container{
        display:flex;
        width: 60%;
        height: calc(100% - 100px);
        margin:auto;
    }


    @media (max-width: 1440px) {

    }


    @media (max-width: 1280px) {

    }


    @media (max-width: 768px) {
        .container{
            width: 100%;
            justify-content: center;
        }
        .news{
            height: calc(100% - 100px);
        }
    }

    

</style>