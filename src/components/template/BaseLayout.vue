<script setup lang="ts">
import ErrorAlert from '../atom/alert/ErrorAlert.vue'
</script>
<template>
  <ErrorAlert/>
  <div class="title-page">
    <div class="container">
      <h1 class="display-3 text-white">Cat Library</h1>
    </div>
  </div>
  <slot></slot>
</template>