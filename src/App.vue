<script setup lang="ts">
import { RouterView } from 'vue-router'
import Breed from './core/application/Breed'

const breed = new Breed();
breed.process()

</script>

<template>
  <div class="title-page">
    <div class="container">
      <h1 class="display-3 text-white">Cat Library</h1>
    </div>
  </div>
  <RouterView />
</template>
