<script setup lang="ts">
import recipe from '../../../tests/data/baraupetitlegume'
import {marked} from 'marked'

import {parseRecipe} from "./recipe"
const ingredients= [
    {'name':'carottes', qty:'2'},
    {'name':'tomates', qty:'3'},
    {'name':'pommes de terres', qty:'4'},
    {'name':'ail', qty:'1 tête'},
]
const recipeName = 'Example de recette'
const displayRecipe = parseRecipe(recipe)
const steps = !displayRecipe.steps?"":marked(<string>displayRecipe.steps)
</script>

<template>
toto
    <page-vue>
        <template #header>
            {{recipeName}}
       </template>
       <p>{{displayRecipe.title}}</p>
       <p>{{displayRecipe.link}}</p>
       <div> ingredients</div>
       <ul>
        <li v-for="ingredient in displayRecipe.ingredients" :key="ingredient.name">
            {{ ingredient.ingredient }} {{ingredient.qty}}
        </li>
       </ul>
       <div> instructions</div>
       <p v-html="steps"></p>
       <div> validation </div>

    </page-vue>
    <page-vue>
        <template #header>
            <btn-vue>edition <template #tooltip>EDITION de {{recipeName}}</template>
            </btn-vue> {{recipeName}}
       </template>
       Recette edition page
       <div class="bg-pink-200 my-3"> ingredients
            <p class="bg-pink-300 px-8">Edition / ajout /supprimer</p>
            <p class="bg-pink-300 px-8">ajouter un ingredient</p>
       </div>
       <div class="bg-pink-200 my-3"> instructions
            <p class="bg-pink-300 px-8">Etapes avec edition/ ajout /supprimer</p>
            <p class="bg-pink-300 px-8">ajouter une étape</p>
       </div>
       <div class ="bg-pink-200 my-3"> validation </div>
    </page-vue>
</template>
