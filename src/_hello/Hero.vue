<script setup>

import Game from "./Game.vue";

</script>

<template>
  <div
    class="h-full w-screen max-w-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 px-5 lg:px-[15%] py-12 overflow-x-hidden"
  >
    <div class="relative h-5/6 lg:h-fit flex flex-col items-start">
      <div
        class="lg:hidden absolute top-0 left-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              0% 15%,
              35% 41%,
              15% 0%,
              85% 0%,
              68% 29%,
              100% 15%,
              100% 85%,
              67% 68%,
              85% 100%,
              15% 100%,
              27% 68%,
              0% 85%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-gradient-to-br from-[#4D5BCE] to-[#43D9AD] opacity-60 z-10"
        />
      </div>
      <div
        class="lg:hidden absolute bottom-0 right-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              0% 15%,
              35% 41%,
              15% 0%,
              85% 0%,
              68% 29%,
              100% 15%,
              100% 85%,
              67% 68%,
              85% 100%,
              15% 100%,
              27% 68%,
              0% 85%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-gradient-to-br from-[#43D9AD] to-[#4D5BCE] opacity-40 rotate-45"
        />
      </div>

      <p class="text-xl">
        Hi all. I am
      </p>
      <h1 class="text-[3em] lg:text-[4em] text-left leading-tight">
        Amina Ghandouz
      </h1>
      <h3
        class="text-left text-[1.50em] whitespace-nowrap md:text-[2em] text-[#43D9AD] lg:text-[#4D5BCE]"
      >
        > Full Stack Developer
      </h3>

      <p class="hidden lg:block mt-12 text-gray-500">
        // complete the game to continue
      </p>
      <p class="hidden lg:block text-gray-500">
        // you can also see it on my github page
      </p>

      <p class="lg:hidden text-gray-500 mt-auto">
        // find my profile on Github:
      </p>
      <p class="flex flex-col md:flex-row gap-2 md:gap-3 mt-2">
        <span class="text-green-400">
          <span class="text-blue-600">
            const
          </span> 
          githubLink =
        </span>
        <a
          href="https://github.com/amaliahm"
          target="_blank"
          class="text-yellow-600 underline lg:no-underline"
        >
          "https://github.com/amaliahm"
        </a>
      </p>
    </div>
    <div 
      class="relative hidden h-full lg:flex items-center justify-center"
    >
      <div
        class="absolute top-0 left-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              20% 0%,
              55% 23%,
              100% 20%,
              100% 80%,
              57% 100%,
              31% 70%,
              0 76%,
              0% 20%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-[#43D9AD] bg-opacity-70"
        />
      </div>
      <div
        class="absolute bottom-0 right-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              20% 0%,
              55% 23%,
              100% 20%,
              100% 80%,
              57% 100%,
              31% 70%,
              0 76%,
              0% 20%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-[#4D5BCE] bg-opacity-90 rotate-45"
        />
      </div>
      <Game />
    </div>
  </div>

</template>
