<template>
    <div class="video">
            <iframe 
                src="https://www.youtube.com/embed/W-f6F2gxrl4">
            </iframe>
    </div>
</template>

<script>
    export default {
        name: 'VideoComponent'
    }
</script>

<style lang="css" scoped>

    .video{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 800px;
        margin:auto;
        background-color:var(--color-black-light);

    }
    iframe{
        width: 50%;
        height: 75%;
    }

    


    @media (max-width: 1440px){
        iframe{
            width: 80%;
            height: 75%;
        }
    }

    @media (max-width: 1280px){
        .video{
            height: 700px;
        }
    }

    @media (max-width: 768px){

        .video{
            height: 600px;
        }

    }

</style>