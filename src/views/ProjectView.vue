<script lang="ts" setup>
import projects  from '@/data/projects';
import type { Project } from '@/types/Project';
import { useRoute } from 'vue-router'
import openNewIcon from '@/assets/images/open_in_new.svg'

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
    <div class="mb-150 mt-60">
        <div v-if="project" class="content">
            <a :href="project.link" class="background-image">
                <div class="project-image">
                    <img :src="project.imageSource" :alt="project.imageAlt">
                </div>
            </a>
            <div class="project-details">
                <div>
                    <div class="container-keywords">
                        <span v-for="keyword in project.keywords" :key="keyword" class="keyword pixelly-font-medium">{{ keyword }}</span>
                    </div>
                    <h1 class="project-details__title pixelly-font-bold">{{ project.title }} </h1>
                    <p class="project-details__description">{{  project.description }}</p>
                    <!-- <a :href="project.link" target="_blank" class="project__link">Voir le projet en ligne</a> -->
                </div>
                <div class="container-buttons">
                    <a href="" class="project-link-btn github-link">

                    </a>
                    <div class="container-button">
                        <a :href="project.link" class="button project-link-btn live-link" target="_blank" rel="noreferrer">
                            <img :src="openNewIcon" alt="open blanck page">
                        </a>
                    </div>
                </div>
                
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
        flex-direction: column;
        gap: 20px;      
    }

    .project-image {
        width: 100%;
        /* max-width: 700px; */
    }

    .project-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* padding: 50px 25px; */
    }

    .project-details__title, .project-details__description {
        margin-bottom: 12px;
    }    

    .project__link {
        align-self: flex-end;
    }

    .container-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 12px 0;
    }

    .container-button {
        
        background-color: var(--clr-green);
        width: 47px;
        height: 47px;
        border-radius: 5px;
        margin: 5px 0;
    }
    .container-button .button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    @media screen and (min-width: 765px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .project-details {
            padding: 50px 25px;
        }

        .project-image {
            width: 100%;
            height: 100%;
        }
    }



</style>