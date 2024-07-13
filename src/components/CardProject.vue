<script lang="ts" setup>

const props = defineProps(["project"]);

</script>
<template>
    <div>
        <div class="card" data-component="card" id="id project">        
            <div class="card__content">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <h3 class="card__title"> {{ props.project.title }} </h3>
                </a>           
                <a href="" class="card__button rounded">décourvir</a>
            </div> 
            <div class="card__background">
                <div class="background-gradiant"></div>
                <img :src="props.project.imageSource" :alt="props.project.imageAlt">
            </div>               
        </div>
        <div class="container-keywords">             
            <h4 
            v-for="keyword in props.project.keywords" 
            :key="keyword"
            class="keyword rounded"
            >{{ keyword }}</h4>
        </div>
    </div>
</template>


<style scoped>

    a {
        text-decoration: none;  
    }

    .card {
        max-width: 250px;
        aspect-ratio: 2/3;
        display: flex;
        flex-direction: column;   
        justify-content: flex-end; 
        cursor: pointer;
        position: relative;
        padding: 10px;
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

    .container-keywords {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px 0;
        gap: 4px;
    }
    .keyword {
        font-size: 13px;
        padding: 3px 5px;
        border: 1px solid var(--clr-black);
        
        color: var(--clr-black);
        line-height: 100%;
    }

    .rounded {
        border-radius: 25px;
    }

/*@media screen and (min-width: 768px) {

    .card {
        max-width: 1000px;   
    }

    .card__title {
        color: var(--clr-black);
    }

    .card__img {
        filter: saturate(0);          
    }

    .card__cta-style {            
        padding: .6rem 1rem;
        font-size: 1rem; 
        background: var(--clr-green-darker);
        color: var(--clr-grey);    
    }

    

    .card:hover .card__title {
        color: var(--clr-green);
    }
    .card:hover .card__img {
        filter: saturate(1);          
    }

    .card:hover .card__cta-style {
        background: var(--clr-green);
        color: var(--clr-white);
    }
}*/





</style>