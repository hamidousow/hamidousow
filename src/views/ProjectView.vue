<script lang="ts" setup>
import projects from '@/data/projects'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id

const project = getProjectById(id)



</script>

<template>
    <div class="section-padding section-margin-bottom">
        <div>
            <h1>{{ project.title }} </h1>
            <p>{{  project.description }}</p>
            <a :href="project.link" target="_blank">Voir le projet en ligne</a>
        </div>
        
    </div>
</template>



<style>

</style>