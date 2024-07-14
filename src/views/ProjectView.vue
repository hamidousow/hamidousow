<script lang="ts" setup>
import projects  from '@/data/projects';
import type { Project } from '@/types/Project';
import { useRoute } from 'vue-router'

const route = useRoute()

const id: string | string[] = route.params.id

let projectArray = projects.filter(
    function(project) {
        if(project.id == Number(id)) {
            console.log(project)
            return project
        }
    }
)

let project: Project | null = projectArray[0]

</script>

<template>
    <div class="section-padding section-margin-bottom">
        <div v-if="project">
            <div class="project-image">
                <img :src="project.imageSource" :alt="project.imageAlt">
            </div>
            <div>
                <div class="container-keywords">
                    <span v-for="keyword in project.keywords" :key="keyword">{{ keyword }}</span>
                </div>
                <h1>{{ project.title }} </h1>
                <p>{{  project.description }}</p>
                <a :href="project.link" target="_blank">Voir le projet en ligne</a>
            </div>
        </div>
        <div v-else>
            <p> Projet non trouvé </p>
        </div>
    </div>
</template>

<style>

   

</style>