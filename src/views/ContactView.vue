<script lang="ts" setup>
import SocialLinks from '@/components/SocialLinks.vue';



</script>
<template>
    <div class="content" id="contact">
        <h1 class="title">👋 Restons en contact </h1>
        <SocialLinks /> 
    </div> 
</template>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .title {
        text-align: center;
    }

    

    @media screen and (min-width:992px) {
        .content {
            padding: 50px 75px;
        }
        
    }

</style>