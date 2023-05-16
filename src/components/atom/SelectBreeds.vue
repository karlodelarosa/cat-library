<script setup lang="ts">
import { useBreedStore } from '@/stores/breeds';
const store = useBreedStore()
const breeds: any = store.GET_breeds
</script>

<template>
  <select id="cat_breed" class="form-select" aria-label="Default select example">
    <option selected hidden>Open this select menu</option>
    <option v-for="(breed, key) in breeds" :key="key" :value="breed.id">
      {{ breed.name }}
    </option>
  </select>
</template>