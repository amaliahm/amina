<script setup>

import InstagramIcon from "../assets/icons/InstagramIcon.vue"
import TwitterIcon from "../assets/icons/TwitterIcon.vue";
import GithubIcon from "../assets/icons/GithubIcon.vue";

</script>

<template>
  <div
    class="relative flex lg:hidden flex-row items-center justify-between mt-auto text-[#607B96] border-solid border-[#1e2d3d] border-t-[1px]"
  >
    <li class="pl-6">
        find me in
    </li>
    <li
      class="flex items-center text-2xl border-solid border-[#1e2d3d] border-l-[1px]"
    >
      <a
        href="https://twitter.com/amina_gh_"
        target="_blank"
        class="p-4 border-solid border-[#1e2d3d] border-r-[1px] hover:text-white"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://instagram.com/amina._.gh_"
        target="_blank"
        class="p-4 border-solid border-[#1e2d3d] border-r-[1px] hover:text-white"
      >
        <InstagramIcon />
      </a>
      <a 
        href="https://github.com/amaliahm" 
        target="_blank"
        class="p-4 text-sm hover:text-white"
      >
        <GithubIcon />
      </a>
    </li>
  </div>
</template>