<template>
    <div>
        <p class="outline-button" :class="{active: isActive}">{{buttonText}}</p>
    </div>
</template>

<script>
    export default {
        name:'OutlineButton',
        props:{
            buttonText: String,
            isActive: Boolean,
        }
    }
</script>

<style lang="css" scoped>

.outline-button{
    padding:3px;
    margin:20px;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: 'Bebas Neue';
    border-top: 4px solid transparent;
    border-bottom: 2px solid transparent;
    
    transition: all 0.3s;
}

.outline-button:hover{
    color:var(--color-white);
    border-bottom: 2px solid var(--color-yellow);
}

.outline-button.active{
    color:var(--color-white);
    border-bottom: 2px solid var(--color-yellow);
}
</style>