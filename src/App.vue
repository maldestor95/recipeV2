<template>
  <navBar class="fixed top-0 z-50 w-full"></navBar>
  <router-view class="top-10 z-0" ></router-view>
</template>

<script setup lang="ts">
  import NavBar from "./pages/nav-bar.vue"
</script>
