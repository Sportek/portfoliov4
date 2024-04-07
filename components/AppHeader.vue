<template>
  <div class="z-3 fixed left-0 right-0 top-0 w-screen">
    <header
      class="m-auto my-4 box-border flex max-w-[700px] flex-row items-center justify-between rounded-full border border-primary border-opacity-50 bg-primary bg-opacity-10 px-8 py-4 backdrop-blur-sm"
    >
      <!-- Left side -->
      <div class="flex flex-row items-center gap-4">
        <NuxtLink to="/">
          <NuxtImg src="img/icon.webp" alt="Logo" width="24" height="24" />
        </NuxtLink>
        <NuxtLink to="/" class="text-xl">Gabriel Landry</NuxtLink>
      </div>
      <!-- Right side -->
      <div class="flex flex-row items-center gap-4">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/tools">Tools</NuxtLink>
      </div>
    </header>
  </div>
</template>
