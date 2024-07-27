<script lang="ts" setup>

    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import hamidouLogo from '@/assets/images/hamidou-sow-logo.svg'

    const isActivedMenu = ref(false);

    const activeMenu = ref('navigation__menu-active')
</script>

<template>
    <nav class="navigation" id="nav-desktop">
        <div class="navigation__content  container">
            <div class="navigation__brand"  id="navigation__brand">
                <RouterLink to="/" class="router-link-active pixelify-font-regular "
                    @click="isActivedMenu = false"> 
                    <img :src="hamidouLogo" alt="logo Hamidou SOW">
                </RouterLink >                
            </div>                
            <!-- <div class="navigation__switch-mode">
                <input type="checkbox" id="btnSwitchMode" class="btnSwitchMode">
                
                <label for="btnSwitchMode"> 
                </label>
            </div> -->
            <span id="btnBurger" class="navigation__button-burger" @click="isActivedMenu = !isActivedMenu"></span>
            <ul id="navigation__menu"  :class="[isActivedMenu ? activeMenu : 'navigation__menu']">
                <li>
                    <RouterLink 
                    class="router-link-active navigation__menu__link pixelify-font-regular" 
                    to="/projects" 
                    @click="isActivedMenu = false"
                    >projets</RouterLink >
                </li>               
                <li>
                    <RouterLink 
                    class="router-link-active navigation__menu__link pixelify-font-regular" 
                    to="/about" 
                    @click="isActivedMenu = false"
                    >à propos</RouterLink >
                </li>                    
                <li>
                    <RouterLink 
                    class="router-link-active navigation__menu__link pixelify-font-regular" 
                    to="/contact" 
                    @click="isActivedMenu = false"
                    >contact</RouterLink >
                </li>
            </ul>           
        </div>
    </nav>
</template>



<style scoped>
@media screen and (min-width: 320px) {

    a {
        color: var(--clr-black);
    }
    .active-link {
        color: var(--clr-purple-flashy);
        text-decoration: line-through!important;
    }

    .navigation {    
        display: flex;    
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--clr-white);
    }

    .navigation__brand {
        width: 150px;
    }

    .navigation_brand img {
        display: block;
        width: 100%;
    }

    .bold {
        font-weight: 700;
    }

    .navigation__content {        
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .navigation__switch-mode input[type="checkbox"].btnSwitchMode {
        display: none;        
    }

    .navigation__switch-mode input[type="checkbox"].btnSwitchMode + label {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        width: 3rem;        
        height: 1.6rem;
        padding: 2px;
        border-radius:20px;
        background: var(--clr-grey);
        border: 1px solid var(--clr-black);
        transition: .4s;
        
    }

    .navigation__switch-mode input[type="checkbox"].btnSwitchMode + label::before {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        content: "☼";        
        height: calc(1.5rem - 5px);
        width: calc(1.5rem - 5px);
        border-radius: 50%;       
        background-color: #dddddd;
        transition: .4s;
    }    

    .navigation__switch-mode input[type="checkbox"].btnSwitchMode:checked + label {
        background-color: var(--clr-grey);                
    }

    .navigation__switch-mode input[type="checkbox"].btnSwitchMode:checked + label::before {
        margin-left: 1.5rem; 
        display: flex;
        justify-content: center;
        align-items: center;
        content: "☾";
        color: var(--clr-black); 
        background-color: var(--clr-grey);              
    }  

    .navigation__menu {            
        display: none;
        padding-inline-start: 0;
        animation: dropMenu .5s ease-in;
    }      

    .navigation__menu-active {
        display: flex;               
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0; 
        right: 0;
        height: 90vh;
        z-index: 10;
        row-gap: 2rem;   
        padding: 2rem;        
        background-color: var(--clr-white);              
    } 

    .navigation__menu-active li {            
        text-decoration: none;
        list-style: none;
    }  
    
    .navigation__menu__link {
        text-decoration: none;  
        text-transform: uppercase;
        text-align: end;  
        font-size: clamp(22px, 2vw, 29px);
        font-weight: 600;
        padding: .5em;
        transition: .5s;
    } 

    .navigation__menu__link:hover {
        text-decoration: line-through;
    } 

    .navigation__button-burger {
        display: block;
        position: relative;
        height: 10px;
        width: 40px;

        &::before, &::after {
            content: "";
            display: block;
            height: 3px;
            width: 100%;
            border-radius: 2px;
            background-color: var(--clr-black);
        }

        &::before {
            position: absolute;
            top: 0;
            right: 0;
        }

        &::after {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }     
} 

@keyframes dropMenu {

    0% {
        height: 0;
    } 100% {
        height: 100vh;
    }
}

@media screen and (min-width: 765px) {

    .navigation__content {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .navigation__button-burger {
        display: none;
    }

    .navigation__menu {
        position: inherit;
        display: flex;
        height: inherit; 
        width: auto;
        animation: inherit;
        background-color: inherit;
        box-shadow: inherit;
        flex-direction: row;
        column-gap: 2rem;   
        
        li {
            list-style: none;
        }
    }

    .navigation__menu__link {  
        font-size: 27px;
    } 
}



</style>