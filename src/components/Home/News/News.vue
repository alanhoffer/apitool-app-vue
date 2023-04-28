<template>
    <div class="content">
        <div class="date">
            <p>{{this.newsData.date}}</p>
        </div>
        <h2 class="title">{{this.newsData.title}}</h2>
        <p class="description"> {{this.newsData.description}}</p>
        <button @click="readmore" class="readmore">LEER MAS</button>
    </div>
</template>

<script>

    export default {
        name:'NewsComponent',
        data(){
            return {
                newsData: {},
            }
        },
        created(){
            fetch('https://63530f39d0bca53a8eb9fa65.mockapi.io/news')
            .then(res => res.json())
            .then(response => {
                const lastNew = response.length - 1;
                this.newsData = response[lastNew];
                this.formatDate();
            })
        },
        methods: {
            readmore(){
                const queryData = {
                    id: this.newsData.id 
                }
                this.$router.push({ path: '/news', query: queryData})
            },

            formatDate(){
                const options = { 
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                };
                var newDate = new Date(this.newsData.date).toLocaleDateString('es-ES', options);
                this.newsData.date = newDate;
            }


        },

    }
</script>

<style lang="css" scoped>

    .content{
        display:flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

    .date p{
        margin-right: 0.5rem;
        padding: 8px;
        font-size: 1rem;
        text-transform:uppercase;
        font-family: var(--font-bebas);
        background: var(--color-black);

    }
    .title{
        font-size: 6.5rem;
        line-height: 10rem;
    }

    .description{
        width:60%;
        font-size: 1rem;
        margin-left: 0.5rem;
        line-height: 22px;
        text-align: start;
    }

    .readmore{
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 2rem;
        padding:0.5rem;
        margin-left: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border:none;
        border-radius: 2px;
        font-size: 1rem;
        font-family: 'Bebas Neue';
        color: var(--color-black);
        background-color: #F3B202;

    }
    .readmore:hover{
        background-color: var(--color-white);
    }

    /* RESPONSIVE */
    @media (max-width: 1440px) {

       
        .title{        
            font-size: 6rem;
        }
        .description{
            width:70%;
        }
    }

    @media (max-width: 1280px) {


        .title{        
            font-size: 5rem;
        }
        .description{
            width:80%;
        }
      
    }

    @media (max-width: 768px) {
        .content{
            display:flex;
            align-items: center;
            flex-direction: column;
        }

        .title{        
            font-size: 4rem;
        }
        .description{
            width:90%;
            text-align: center;
        }
    }



</style>