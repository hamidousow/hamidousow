<script lang="ts" setup>
import SocialLinks from '@/components/SocialLinks.vue';


</script>
<template>
    <section class="content mt-60" id="contact">
        <h1 class="title">👋 Restons en contact </h1>
        <SocialLinks />            
    </section> 
</template>

<style scoped>
    .content {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        text-align: center;
    }

    .container-social {
        align-self: center;
        align-items: flex-start;
    }

    

    @media screen and (min-width:992px) {
        .content {
            padding: 50px 75px;
        }
        
    }

</style>