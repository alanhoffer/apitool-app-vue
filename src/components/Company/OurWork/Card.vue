<template>
        <div class="service" @click="toggleActive()">
                    <img :src="image" />
                    <div class="information" :class="{active: isActive}" >
                        <h3> Lorem ipsum dolor </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa optio doloribus architecto saepe similique. 
                            Fugit, mollitia est. Doloremque cupiditate, aspernatur ipsam delectus reprehenderit alias sed at. Tenetur, atque cum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa optio doloribus architecto saepe similique. 
                            Fugit, mollitia est. Doloremque cupiditate, aspernatur ipsam delectus reprehenderit alias sed at. Tenetur, atque cum.
                            Lorem ipsum dolor sit amet consectetur adipisicing Doloremque cupiditate, aspernatur ipsam delectus reprehenderit alias sed at. Tenetur, atque cum.
                            Lorem ipsum dolor sit amet consectetur adipisicing</p>

                    </div>

                    <div v-if="!isActive" class="open" >
                        <p>Readmore</p>
                    </div>
                </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:{
            image:String
        },
        data() {
            return {
                isActive: false,
            };
        },
        methods: {
            toggleActive() {
                this.isActive = !this.isActive;
            }
        },
    }
</script>

<style lang="css" scoped>

    .service{
        display:flex;
        position: relative;
        flex-direction:column;
        width: 300px;
        height: 500px;
    }
    .service img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        object-position: left;
    }

    .open{
        display:none;
    }

    
    .service:hover .open {        
        display:flex;
        cursor: pointer;
        width: 100%;
        height: 100%;
        flex-direction:column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: var(--color-yellow-transparent);
    }

    .information {
        display:none;
    }

    .information.active {
        display:flex;
        cursor: pointer;
        width: 100%;
        height: 100%;
        flex-direction:column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: var(--color-yellow-transparent);
    }

    h3{
        height: 20%;
        font-size:2rem;
        font-family: 'Open Sans';
        font-weight: bold;
        color:var(--color-black);
    }
    .information p{
        width: 90%;
        font-size:1rem;
        font-family: 'Open Sans';
        color:var(--color-black);
    }

    .open p{
        font-size:1.5rem;
        color: var(--color-grey-light);
    }

    @media screen and (max-width: 1440px){

    }
    @media screen and (max-width: 1280px){

    
    }
    @media screen and (max-width: 768px){

        .service{
            margin: 3rem 0 3rem 0;
        }

    }




</style>