<script setup lang="ts">
const props = defineProps({
  labelName: {
    type: String,
    default: 'Sample Label'
  }
})
</script>

<template>
  <div class="form-group">
    <label for="cat_breed" class="fw-bold fs-6">{{ props.labelName }}</label>
    <slot></slot>
  </div>
</template>