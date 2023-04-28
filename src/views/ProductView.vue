<template>
    <section class="product">
        <About />
        <Comments />
        <Video />
        <Galery />
        <Download />
        <Footer />
    </section>
</template>

<script>
import About from '@/components/Product/About/About.vue';
import Video from '@/components/Product/Video/Video.vue';
import Footer from '@/components/Footer/Footer.vue';
import Galery from '@/components/Product/Galery/Galery.vue';
import Download from '@/components/Product/Download/Download.vue';
import Comments from '@/components/Product/Comments/Comments.vue';

    export default {
    name: "ProductView",
    components: { About, Comments, Video, Galery, Download, Footer }
}
</script>

<style lang="css" scoped>
    .product{
        box-sizing: inherit;
        display:flex;
        flex-direction: column;        
        background-image: 
            linear-gradient(
                to right, 
                var(--color-black-transparent),
                var(--color-black-transparent)),
                url('https://i.imgur.com/gFaiJa3.jpeg'
            );
    }

    

</style>