import SolidLogo from '@/components/Product/About/SolidLogo.vue';
<template>
    <div class="about-us">
        <div class="logo">
            <img src="@/assets/Company/logoblogo.png" />
        </div>

        <div class="information">
            <h3>About Us</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam qui tempora repellendus natus praesentium facere accusantium assumenda sint, 
                similique ut consequatur nihil blanditiis expedita quam libero vitae, excepturi consequuntur corporis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam qui tempora repellendus natus praesentium facere accusantium assumenda sint, 
                similique ut consequatur nihil blanditiis expedita quam libero vitae, excepturi consequuntur corporis!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam qui tempora repellendus natus praesentium facere accusantium assumenda sint, 
                similique ut consequatur nihil blanditiis expedita quam libero vitae, excepturi consequuntur corporis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam qui tempora repellendus natus praesentium facere accusantium assumenda sint, 
                similique ut consequatur nihil blanditiis expedita quam libero vitae, excepturi consequuntur corporis!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AboutUs'
    }
</script>

<style lang="css" scoped>
    .about-us{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8rem 0 8rem 0;
        width:100%;
        background-color: var(--color-black);
    }


    .logo img{
        height: 20rem;
        opacity: 0.8;
    }

    .information{
        padding: 1rem;
        width: 35%;
    }

    .information h3{
        padding-top: 4rem;
        padding-bottom: 4rem;
        font-family: 'Open Sans';
        font-weight:bold;
        font-size:3rem;
        color: var(--color-white)
    }
    .information p{
        padding-top: 1.25rem;
        text-align: left;
        font-size:1rem;
        line-height: 1.5rem;
        font-family: 'Open Sans';
        color: var(--color-grey-light)
    }

    
    @media screen and (max-width: 1440px){}
    
    @media screen and (max-width: 1280px){}
    
    @media screen and (max-width: 768px){
        .information{
            width: 80%;
        }
    }


</style>