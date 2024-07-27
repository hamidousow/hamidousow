<script lang="ts" setup>
import KeywordsList from '@/components/KeywordsList.vue';
import type { Project } from '@/types/Project';

defineProps<{
    project: Project
}>()

</script>
<template>
    <div class="card-wrapper ">
        <div class="card border-3 box-shadow" data-component="card" id="id project">        
            
            <img :src="project.imageSource" :alt="project.imageAlt">
            <div class="card__details">
                
                <h3 class="card__title pixelify-font-bold"> {{ project.title }} </h3>
                
                <div class="container-keywords">             
                    <h4 
                    v-for="keyword in project.keywords" 
                    :key="keyword"
                    class="keyword"
                    >{{ keyword }}</h4>
                </div>          
                <span href="" class="card__button pixelify-font-medium">+ découvrir</span>
            </div>
            
        </div>
        
    </div>
</template>


<style scoped>
    .card-wrapper {
        width: 100%;     
    }

    a {
        text-decoration: none;  
    }

    .card {
        display: flex;
        flex-direction: column;   
        justify-content: flex-end; 
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .card img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card__details {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card__title {
        font-size: 16px;
        color: var(--clr-black);        
        font-weight: bold;
        text-transform: uppercase;
        opacity: .9;
    }

    .card__button {
        text-decoration: none;
        color: var(--clr-black);
        background-color: var(--clr-white);
        padding: 3px 7px;
        align-self: end;
    }

    @media screen and (min-width: 765px) {

        /* .card {
            
            grid-template-rows: 300px 1fr;
            
        } */

        .card-wrapper:nth-child(even) {
            margin-top: 50px;
        }

        .card {
            width: 100%;
            max-width: 460px;
            max-height: 525px;
        }
        
    }

</style>