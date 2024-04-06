<template>
  <div class="grid grid-cols-3 justify-between">
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
      <div class="flex flex-row gap-4">
        <CustomButton class="bg-accent bg-opacity-85">
          <Icon name="material-symbols:android-contacts" size="24" />
          More about me
        </CustomButton>
        <SocialLinksToolbar />
      </div>
    </div>
    <div class="flex items-center justify-end">
      <NuxtImg
        src="img/profile.png"
        alt="Profile picture"
        width="auto"
        height="200"
      />
    </div>
  </div>
</template>
