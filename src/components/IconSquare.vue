<script setup lang="ts">
    const props = defineProps(["imgSrc", "imgAlt", "imgHeight", "imgWidth", "title"])
</script>

<template>
    <div class="icon-square border-3 box-shadow">
        <img :src="$props.imgSrc" :alt="imgAlt" :height="$props.imgHeight" :width="$props.imgWidth">
        <h4 class="pixelify-font-regular"> {{ props.title }} </h4>
    </div>              
</template>

<style scoped>
    .icon-square {
        height: 25vw;
        width: 25vw;
        max-height: 200px;
        max-width: 200px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        /* row-gap: 7px; */
    }

    .icon-square img {
        display: block;
        margin: auto;
    }

    .icon-square h4 {
        text-align: center;
        font-size: clamp(14px, 2vw, 17px);
    }

    @media screen and (min-width: 768px) {
        .icon-square {
            height: 20vw;
            width: 20vw;
            max-height: 150px;
            max-width: 150px;
            /* row-gap: 12px; */
        }
    }
</style>