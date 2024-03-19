<script setup lang="ts">
defineProps<{ message: any }>()
</script>

<template>
  <div class="p-2 text-start">
    {{ message.content }}
  </div>
</template>
