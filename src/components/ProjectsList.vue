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
    <div class="container__cards" id="container-cards-projects">
        <CardProject 
            v-for="project in projects" 
            :project="project" 
            :key="project.id"
            @click="navigateTo(project.id)"
        />
    </div>
</template>
<style scoped>
    .container__cards {
        display: flex;
        flex-direction: column;
        gap: 17px;
    }

</style>