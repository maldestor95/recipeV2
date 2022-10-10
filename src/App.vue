<template>
  <navBar class="fixed top-0 z-50 w-full border-4 border-black"></navBar>
  tttt
  <ScrollUp class="fixed top-20" >{{position}}{{zzz}}{{yyy.value}}</ScrollUp>
  <button class="fixed top-300 text-pink" @click="scrollupdate" >click me</button>
  <router-view class="top-10 z-0" ></router-view>
</template>

<script setup lang="ts">
  import NavBar from "./pages/nav-bar.vue"
  import { reactive ,ref} from 'vue'
  const zzz = ref(window.scrollY)
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
  });
  // const scrollPosition = reactive({
  //   yPos:window.scrollY})
  const yyy=reactive({value:zzz})
  const position = computed(() => {
  return window.scrollY
})
function scrollupdate(){
  zzz.value= window.scrollY
  console.log("update ")
}
</script>
