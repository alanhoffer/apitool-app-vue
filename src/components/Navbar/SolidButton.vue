<template>
    <div>
        <button class="solid-button">DESCARGAR</button>
    </div>
</template>

<script>
    export default {
        name:'SolidButton'
    }
</script>

<style lang="css" scoped>
    button.solid-button{
        background-color:var(--color-yellow);
        color:var(--color-black);
        border: none;
        border-radius: 2px;
        font-family: Bebas Neue;
        transition: all 0.3s;
        font-size:18px;
        cursor: pointer;
        padding:5px;
        padding-left: 20px;
        padding-right: 20px;
        margin:10px;
    }
    button.solid-button:hover{
        background-color: var(--color-white);
    }
</style>