<script setup lang="ts">
import recipeBar from '../../../tests/data/baraupetitlegume'
// import {marked} from 'marked'

import {parseRecipe} from "./recipe"
import RecipePageView from './recipe-page-view.vue';
import RecipePageSearch from './recipe-page-search.vue';
import RecipePageEdit from './recipe-page-edit.vue';

const recipeName = 'Example de recette'
const displayRecipe = parseRecipe(recipeBar)
// const steps = !displayRecipe.steps?"":marked(<string>displayRecipe.steps)
</script>

<template>
    <recipe-page-search></recipe-page-search> 
    <recipe-page-view :recipe="displayRecipe"></recipe-page-view>
    <recipe-page-edit :recipe="displayRecipe"></recipe-page-edit>    
</template>
