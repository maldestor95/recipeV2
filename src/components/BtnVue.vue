<template>
  <div class="relative">
    <button @mouseover="show='block'" @mouseleave="show='hidden'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="score">
      <slot></slot> 
    </button>
    <div class="absolute -top-6 bg-blue-200 rounded px-2 opacity-80 first-letter:capitalize"
        :class="show">
      <slot name="tooltip">  
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = ref('hidden')
</script>

<style lang="scss" scoped></style>