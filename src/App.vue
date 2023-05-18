<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseLayout from '@/components/template/BaseLayout.vue'
import Breed from './core/application/Breed'

const breed = new Breed()
breed.process()
</script>

<template>
  <BaseLayout>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </BaseLayout>
</template>
