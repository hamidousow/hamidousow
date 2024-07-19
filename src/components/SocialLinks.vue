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

    a {
        color: var(--clr-black);
        text-decoration: none;
    }
    a:hover {
        color: var(--clr-purple-flashy);
        text-decoration: line-through;
    }

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
        font-size: 16px;
        text-transform: uppercase;
        width: fit-content;
    }
    .social-link:hover {
        font-size: 24px;
        text-transform: uppercase;
        width: fit-content;
        text-decoration: line-through;
    }

    .link-wrapper img {
        display: block;
        width: 20px;        
    }
    

</style>