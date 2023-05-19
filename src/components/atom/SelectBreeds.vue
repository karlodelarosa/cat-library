<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useBreedStore } from '@/stores/breeds'
const store = useBreedStore()
const breeds: any = store.GET_breeds
const currentBreedSelected = computed(() => store.GET_selectedBreed)
const breedSelection = ref(currentBreedSelected.value)

watch(breedSelection, (newVal) => {
  store.setSelectedBreed(newVal)
})
</script>

<template>
  <select
    v-model="breedSelection"
    id="cat_breed"
    class="form-select"
    aria-label="Default select example"
  >
    <option hidden value="">Select breed</option>
    <option v-for="(breed, key) in breeds" :key="key" :value="breed.id">
      {{ breed.name }}
    </option>
  </select>
</template>
