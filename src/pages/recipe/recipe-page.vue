<script setup lang="ts">
import recipeBar from '../../../tests/data/baraupetitlegume'

import { Recipe} from "./recipe"
import RecipePageView from './recipe-page-view.vue';
import RecipePageSearch from './recipe-page-search.vue';
import RecipePageEdit from './recipe-page-edit.vue';

const displayRecipe = new Recipe(recipeBar)
</script>

<template>
    <recipe-page-search></recipe-page-search> 
    <recipe-page-view :recipe="displayRecipe"></recipe-page-view>
    <recipe-page-edit :recipe="displayRecipe"></recipe-page-edit>    
</template>
