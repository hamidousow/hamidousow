<script setup lang="ts">
  import SocialLinks from '@/components/SocialLinks.vue'
  import toonMeImage from '@/assets/images/toonme-carousel-trans.png'
</script>

<template>   
  <div class="about__wrapper mt-60">
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
                Diplômé en Conception et Développement d'Applications (bac+3).
            </p>
            <br/>
            <p class="text">
                Développeur <strong>agile</strong>, je m’adapte facilement aux changements. Doté d’un esprit d’équipe développé, je m’engage à collaborer de manière proactive pour atteindre les objectifs communs. 
                Mon esprit d’analyse me permet de décomposer les problèmes et d’en tirer des conclusions logiques basées sur l’analyse. Je consacre beaucoup de temps à l’apprentissage, à la veille technologique et à la pratique.                          
            </p>
            <br/>
            <p class="text">
                Je suis à l’écoute du marché pour un poste de développeur Java.                      
            </p>
          </div>
          
      </div>
  </div>

</template>

<style scoped>

  .big-title {
    font-size: clamp(23px, 3vw, 42px);
    text-transform: none;
  }

  .about__wrapper {
    display: flex;
    flex-direction: column;        
    justify-content: space-between;
    row-gap: 25px;
    width: 100%;
  }

  .about__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    height: 150px;
    width: 100%;            
    overflow: hidden;
  }

  .carousel__img {
    display: block;
    height: 100%;
    object-fit: cover;
    animation: slideImage 31s infinite linear;
  }

@media screen and (min-width: 992px) {

  .about__wrapper {
    display: flex;
    flex-direction: row;        
    justify-content: space-between;
    column-gap: 4rem;
  }
  .about__left {
    width: 45%;
    margin-top: 0px;
  }

  .carousel {
    height: 100%;
    max-width: 70vh;
  }

  .about__right {
    width: 55%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    padding: 50px 25px;
  }
}
</style>
