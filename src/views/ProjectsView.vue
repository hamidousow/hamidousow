<script lang="ts" setup>
import ProjectsList from '../components/ProjectsList.vue';

</script>
<template>
    <div class="section-projects projects work section-padding section-margin-bottom" id="work">
        <div class="container-title">
            <h2 class="projects__title big-title outline-title vertical-text"> projets </h2>  
            
        </div>
        <ProjectsList/>   
    </div>
</template>



<style scoped>
    .section-projects {
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding-top: 130px;
    }

    .container-title {
        position: relative;
    }

    .projects__title {
        line-height: 100%;
        position: fixed;        
    }



</style>