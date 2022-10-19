<script setup lang="ts">
import type {RecipeType} from "./recipe"
export interface Props{
    msg?: string
    labels?: string[]
    recipe?: RecipeType
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
  recipe: () => {return {
            'title':'titre',
            'ingredients': [{ingredient:"tomate",qty:"12"}],
            'link':'none',
            'steps':'no steps'
            }
        }
})

</script>

<template>
    <page-vue>
        <template #header>
            <btn-vue>edition <template #tooltip>EDITION de {{props.recipe.title}}</template>
            </btn-vue> {{props.recipe.title}}
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
