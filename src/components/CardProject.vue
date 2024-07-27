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
            <div class="card__content">
							  <div class="card__background">
                <img :src="project.imageSource" :alt="project.imageAlt">
            </div>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <h3 class="card__title pixelify-font-bold"> {{ project.title }} </h3>
                </a>           
                <a href="" class="card__button pixelify-font-medium">découvrir</a>
            </div> 
                         
        </div>
        <div class="container-keywords">             
            <h4 
            v-for="keyword in project.keywords" 
            :key="keyword"
            class="keyword box-shadow border-3"
            >{{ keyword }}</h4>
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
        padding: 10px;
        aspect-ratio: 3 / 2;  
        overflow: hidden;
    }

    .card__content {
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
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
        border: 1px solid var(--clr-black);
        align-self: end;
    }

    .card__background {
        /*height: 100%;
        width: 100%;*/
    }
    
    .card__background img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* z-index: -1;
        position: inherit; */
				flex: 1;
    }     

    /*@media screen and (min-width: 567px) {


        .card-wrapper {
            max-width: 335px;
        }
        .card-wrapper:nth-child(even) {
            margin-top: 50px;
        }
        
    }*/

    @media screen and (min-width: 765px) {


        /* .card-wrapper {
                         
        } */
        .card-wrapper:nth-child(even) {
            margin-top: 50px;
        }

        .card {
            width: 100%;
            max-width: 460px;
            max-height: 525px;
            aspect-ratio: 2/3;
        }
        
    }





</style>