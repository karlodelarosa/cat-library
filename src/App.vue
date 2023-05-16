<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/components/template/BaseLayout.vue'
import Breed from './core/application/Breed'

const breed = new Breed();
breed.process()

</script>

<template>
  <BaseLayout>
    <main>
      <RouterView />
    </main>
  </BaseLayout>
</template>
