<template>
    <div class="comments">
        <div class="comment"> 
            <p class="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi quam reiciendis quae mollitia dolores dignissimos ea. Blanditiis praesentium quo eum mollitia officiis vitae debitis tenetur quam, provident, commodi esse? </p>
            <p class="user"> @ALANHOFFER </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CommentsComponent'
    }
</script>

<style lang="css" scoped>
    .comments{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        margin:auto;
        background-color:var(--color-black);

    }
    .comment{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
    .description{
        margin: 0 0 3rem 0;
        display: inline-block;
        font-size: 2.5rem;
        width: 35%;
        flex-grow: 0;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 3em;
        line-height: 1em;
        color:var(--color-grey-light);
    }
    .user{
        color:var(--color-grey-light);
        padding: 2rem 0 0 0 ;
        font-size: 1.5rem;
        border:1px solid var(--color-yellow);
        border-left:150px solid transparent;
        border-right:150px solid transparent;
        border-bottom:none;

    }


    @media (max-width: 1440px){
        .description{
            font-size: 2.5rem;
            width: 40%;
        }
    }

    @media (max-width: 1280px){
        .description{
            font-size: 2.5rem;
            width: 60%;
        }
    }

    @media (max-width: 768px){
        .description{
            font-size: 2.5rem;
            width: 80%;
        }

        .user{
            border-left:50px solid transparent;
            border-right:50px solid transparent;
        }
    }

</style>