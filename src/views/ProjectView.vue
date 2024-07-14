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
    <div class="container mb-150 mt-60">
        <div v-if="project" class="content">
            <a :href="project.link">
                <div class="project-image">
                    <img :src="project.imageSource" :alt="project.imageAlt">
                </div>
            </a>
            <div class="project-details">
                <div>
                    <div class="container-keywords">
                        <span v-for="keyword in project.keywords" :key="keyword" class="keyword rounded">{{ keyword }}</span>
                    </div>
                    <h1 class="project-details__title">{{ project.title }} </h1>
                    <p class="project-details__description">{{  project.description }}</p>
                </div>
                <a :href="project.link" target="_blank" class="project__link">Voir le projet en ligne</a>
            </div>
        </div>
        <div v-else>
            <p> Projet non trouvé </p>
        </div>
    </div>
</template>

<style scoped>

    .content {
        display: flex; 
        flex-direction: row;
        gap: 50px;  
        padding: 130px 0;
    }

    .project-image {
        width: 100%;
        max-width: 700px;
    }

    .project-image img {
        width: 100%;
        display: block;
        object-fit: cover;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px 25px;
    }

    .project__link {
        align-self: flex-end;
    }



</style>