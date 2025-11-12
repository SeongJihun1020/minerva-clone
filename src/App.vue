<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavBar />
    <RouterView class="flex-grow"></RouterView>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>