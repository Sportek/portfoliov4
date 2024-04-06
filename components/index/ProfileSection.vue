<template>
  <div class="flex grid-cols-3 flex-col justify-between gap-4 sm:grid">
    <div class="col-span-2 flex flex-col gap-2">
      <div>Hi 👋, my name is</div>
      <div class="text-3xl font-medium text-primary">Gabriel Landry</div>
      <div>
        I'm a passionate third year software engineering student at
        <CustomLink to="https://www.polymtl.ca/" class="text-primary"
          >Polytechnique Montréal</CustomLink
        >
        specialized in web based programming and design, loving to learn by
        create interesting and well constructed projects.
      </div>
      <div
        class="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <CustomButton class="w-full justify-center bg-accent bg-opacity-85">
          <Icon name="material-symbols:android-contacts" size="24" />
          More about me
        </CustomButton>
        <SocialLinksToolbar />
      </div>
    </div>
    <div class="hidden items-center justify-center sm:flex sm:justify-end">
      <NuxtImg
        src="img/profile.png"
        alt="Profile picture"
        width="auto"
        height="200"
      />
    </div>
  </div>
</template>
