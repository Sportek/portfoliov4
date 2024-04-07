<script setup lang="ts">
const services: {
  title: string;
  description: string;
  icon: string;
  buttonLabel: string;
}[] = [
  {
    title: "Web Development",
    description:
      "You want to have a website for your business or personal use? I can help you with that.",
    icon: "mdi:web",
    buttonLabel: "Get your website",
  },
  {
    title: "Discord Bot Development",
    description:
      "You have an idea about something you want to add into your Discord community or you want your server look more professional?",
    icon: "ic:baseline-discord",
    buttonLabel: "Get your bot",
  },
];
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="text-xl text-primary">SERVICES</div>
    <div class="grid-col-1 grid gap-4 sm:grid-cols-2">
      <ServiceOfferBox
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :buttonLabel="service.buttonLabel"
      />
    </div>
  </div>
</template>
