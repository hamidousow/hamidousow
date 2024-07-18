<script setup lang="ts">

import githubBackground from "@/assets/images/github-background.jpg"
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="content mt-60">
    <div class="grid mt-160">
      
      <RouterLink to="/about" class="grid__right">
        <div class="card box-shadow border-3 background-green-flashy padding-35">
          <div class="container-titles sliding-title">
            <h2> à propos </h2>
            <!-- <span class="space"></span> -->
            <h2> à propos </h2>
            <!-- <span class="space"></span> -->
            <h2> à propos </h2>
            <!-- <span class="space"></span> -->
            <h2> à propos </h2>
            <!-- <span class="space"></span> -->
          </div>        
          <div class="wrapper content">
              <h2 class="card-title">hello <br> world</h2>
              <div class="card-details">
                <span class="line"></span>
                <div class="card-details-texts">
                  <h6 class="card-subtitle">My name is Hamidou</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat nulla magni aspernatur temporibus consequatur molestiae odit? Neque sed commodi suscipit sequi! Itaque ratione, repellendus architecto maxime quidem minima? In?</p>
                </div>
                
              </div>
              <RouterLink to="/" class="card-button box-shadow">+ d'infos</RouterLink>
            
          </div>
        </div>      
      </RouterLink>

      <div class="subgrid">
        <RouterLink to="/projects" class="subgrid-top box-shadow border-3 background-purple-flashy padding-35">
          <div class="card">
            <h2 class="card-title">projets</h2>
          </div>
        </RouterLink>
        <div class="subgrid-bottom contact-block padding-35">
          <h2 class="card-title">contact</h2>
          <div class="container-social-links">
            <RouterLink to="" class="social-link">Linkedin</RouterLink>
            <RouterLink to="" class="social-link">github</RouterLink>
            <RouterLink to="" class="social-link">email</RouterLink>
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);;
    gap: 35px;
    min-height: 70dvh;
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

  .subgrid-top .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  
  .subgrid-bottom {
    grid-row: 2;
  }

  .grid__right {
    display: grid;
    grid-row: span 2;
  }

  .card {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .background img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;

  }

  .sliding-title {
    position: absolute;
    top: 27px;
    left: 0;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    justify-content: space-between;
  }

  .sliding-title h2 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal; 
    text-transform: uppercase;
    animation: slideImage 10s infinite linear;
  }
  .card-title {
    font-family: "Pixelify Sans", sans-serif;
    font-size: clamp(75px, 8vw, 95px);
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    line-height: 100%;
  }  

  .grid__right .content {
    display: grid;
    column-gap: 25px;
    grid-template-rows: 2fr 2fr auto;
    margin-top: 150px;
  }

  .grid__right .card-details {
    display: flex;
    column-gap: 20px;
  }

  .grid__right .card-details .line {
    margin-top: 25px;
  }

  .card-subtitle {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 40px;
    font-weight: 500;
    font-style: normal; 
    text-transform: uppercase;
  }

  .container-social-links {
    display:flex;
    flex-direction: column;
    row-gap: 30px;
  }

  .social-link {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 24px;
    font-weight: 300;
    font-style: normal; 
    text-transform: uppercase;
  }

  


  


  /* a deplacer dans le main.css */

  .box-shadow {
    box-shadow: 6px 6px 1px var(--clr-black);
  }

  .card:hover > .box-shadow {
    box-shadow: 0;
  }

  .space {
    margin: 0 10px;
  }

  .line {
    display: inline-block;
    height: 3px;
    width: 250px;
    background-color: var(--clr-black);
  }

  .border-3 {
    border: 3px solid var(--clr-black);
  }

  /*  creer un composant */

  .card-button {
    padding: 25px 0;
    height: auto;

    display: flex;
    align-content: center;
    justify-content: center;
    background-color: var(--clr-grey);
    border: 3px solid var(--clr-black);
    align-self: flex-end;
    text-decoration: none;
    color: var(--clr-black);    

    font-family: "Pixelify Sans", sans-serif;
    font-size: 24px;
    font-weight: 500;
    font-style: normal; 
    text-transform: uppercase;
  }

</style>