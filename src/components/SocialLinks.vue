<script lang="ts" setup>
import linkedinLogo from "@/assets/images/linkedin.svg";
import githubLogo from "@/assets/images/github.svg"
import gmail from "@/assets/images/Gmail-Logo.wine.svg"
</script>

<template>
    <div class="container-social-links">
        <div class="link-wrapper">
            <img :src="linkedinLogo" alt="logo linkedin">
            <a href="https://www.linkedin.com/in/hamidousow" class="social-link pixelify-font-regular" target="_blank">Linkedin</a>
        </div>
        <div class="link-wrapper" >
            <img :src="githubLogo" alt="logo github">
            <a href="https://github.com/hamidousow" class="social-link pixelify-font-regular" target="_blank">github</a>
        </div>
        <div class="link-wrapper">
            <img :src="gmail" alt="logo gmail">
            <a href="mailto:hamidousow-pro@hotmail.com" class="social-link pixelify-font-regular" target="_blank" >email</a>
        </div>
        
    </div>
</template>


<style scoped>

    .container-social-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 20px;
        margin-top: 60px;
    }

    .link-wrapper {
        display: flex;
        flex-direction: row;
        column-gap: 7px;
    }

    .social-link {
        color: var(--clr-black);
        font-size: 21px;
        text-transform: uppercase;
        width: fit-content;
        text-decoration: none;
    }
    .social-link:hover {
        text-transform: uppercase;
        width: fit-content;
        text-decoration: line-through;
        color: var(--clr-purple-flashy);
    }

    .link-wrapper img {
        display: block;
        width: 20px;        
    }
    

</style>