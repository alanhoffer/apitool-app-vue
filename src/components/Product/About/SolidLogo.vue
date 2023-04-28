<template>
    <div class="logo">
        <img src="@/assets/SolidLogo.png">
    </div>
</template>

<script>
    export default {
        name:'SolidLogo'
    }
</script>

<style lang="css" scoped>

    .logo img{
        width: 140px;
        height: 140px;
        opacity: 0.95;
        cursor: pointer;
        margin:20px;
    }
    .logo img:hover{
        opacity: 1;
    }


    @media screen and (max-width: 1280px) {
        .logo img{
            width: 90px;
            height: 90px;
        }
    }

    @media screen and (max-width: 768px) {
        .logo img{
            width: 70px;
            height: 70px;
        }
    }
</style>