<template>
    <div class="stat">
        <h4>{{title}}</h4>
        <h3>{{data}}</h3>
        <p>{{type}}</p>
    </div>
</template>

<script>
    export default {
        name:'StatComponent',
        props:{
            title: String,
            data: String,
            type: String,
        }
    }
</script>

<style lang="css" scoped>

    .stat{
        display:flex;
        flex-direction: column;
        font-size:16px;
        justify-content: space-around;
    }
    .stat h4{
        font-size: 1.5em;
        font-weight:bold;
        color: var(--color-yellow);
        padding:1rem;
    }

    .stat h3{
        font-size: 5em;
        font-weight: bold;
        color: var(--color-white);
        padding:1rem;
    }

    .stat p{
        font-size: 1.5em;
        font-family: 'Open Sans';
        color:var(--color-grey-light);
        padding:1em;
    }

    @media screen and (max-width: 1440px){}
    
    @media screen and (max-width: 1280px){}
    
    @media screen and (max-width: 768px){
        .stat{
            font-size:8px;
        }
    }

</style>