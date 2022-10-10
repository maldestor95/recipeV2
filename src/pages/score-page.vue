<!-- eslint-disable vue/require-v-for-key -->
<script setup lang="ts">
const list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

</script>

<template>

  <div v-for="item in list">
    <page-vue >
        <template #header>
          SCORE
       </template>
          <h1 class="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded">
            Hello world!  BIS
          </h1>
          <icon-ok foo="tatat"></icon-ok>
          <IconSetting height="16"></IconSetting>
          <IconXCircle height="24"></IconXCircle>
          <IconTickCircle height="24"></IconTickCircle>
          <Icon3bars height="24"></Icon3bars>
    </page-vue>
    {{ item }}
  </div>
</template>