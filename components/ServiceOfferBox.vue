<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonLabel: string;
  icon: string;
}>();
</script>
<template>
  <div
    class="box-border flex h-full w-full flex-col justify-between gap-2 rounded-md border p-8"
  >
    <div class="text-lg text-primary">{{ title }}</div>
    <div>{{ description }}</div>
    <CustomButton class="justify-center bg-primary bg-opacity-50"
      ><Icon :name="icon" />
      <div>{{ buttonLabel }}</div></CustomButton
    >
  </div>
</template>
