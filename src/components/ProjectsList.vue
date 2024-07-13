<script lang="ts" setup>
import CardProject from '@/components/CardProject.vue'

</script>
<template>                                 
    <div class="container__cards" id="container-cards-projects">
        <CardProject/>
        <CardProject/>
        <CardProject/>
    </div>
</template>
<style scoped>
    .container__cards {
        display: flex;
        flex-direction: column;
        gap: 17px;
    }

</style>