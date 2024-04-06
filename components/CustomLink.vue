<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
<template>
  <NuxtLink :to="to" class="underline hover:opacity-90">
    <slot />
  </NuxtLink>
</template>
