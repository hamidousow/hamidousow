<script setup lang="ts">

import githubBackground from "@/assets/images/github-background.jpg"
import linkedinLogo from "@/assets/images/linkedin.svg";
import githubLogo from "@/assets/images/github.svg"
import mail from "@/assets/images/github.svg"
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="content mt-80">
    <div class="grid">
      
      <RouterLink to="/about" class="grid__right">
        <div class="card box-shadow border-3 background-green-flashy">
          <div class="container-titles sliding-text">
            <h2 class="pixelly-font-bold"> à propos </h2>
            <span class="space"></span>
            <h2 class="pixelly-font-bold"> à propos </h2>
            <span class="space"></span>
            <h2 class="pixelly-font-bold"> à propos </h2>
            <span class="space"></span>
            <h2 class="pixelly-font-bold"> à propos </h2>
            <span class="space"></span>
          </div>        
          <div class="wrapper content">
              <h2 class="card-title pixelly-font-bold">hello <br> world</h2>
              <div class="card-details">
                <span class="line"></span>
                <div class="card-details-texts">
                  <h6 class="card-subtitle pixelly-font-medium">My name is Hamidou</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consequatur molestiae odit?</p>
                </div>
                
              </div>
              <RouterLink to="/" class="card-button box-shadow pixelly-font-regular">+ d'infos</RouterLink>
            
          </div>
        </div>      
      </RouterLink>

      <div class="subgrid">
        <RouterLink to="/projects" class="subgrid-top ">
          <div class="card box-shadow border-3 background-purple-flashy project-block">
            <div class="container-title">
              <h2 class="card-title vertical-text pixelly-font-bold">projets</h2>
            </div>
          </div>
        </RouterLink>
        <div class="card subgrid-bottom contact-block">
          <h2 class="card-title pixelly-font-bold">contact</h2>
          <div class="container-social-links">
            <RouterLink to="" class="social-link pixelly-font-regular">
              <img :src="linkedinLogo" alt="" width="20">
              Linkedin
            </RouterLink>
            <RouterLink to="" class="social-link pixelly-font-regular">
              <img :src="githubLogo" alt="" width="20">
              github
            </RouterLink>
            <RouterLink to="" class="social-link pixelly-font-regular" >
              <img :src="linkedinLogo" alt="" width="20">
              email
            </RouterLink>
          </div>
          
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

  a {
    text-decoration: none;
    color: var(--clr-black);
  }

  .grid {    
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 35px;
  }

  .card-title {
    text-transform: uppercase;
    font-size: clamp(40px, 8vw, 95px);
    line-height: 100%;
  }

  .subgrid {
    grid-row: span 2;
    display: grid;
    grid-template-rows: subgrid;
  }

  .subgrid-top {
    grid-row: 1;
    position: relative;
  }
  
  .subgrid-bottom {
    grid-row: 2;
  }

  .grid__right {
    display: grid;
    grid-row: span 1;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 15px;
  }

  .card .card-subtitle {
    font-size: 40px;
    text-transform: uppercase;
  }

  .card-title.vertical-text {
    font-size: clamp(33px, 8vw, 58px);
    text-align: center;
  } 

  .contact-block {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }

  .grid__right .sliding-text {
    position: absolute;
    top: 15px;
    left: 0;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    justify-content: space-between;
  }
  

  .grid__right .sliding-text h2 {
    text-transform: uppercase;
    animation: slideImage 10s infinite linear;
    text-wrap: nowrap;
  }

  .grid__right .content {
    display: grid;
    row-gap: 15px;
    grid-template-rows: auto 2fr 1fr;
    margin-top: 50px;
  }

  .grid__right .card-subtitle {
    font-size: clamp(21px, 2vw, 40px);
  }

  .grid__right .card-details {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
  }

  .grid__right .card-details .line {
    margin-bottom: 15px;
    max-width: 100px;
  }

  .project-block .container-title {
    display: flex;
    height: 100%;
  }

  .card-button {
    padding: 10px 0;
    height: auto;
    
    text-align: center;
    text-decoration: none;
    color: var(--clr-black); 
    background-color: var(--clr-grey);
    border: 3px solid var(--clr-black);        

    font-size: 16px;
  }

  .contact-block .container-social-links {
    display:flex;
    flex-direction: column;
    row-gap: 30px;
  }

  .contact-block .social-link {
    font-size: 24px;
    text-transform: uppercase;
    width: fit-content;
  }
  .contact-block .social-link:hover {
    font-size: 24px;
    text-transform: uppercase;
    width: fit-content;
    text-decoration: line-through;
  }

  .contact-block img {
    margin-right: 10px;
  }

  @media screen and (min-width:567px) {
    .grid__right .card-details[data-v-b4e148ca] {
        display: flex;
        flex-direction: row;
        column-gap: 20px;
    }

    .grid__right .card-details .line[data-v-b4e148ca] {
      flex: 1;
        margin-top: 10px;
    }

    .grid__right .card-details-texts {
        flex: 2;
    }
  }


  @media screen and (min-width:765px) {
    .grid {    
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);;
      gap: 35px;
    }

    .grid__right {
      display: grid;
      grid-row: span 2;
    }

    .grid__right .content {
      margin-top: 150px;
      row-gap: 25px;
    }

    .grid__right .card-details {
      display: flex;
      flex-direction: row;
      column-gap: 20px;
    }

    .grid__right .card-details .line {
      margin-top: 25px;
    }

    .grid__right .sliding-text {
      top: 25px;
    }

    .card-button {
      padding: 15px 0;    
      font-size: 20px;
    }
  }  

</style>