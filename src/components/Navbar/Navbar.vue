<template>
    <nav >
        <div class="container">
                <div class="logo">
                    <SolidLogo />
                    <i class="pi pi-bars" style="font-size: 2rem" @click="toggleHamburger"></i>

                </div>
                <div class="buttons" :class="{active: this.isHamburger}" >
                    <router-link to="/"><OutlineButton @click="toggleHamburger" buttonText="NOTICIAS" :isActive="currentRouteName() === 'Home'"/></router-link>
                    <router-link to="/products"><OutlineButton @click="toggleHamburger" buttonText="PRODUCTO" :isActive="currentRouteName() === 'Products'" /></router-link>
                    <router-link to="/company" ><OutlineButton @click="toggleHamburger" buttonText="COMPAÑÍA" :isActive="currentRouteName() === 'Company'"/></router-link>
                    <SolidButton @click="readmore" />

                </div>
        </div>
    </nav>
</template>

<script>
import OutlineButton from './OutlineButton.vue';
import SolidButton from './SolidButton.vue';
import SolidLogo from './SolidLogo.vue';

export default {
    name: "NavbarComponent",
    components: { SolidLogo, OutlineButton, SolidButton },
    data(){
        return {
            isHamburger: true,
        }
    },
    methods:{
        toggleHamburger(){
            this.isHamburger = !this.isHamburger;
        },
        currentRouteName() {
            return this.$route.name;
        },

    }
    }
</script>

<style lang="css" scoped>
    nav{
        display:flex;
        width: 100%;
        padding: 30px 0 30px 0;
        align-items: center; 
        position:absolute;
        justify-content:space-between;
    }


    .container{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 60%;
        margin:auto;
            
    }

    .buttons{
        display:flex;
        flex-direction:row;
        align-items: center;
    }

    i{
        display:none;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }


@media screen and (max-width: 768px) {


    nav{
        position:relative;
        background-color: var(--color-black-light);
    }
    .container{
        flex-direction:column;
        height: auto;
        width: 80%;
    }


    
    i{
        display:block;
        color:var(--color-grey-light);
    }
    .buttons{
        display:flex;
        flex-direction:column;
    }
    .buttons.active{
        display:none;
        flex-direction:column;
    }
    
    .logo{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
    }

}

</style>