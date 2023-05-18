<script setup lang="ts">
import { computed } from 'vue'
import { useAlertStore } from '@/stores/alert'

const store = useAlertStore()
const isVisible = computed(() => store.GET_errorAlertStatus)
</script>

<template>
  <div
    v-if="isVisible"
    class="alert alert-danger alert-dismissible fade show error-alert"
    role="alert"
  >
    Apologies but we could not load new cats for you at this time! Miau!
    <button
      @click="store.setErrorAlertStatus(false)"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<style scoped>
.error-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 50;
}
</style>
