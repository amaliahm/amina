<script setup>

import { ref } from "vue";
import useNavStore from "../stores/navStore";
import FooterBarMobile from "./FooterBarMobile.vue";
import HamburgerIcon from "../assets/icons/HamburgerIcon.vue";
import CloseIcon from "../assets/icons/CloseIcon.vue";

const isMenuOpen = ref(false);
const navStore = useNavStore();

function changeRoute(elem) {
  navStore.setActiveElement(elem);
  isMenuOpen.value = false;
}

</script>

<template>

  <ul
    class="relative flex lg:hidden flex-row justify-between text-[#607B96] border-solid border-[#1e2d3d] border-b-[1px]"
  >
    <a
      href="/"
      class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap"
    >
      amina-ghandouz
    </a>
    <li
      @click="isMenuOpen = true"
      class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap hover:bg-gray-800 hover:bg-opacity-50"
    >
      <HamburgerIcon class="text-xl" />
    </li>
    <div
      v-if="isMenuOpen"
      class="absolute top-0 left-0 w-full h-screen flex flex-col bg-[#011627] z-10 transition-all duration-400 ease-out"
    >
      <div
        class="flex flex-row justify-between border-solid transition-all duration-700 cursor-pointer whitespace-nowrap border-solid border-[#1e2d3d] border-b-[1px]"
      >
        <li 
          class="p-4 px-6"
        >
          amina-ghandouz
        </li>
        <li 
          @click="isMenuOpen = false" 
          class="p-4 px-6 hover:bg-gray-800"
        >
          <CloseIcon class="text-2xl" />
        </li>
      </div>
      <li
        :key="ele"
        v-for="ele in ['_hello', '_about-me', '_projects', '_contact-me']"
        @click="changeRoute(ele)"
        class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap border-solid border-[#1e2d3d] border-b-[1px] hover:text-white z-10"
      >
        {{ ele }}
      </li>
      <FooterBarMobile />
    </div>
  </ul>
</template>