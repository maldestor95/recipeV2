<script setup lang="ts">
import VueScroll from './test/vue-scroll.vue';

</script>

<template>

    <!-- <VueScroll></VueScroll> -->
    <div v-for="item in 100">
        
        <page-vue>
            <template #header>
                recettes
        </template>
        <p>Page recettes</p>
        <btn-vue>Test Button
            <template #tooltip>
                show the tooltip
            </template>
        </btn-vue>
        </page-vue> 
    </div>
</template>
