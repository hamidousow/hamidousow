<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ProjectsList from '../components/ProjectsList.vue';
import projects from '@/data/projects'
import CardProject from '@/components/CardProject.vue';

const router = useRouter();
function navigateTo(id:any) {
    router.push(`/project/${id}`)
}

</script>
<template>
    <div class="section-projects projects work section-padding mb-150" id="work">
        <div class="container-title">
            <h2 class="projects__title big-title vertical-text pixelly-font-bold"> projets </h2>  
            
        </div>
        <div class="separator white-space"></div>
        <div class="container-cards" id="container-cards-projects">
            <CardProject 
                v-for="project in projects" 
                :project="project" 
                :key="project.id"
                @click="navigateTo(project.id)"
            />
        </div> 
    </div>
</template>

<style scoped>
    .section-projects {
        padding-top: 130px;
        display: flex;
        flex-direction: row;
    }

    .container-title {
        position: relative;
    }

    .projects__title {
        line-height: 100%;
        position: sticky;
        top: 130px;      
    }

    .container-cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px 0;
        flex: 4;
    }

    .white-space {
        flex: 1;
    }

    @media screen and (min-width:765px) {
        .container-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 990px;
            justify-content: space-between;
            gap: 55px;
            flex: auto;
        }

        .white-space {
            flex: auto;
        }
    }



</style>