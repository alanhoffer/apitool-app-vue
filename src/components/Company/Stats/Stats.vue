<template>
    <div class="stats">
        <div class="container">
            <Stat title="Trabajando hace" data="5.3" type="AÑOS" />
            <Stat title="Apicultores Alcanzados" data="3.3" type="CIENTOS" />
            <Stat title="Colmenares Organizados" data="9.7" type="MIL" />
        </div>
    </div>
</template>

<script>
import Stat from './Stat.vue';

    export default {
        name: 'StatsComponent',
        components:{
            Stat
        }
    }
</script>

<style lang="css" scoped>
    .stats{
        display:flex;
        align-items:flex-end;
        width: 100%;
        height: 60vh;
        background-image: 
            linear-gradient(
                to right, 
                transparent,
                transparent),
                url('https://rare-gallery.com/uploads/posts/4600772-hummel-bombus-eye-insect-bee-honey-bee-beekeeping.jpg'
            );
        background-repeat: no-repeat;
        background-size: cover;
        background-position:bottom;
    }

    .container{
        display:flex;
        align-items:center;
        justify-content: space-evenly;
        height: 60%;
        width: 100%;
       background-color: var(--color-black-transparent)
    }
</style>