<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
<template>
  <NuxtLink :to="to" class="underline hover:opacity-45">
    <slot />
  </NuxtLink>
</template>
