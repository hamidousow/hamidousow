<script lang="ts" setup>
    import Logo from '@/assets/images/myLogo.png'
</script>

<template>
    <nav class="navigation container" id="nav-desktop">
        <div class="navigation__content">
            <div class="navigation__logo"  id="navigation__logo">
                <a href="/"> Hamidou <br/> SOW </a>                
            </div>                
            <div class="navigation__switch-mode">
                <input type="checkbox" id="btnSwitchMode" class="btnSwitchMode">
                
                <label for="btnSwitchMode"> 
                </label>
            </div>
            <span id="btnBurger" class="navigation__button-burger"></span>
            <ul id="navigation__menu" class="navigation__menu">
                <li>
                    <a class="navigation__menu__link" href="/projects">Projets</a>
                </li>               
                <li>
                    <a class="navigation__menu__link" href="/about">À propos</a>
                </li>                    
                <li>
                    <a class="navigation__menu__link" href="/contact">Contact</a>
                </li>
            </ul>
            
        </div>
    </nav>
</template>



<style scoped>
@media screen and (min-width: 320px) {

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

    .navigation__content {        
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            /* padding: 1rem 2rem; */
        }

    .navigation__logo {
        img {
            display: block;
            height: 25px; 
            padding: .5em 0; 
            filter: var(--svg-black);           
        }

        @media screen and (min-width: 768px) {
            img {
                height: 30px;
            }
        }
    }

    .navigation__switch-mode {   

        input[type="checkbox"].btnSwitchMode {
            display: none;        
        }
    
        input[type="checkbox"].btnSwitchMode + label {
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
    
        input[type="checkbox"].btnSwitchMode + label::before {
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
    
        input[type="checkbox"].btnSwitchMode:checked + label {
            background-color: var(--clr-grey);                
        }
    
        input[type="checkbox"].btnSwitchMode:checked + label::before {
            margin-left: 1.5rem; 
            display: flex;
            justify-content: center;
            align-items: center;
            content: "☾";
            color: var(--clr-black); 
            background-color: var(--clr-grey);              
        }   
    }

    .navigation__menu {            
        display: none;
        animation: dropMenu .5s ease-in;
    }  
    .navigation-menu-active {
        display: flex;               
        flex-direction: column; 
        justify-content: center;
        position: absolute;
        top: 73px;
        left: 0;
        right: 0;
        height: 100vh;
        z-index: -10;                
        row-gap: 2rem;   
        padding: 2rem;        
        background: var(--clr-grey);              
    } 
    
    .navigation__menu__link {
        text-decoration: none;  
        color: var(--clr-black);
        text-transform: uppercase;  
        
        font-size: clamp(1rem, 1vw, 2rem);
        padding: .5em;
        transition: .5s;
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

@media screen and (min-width: 567px) {
    
    .navigation__content {
        padding: 15px 0;
    }

}

@media screen and (min-width: 765px) {

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
}



</style>