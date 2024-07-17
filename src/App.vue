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
    <FooterComponent/>
</template>

<style scoped>
    #site  {
        min-height: 90dvh;
    }

</style>
