<script setup lang="ts">
import {marked} from 'marked'
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
            {{props.recipe.title}}
       </template>
       <h2 class="border-grey-200 border-solid border-b-2 pb-2"> Ingredients</h2>
       <table>
        <tr v-for="ingredient in props.recipe.ingredients" :key="ingredient.ingredient">
            <td>
            <div class="first-letter:capitalize text-base">
                {{ ingredient.ingredient }}
            </div>
            </td>
            <td>
                {{ingredient.qty}}
            </td>
        </tr>
       </table>
       <h2 class="border-grey-200 border-solid border-b-2 pb-2"> Instructions</h2>
       <div
            class="first-letter:capitalize" 
            v-html="marked(<string>props.recipe.steps)">
            
        </div>
    </page-vue>
</template>
