<script lang="ts" setup>
import KeywordsList from '@/components/KeywordsList.vue';
import type { Project } from '@/types/Project';

defineProps<{
    project: Project
}>()

</script>
<template>
    <div class="card-wrapper">
        <div class="card" data-component="card" id="id project">        
            <div class="card__content">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <h3 class="card__title"> {{ project.title }} </h3>
                </a>           
                <a href="" class="card__button rounded">décourvir</a>
            </div> 
            <div class="card__background">
                <div class="background-gradiant"></div>
                <img :src="project.imageSource" :alt="project.imageAlt">
            </div>               
        </div>
        <div class="container-keywords">             
            <h4 
            v-for="keyword in project.keywords" 
            :key="keyword"
            class="keyword rounded"
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
    }

    .card__content {
        height: 100%;
        display: flex;
        z-index: 10;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
    }

    .card__title {
        font-size: 16px;
        color: var(--clr-grey);        
        font-weight: bold;
        text-transform: uppercase;
        color: var(--clr-grey);
        opacity: .9;
    }

    .card__button {
        text-decoration: none;
        color: var(--clr-grey);
        background-color: transparent;
        padding: 3px 7px;
        border: 1px solid var(--clr-grey);
        align-self: end;
    }

    .card__button:hover, .card:hover .card__button  {
        background-color: var(--clr-green);
        color: var(--clr-black);
        border: 0px transparent;
    }


    .card__background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .background-gradiant {
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.722) 0%, rgba(0,0,0,0) 50%, rgba(0, 0, 0, 0.722) 100%);
    }
    .card__background img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* z-index: -1;
        position: inherit; */
    }    

    .rounded {
        border-radius: 25px;
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