<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import ProjectsList from './components/ProjectsList.vue'
</script>

<template>
    <NavBar/>
    <div id="site" class="light-mode">        
        <router-view></router-view>
    </div>
    <FooterComponent/>
</template>

<style scoped>

</style>
