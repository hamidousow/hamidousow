<script lang="ts" setup>
import github from '@/assets/images/github.svg'
import linkedin from '@/assets/images/linkedin.svg'

</script>

<template>
    <footer class="footer container">
        <div class="footer__social-links">            
            <a class="footer__link" href="https://github.com/hamidousow" target="_blank" id="github-icon">
                <img width="25" class="footer__link__icon" :src="github" alt="lien vers github">
            </a>
            <a class="footer__link" href="https://www.linkedin.com/in/hamidousow" target="_blank" id="linkedin">
                <img width="25" class="footer__link__icon" :src="linkedin" alt="lien vers linkedin">
            </a>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        padding: 50px 20px;
        margin-top: auto;
    }
    .footer__social-links {
        display: flex;
        justify-content: center;
        column-gap: 15px;
        flex-direction: row;
    }

</style>
