<template>
    <div class="footer">
        <div class="contact">
            <p class="copyrights">© 2022 CABAÑA HOFFER. All rights reserved.</p>
            <div class="social-media">
                <i class="pi pi-instagram" style="font-size: 1.25rem"></i>
                <i class="pi pi-discord" style="font-size: 1.25rem"></i>
                <i class="pi pi-facebook" style="font-size: 1.25rem"></i>
                <i class="pi pi-youtube" style="font-size: 1.25rem"></i>
                <i class="pi pi-twitter" style="font-size: 1.25rem"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style lang="css" scoped>
    .footer{
            display:flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100px;
            margin:auto;
            background-color:var(--color-grey-light);
    }
    .contact{
        display:flex;
        justify-content: space-between;
        width: 60%;
    }
    .copyrights{
        font-size: 1rem;
        padding:10px;
        margin:5px;
        color:var(--color-black);
    }
    .social-media{
        display:flex;
        align-items: center;
    }
    .social-media i{
        margin:5px;
        padding:10px;
        cursor: pointer;
        border-radius: 50%;
        color:var(--color-grey-light);
        background-color:var(--color-black);
    }

    .social-media i:hover{
        background-color:var(--color-yellow);
    }
    @media screen and (max-width: 768px) {    

        .footer{
            
            height: 150px;
        }
        .contact{
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
        
    }
</style>