<script setup lang="ts">
const skills: {
  name: string;
  icon: string;
}[] = [
  {
    name: "TypeScript",
    icon: "mdi:language-typescript",
  },
  {
    name: "Javascript",
    icon: "mdi:language-javascript",
  },
  {
    name: "Vue.js",
    icon: "mdi:vuejs",
  },
  {
    name: "Nuxt.js",
    icon: "mdi:nuxt",
  },
  {
    name: "Tailwind CSS",
    icon: "mdi:tailwind",
  },
  {
    name: "CSS3",
    icon: "mdi:language-css3",
  },
  {
    name: "HTML5",
    icon: "mdi:language-html5",
  },
  {
    name: "Node.js",
    icon: "mdi:nodejs",
  },
  {
    name: "Git",
    icon: "mdi:git",
  },
  {
    name: "Java",
    icon: "mdi:language-java",
  },
  {
    name: "Python",
    icon: "mdi:language-python",
  },
  {
    name: "C++",
    icon: "mdi:language-cpp",
  },
  {
    name: "PostgreSQL",
    icon: "akar-icons:postgresql-fill",
  },
  {
    name: "MongoDB",
    icon: "tabler:brand-mongodb",
  },
  {
    name: "React",
    icon: "mdi:react",
  },
  {
    name: "Next.js",
    icon: "tabler:brand-nextjs",
  },
  {
    name: "Adonis.js",
    icon: "simple-icons:adonisjs",
  },
  {
    name: "Nest.js",
    icon: "simple-icons:nestjs",
  },
  {
    name: "Angular",
    icon: "mdi:angular",
  },
];
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="text-xl text-primary">PROGRAMMING SKILLS</div>
    <div class="flex flex-row flex-wrap gap-2">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex w-fit flex-row items-center gap-2 rounded-md border border-text border-opacity-50 bg-primary bg-opacity-5 p-2"
      >
        <Icon :name="skill.icon" />
        <div>{{ skill.name }}</div>
      </div>
    </div>
  </div>
</template>
