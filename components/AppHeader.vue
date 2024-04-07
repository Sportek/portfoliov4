<template>
  <div class="z-3 fixed left-0 right-0 top-0 w-screen">
    <header
      class="m-auto my-4 box-border flex max-w-[700px] flex-row items-center justify-between rounded-full border border-primary border-opacity-50 bg-primary bg-opacity-10 px-8 py-4 backdrop-blur-sm"
    >
      <!-- Left side -->
      <div class="flex flex-row items-center gap-4">
        <NuxtLink
          to="/"
          class="flex flex-row items-center gap-4 transition-all duration-200 ease-in-out hover:opacity-70"
        >
          <NuxtImg src="img/icon.webp" alt="Logo" width="24" height="24" />
          <div class="text-xl">Gabriel Landry</div>
        </NuxtLink>
      </div>
      <!-- Right side -->
      <div class="flex flex-row items-center gap-4">
        <NuxtLink
          class="transition-all duration-200 ease-in-out hover:opacity-70"
          to="/about"
          >About</NuxtLink
        >
        <NuxtLink
          class="transition-all duration-200 ease-in-out hover:opacity-70"
          to="/tools"
          >Tools</NuxtLink
        >
      </div>
    </header>
  </div>
</template>
