<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 , inputText:""})

function increment() {
  state.count=state.inputText
}
</script>

<template>
    <label for="fname">First Name</label>
    <input type="text"  name="fname" :value="inputText">
    <button @click="increment">
        Record {{ state.count }}
    </button>
</template>