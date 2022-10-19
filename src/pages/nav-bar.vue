<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
    <nav class="bg-blue-200" > 
      <ul class="flex flex-row gap-x-2">
        <li class="text-blue-600 mr-2 my-2 hover:text-white hover:bg-blue-600 rounded">
          <a href="/settings"><Icon3bars  height="24"></Icon3bars></a>
        </li>
        <div v-for="menuItem in menu">
          <li class="text-blue-600 my-2  px-2 hover:text-white hover:bg-blue-600 rounded">
            <a :href="menuItem.link">{{menuItem.name}}</a>          
          </li>
        </div>
      </ul>
    </nav>
    </div>
</template>

<script setup lang="ts">
const menu= [
  {link:"/",name:"Home"},
  {link:"/score",name:"Score"},
  {link:"/recettes",name:"Recettes"},
  {link:"/test",name:"Test"},
]
</script>

<style lang="scss" scoped></style>