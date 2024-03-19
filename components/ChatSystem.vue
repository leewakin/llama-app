<script setup lang="ts">
defineProps<{ message: any }>()
</script>

<template>
  <div class="p-2 text-center">
    {{ message.content }}
  </div>
</template>
