<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
    <nav class="bg-black" > 
      <ul class="flex flex-row gap-x-2">
        <li class="text-blue-600 my-1 color-blue-600 rounded px-2 hover:text-white hover:bg-blue-600 content-end">
          <a href="/settings"><Icon3bars  height="24"></Icon3bars></a>
        </li>
        <div v-for="menuItem in menu">
          <li class="text-blue-600 my-1 color-blue-600 rounded px-2 hover:text-white hover:bg-blue-600">
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
]
</script>

<style lang="scss" scoped></style>