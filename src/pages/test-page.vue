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
        Page recettes
        </page-vue> 
    </div>
</template>
