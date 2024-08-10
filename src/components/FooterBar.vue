<script setup>

import InstagramIcon from "../assets/icons/InstagramIcon.vue"
import TwitterIcon from "../assets/icons/TwitterIcon.vue";
import GithubIcon from "../assets/icons/GithubIcon.vue";

</script>

<template>
  <ul
    class="hidden w-full mt-auto lg:flex flex-row items-center text-[#607B96] border-solid border-[#1e2d3d] border-t-[1px] bg-[#011627]"
  >
    <li class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px]">
      find me in
    </li>
    <a
      href="https://twitter.com/amina_gh_"
      target="_blank"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] text-2xl hover:text-gray-100"
    >
      <TwitterIcon />
    </a>

    <a
      href="https://instagram.com/amina._.gh_"
      target="_blank"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] text-2xl hover:text-gray-100"
    >
      <InstagramIcon />
    </a>

    <a
      href="https://github.com/amaliahm"
      target="_blank"
      class="ml-auto px-6 py-4 border-solid border-[#1e2d3d] border-l-[1px] hover:text-gray-100"
    >
      @amaliahm
      <GithubIcon class="inline" />
    </a>
  </ul>
</template>