<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
    <NavBar/>
    <div id="site" class="container">        
        <router-view></router-view>
    </div>
</template>

<style scoped>
    #site {
        margin-top: auto;
        min-height: 100dvh;
    }

</style>
