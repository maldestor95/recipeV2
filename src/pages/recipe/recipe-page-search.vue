<script setup lang="ts">
import {marked} from 'marked'
import type {RecipeType} from "./recipe"
export interface Props{
    msg?: string
    labels?: string[]
    recipe?: RecipeType
}

const recipe=ref(0)

</script>

<template>
    <page-vue>
        <template #header >
            <div class="bg-red-100 rounded-lg pl-4">
                SEARCH recipe
            </div>
       </template>
       <div >dropdown {{recipe}}</div>
       <div>
        <btn-vue>Display</btn-vue>
        <dropdown-vue></dropdown-vue>
        <btn-test></btn-test>
       </div>

    </page-vue>
</template>
