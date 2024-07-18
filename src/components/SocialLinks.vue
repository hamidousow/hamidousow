<script lang="ts" setup>
import githubBackground from "@/assets/images/github-background.jpg"
import linkedinLogo from "@/assets/images/linkedin.svg";
import githubLogo from "@/assets/images/github.svg"
import gmail from "@/assets/images/gmail-logo.png"
</script>

<template>
    <div class="container-social-links">
        <a href="https://www.linkedin.com/in/hamidousow" class="social-link pixelly-font-regular" target="_blank">
            <img :src="linkedinLogo" alt="" width="20">
            Linkedin
        </a>
        <a href="https://github.com/hamidousow" class="social-link pixelly-font-regular" target="_blank">
            <img :src="githubLogo" alt="" width="20">
            github
        </a>
        <a href="mailto:hamidousow-pro@hotmail.com" class="social-link pixelly-font-regular" target="_blank" >
            <img :src="gmail" alt="" width="20">
            email
        </a>
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
        column-gap: 30px;
        margin-top: 60px;
    }

    .contact-block .container-social-links {
        display:flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .social-link {
        font-size: 24px;
        text-transform: uppercase;
        width: fit-content;
    }
    .social-link:hover {
        font-size: 24px;
        text-transform: uppercase;
        width: fit-content;
        text-decoration: line-through;
    }

    .social-link img {
        margin-right: 10px;
    }

</style>