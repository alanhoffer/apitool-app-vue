<template>
    <section class="news">
        <div class="container" id="news">
            <BlogHeader :noticeData="newsData" />
            <BlogBody :noticeData="newsData" />
        </div>
    </section>
</template>

<script>

import BlogBody from '@/components/Blog/BlogBody.vue';
import BlogHeader from '@/components/Blog/BlogHeader.vue';

export default {

    name: 'NoticeView',
    components:{
    BlogHeader,
    BlogBody
},




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
        flex-direction: column;
        align-items: center;
        width: 100%;
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