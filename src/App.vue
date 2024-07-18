<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
    <NavBar/>
    <div id="site" class="container">        
        <RouterView />
    </div>
</template>

<style scoped>
    #site {
        margin-top: auto;
        min-height: 100dvh;
        display: flex;
        align-items: center;
    }

</style>
