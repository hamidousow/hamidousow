<script setup lang="ts">
  import toonMeImage from '@/assets/images/toonme-carousel-trans.png'
  import IconSquare from '@/components/IconSquare.vue';
  import Java from '@/assets/images/java_original_logo_icon_146458.svg';
  import Javascript from '@/assets/images/logo-javascript.svg';
  import Typescript from '@/assets/images/typescript.svg';
  import SpringBoot from '@/assets/images/spring-boot.svg';
  import VueJs from '@/assets/images/vue-9.svg';
  import Figma from '@/assets/images/figma-icon.svg';
  import Html from '@/assets/images/html-1.svg';
  import Css from '@/assets/images/css-3.svg';
  import Postgresql from '@/assets/images/postgresql.svg';

const skillsArray = [
  {
    imgSrc: Java,
    imgAlt: 'java logo',
    title: "java"
  },
  {
    imgSrc: Javascript,
    imgAlt: 'javascript logo',
    title: "javascript"
  },
  {
    imgSrc: Typescript,
    imgAlt: 'Typescript logo',
    title: "Typescript"
  },
  {
    imgSrc: SpringBoot,
    imgAlt: 'Spring Boot logo',
    title: "Spring Boot"
  },
  {
    imgSrc: VueJs,
    imgAlt: 'VueJs logo',
    title: "VueJs"
  },
  {
    imgSrc: Postgresql,
    imgAlt: 'PostgreSQL logo',
    title: "PostgreSQL"
  },
  {
    imgSrc: Html,
    imgAlt: 'Html logo',
    title: "Html"
  },
  {
    imgSrc: Css,
    imgAlt: 'Css logo',
    title: "Css"
  },
  {
    imgSrc: Figma,
    imgAlt: 'Figma logo',
    title: "Figma"
  },
]
</script>

<template>
  <section class="mt-100 mb-100">   
    <div class="section-about ">
      <div class="about__left">
        <div class="carousel border-3 box-shadow">                            
            <img :src="toonMeImage" class="carousel__img" alt="Hamidou the most wanted">
            <img :src="toonMeImage" class="carousel__img" alt="Hamidou the most wanted">
        </div>
      </div>
      <div class="about__right">
        <h1 class=" big-title mb-30 pixelify-font-bold">À propos</h1>
        <div>
          <p class="text">
              Moi c'est Hamidou, je suis développeur full stack, avec une appétence pour le développement front-end. Passionné de design graphique, de développement front-end ou encore d'animés, j'aime réaliser des projets créatifs, du design jusqu'au déploiement. En parallèle de ma profession je réalise des logos et des sites vitrines en tant que designer graphique / développeur front-end freelance. 
              Je suis toujours curieux de m'informer et d'apprendre de nouvelles technologies.                    
          </p>
        </div>          
      </div>
    </div>
  </section>
  <section class="section-skills mb-150">
    <div class="wrapper">
      <h2 class="h2 pixelify-font-bold mb-30">qualités et compétences</h2>
      <div class="grid">
        <div class="grid__left-side">
          <div class="wrapper">
            <span class="border-3 box-shadow ">Agile</span>
            <span class="border-3 box-shadow ">Esprit d'équipe</span>
            <span class="border-3 box-shadow ">Organisé</span>
            <span class="border-3 box-shadow ">Créatif</span>
	          <span class="border-3 box-shadow ">Curieux</span>
						<span class="border-3 box-shadow ">Scrum</span>
          </div>
          
        </div>
        <div class="grid__right-side">
            <div class="subgrid-skills">
              <IconSquare v-for="skill in skillsArray" 
                :key="skill.title" :img-src="skill.imgSrc" 
                :img-alt="skill.imgAlt" 
                :img-height="'40px'" 
                :img-width="'40px'" 
                :title="skill.title" 
              />
            </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped>

  .big-title {
    font-size: clamp(23px, 3vw, 42px);
    text-transform: none;
  }

  .section-about {
    display: grid;
    row-gap: 35px;
  }

  .about__left {
    overflow: hidden;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    height: 170px;
    width: 100%;            
    overflow: hidden;
  }

  .carousel__img {
    display: block;
    height: 100%;
    object-fit: cover;
    animation: slideImage 31s infinite linear;
  }

  .section-skills .wrapper {
    display: flex;
    flex-direction: column;
  }

  .section-skills .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    row-gap: 30px;
  }

  .section-skills .h2 {
    text-align: start;
    text-transform: uppercase;
    font-size: clamp(21px, 2vw, 31px);
  }

  .section-skills .grid .h3 {
    text-align: center;
    text-transform: uppercase;
  }

  .section-skills .grid .grid__left-side, .section-skills .grid .grid__right-side  {
    padding: 10px 0;
  }
  
  .grid__left-side .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
  .grid__left-side span {
    padding: 7px 14px;
  }
  .grid__left-side ul li {
    list-style: none;
    font-size: 19px;
    font-weight: 500;
    text-align: center;
  }

  .subgrid-skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 10px;
  }

@media screen and (min-width: 768px) {
  .section-skills .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 50px;
    row-gap: 0;
  }

  .section-skills .grid .h3 {
    text-align: initial;
    text-transform: uppercase;
  }

  .grid__left-side ul li {
    list-style: none;
    font-size: 19px;
    font-weight: 500;
    text-align: start;
  }

  
}


@media screen and (min-width: 992px) {

  .section-about {
    grid-template-columns: 1fr 2fr;
    column-gap: 4rem;
  }

  .carousel {
    height: 450px;
  }

  .about__right {
    display: flex;
    flex-direction: column;
    padding: 50px 25px;
    justify-content: center;
  }

  .subgrid-skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 70px 10px;
  }
}
</style>
