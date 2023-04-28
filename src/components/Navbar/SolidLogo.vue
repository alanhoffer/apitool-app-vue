<template>
    <div class="logo">
        <img src="@/assets/SolidLogo.png">
    </div>
</template>

<script>
    export default {
        name:'SolidLogo',
    }
</script>

<style lang="css" scoped>

    .logo img{
        width: 50px;
        height: 50px;
        opacity: 0.95;
        cursor: pointer;
    }
    .logo img:hover{
        opacity: 1;
    }

    @media screen and (max-width: 768px){
        .logo img{
            width: 40px;
            height: 40px;
        }
    }
</style>