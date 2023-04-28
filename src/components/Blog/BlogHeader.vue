<template>
    <div class="content">

        <h2 class="title">{{this.newsData.title}}</h2>
        <p class="description"> {{this.newsData.description}}</p>
        <div class="information">
            <div class="date">
                <p>{{this.newsData.date}}</p>
            </div>
            
            <div class="type">
                <p>{{this.newsData.type}}</p>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name:'NoticeMain',
        data(){
            return {
                newsData: {},
            }
        },
        created(){
        fetch('https://63530f39d0bca53a8eb9fa65.mockapi.io/news/' +  this.$route.query.id )
        .then(res => res.json())
        .then(response => {
                this.newsData = response;
                this.formatDate();
            })
        },
    
        methods: {
            formatDate(){
                const options = { 
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                };

                var newDate = new Date(this.newsData.date).toLocaleDateString('es-ES', options);
                this.newsData.date = newDate.toUpperCase();
            }
        }
    }
</script>

<style lang="css" scoped>

    .content{
        display:flex;
        align-items: center;
        justify-content: center;
        height: 700px;
        flex-direction: column;
        width: 60%;
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

    .information{
        display:flex;
        margin:20px;
    }
    .date p{
        margin-right: 0.5rem;
        padding: 8px;
        font-size: 1rem;
        text-transform:uppercase;
        font-family: var(--font-bebas);
        background: var(--color-black);

    }

    .type p{
        padding: 8px;
        font-size: 1rem;
        text-transform:uppercase;
        font-family: var(--font-bebas);
        background: var(--color-yellow-transparent);

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