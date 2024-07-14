<script lang="ts" setup>
    const keywords = defineProps(["keywords"])

</script>
<template>
    <div class="container-keywords">             
        <span 
            v-for="keyword in keywords" 
            :key="keyword"
            class="keyword rounded"
        >{{ keyword }}</span>
    </div>
</template>



<style>

    .container-keywords {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px 0;
        gap: 4px;
    }
    .keyword {
        font-size: 13px;
        padding: 3px 5px;
        border: 1px solid var(--clr-black);
        
        color: var(--clr-black);
        line-height: 100%;
    }

</style>