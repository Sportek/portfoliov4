<template>
  <footer class="flex flex-col gap-4">
    <hr class="opacity-50" />

    <div
      class="box-border flex flex-col justify-between gap-4 py-4 sm:w-[50%] sm:flex-row"
    >
      <!-- Infos -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-row items-center gap-2">
          <NuxtImg src="img/icon.webp" alt="Logo" width="24" height="24" />
          <div class="text-xl">Gabriel Landry</div>
        </div>
        <div class="opacity-75">
          Passionate student in software engineering from Quebec, Canada
        </div>
        <SocialLinksToolbar />
      </div>
      <!-- Links -->
      <div class="flex w-[50%] flex-col gap-4">
        <div>GENERAL</div>
        <div class="flex flex-col gap-2">
          <CustomLink to="/about" class="opacity-75">About</CustomLink>
          <CustomLink to="/tools" class="opacity-75">Tools</CustomLink>
        </div>
      </div>
    </div>
  </footer>
</template>
