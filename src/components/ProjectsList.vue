<script lang="ts" setup>
import CardProject from '@/components/CardProject.vue'
import projects from '@/data/projects'
import { useRouter } from 'vue-router'

const router = useRouter();

function navigateTo(id:any) {
    router.push(`/project/${id}`)
}


</script>
<template>                                 
    <div class="container-cards" id="container-cards-projects">
        <CardProject 
            v-for="project in projects" 
            :project="project" 
            :key="project.id"
            @click="navigateTo(project.id)"
        />
    </div>
</template>
<style>
    .container-cards {
        display: flex;
        /* flex-direction: column; */
        flex-direction: row;
        flex-wrap: wrap;
        gap: 17px;
    }

    @media screen and (min-width:765px) {
        .container-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }


</style>