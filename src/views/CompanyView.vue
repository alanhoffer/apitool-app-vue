<template>
    <section class="company">
        <About/>
        <OurWork />
        <Stats />
        <AboutUs />
        <Footer />
    </section>
</template>

<script>
import About from '@/components/Company/About/About.vue';
import AboutUs from '@/components/Company/AboutUs/AboutUs.vue';
import OurWork from '@/components/Company/OurWork/OurWork.vue';
import Stats from '@/components/Company/Stats/Stats.vue';
import Footer from '@/components/Footer/Footer.vue'

    export default {
    name: "CompanyView",
    components: { About, OurWork, Footer, Stats, AboutUs }
}
</script>



<style lang="css" scoped>
    .company{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
</style>


<style>
 nav{
    background-image: none;
 }
</style>