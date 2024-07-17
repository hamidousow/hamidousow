<script lang="ts" setup>

</script>

<template>
    <div class="container-social mt-60">
        <a href="https://www.linkedin.com/in/hamidousow" class="social-link">Linkedin</a>
        <a href="https://github.com/hamidousow" class="social-link">Github</a>
        <a href="mailto:hamidousow-pro@hotmail.com" class="social-link">hamidousow-pro@hotmail.com</a>
    </div>
</template>


<style scoped>
    .container-social {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        align-items: flex-end;
        row-gap: 10px;
    }

    .social-link {
        font-weight: 800;
        font-size: 21px;
        text-decoration: none;
        font-size: 18px;
        color: var(--clr-black);
        transition: color .5s ease;
    }

    .social-link:hover {
        font-weight: 900;
        color: var(--clr-green);
        text-decoration: line-through;
    }

</style>