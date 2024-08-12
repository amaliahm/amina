<script setup>

import FoldersWithFiles from "./FolderWithFilesForNavSide.vue";
import personalInfo from "../data/personal-info";
import { useAboutMeStore } from "../stores/AboutMeStore";

import CommandPromptIcon from "../assets/icons/CommandPromptIcon.vue";
import GlobeIcon from "../assets/icons/GlobeIcon.vue";
import GamepadIcon from "../assets/icons/GamepadIcon.vue";
import ArrowDown from "../assets/icons/ArrowDown.vue";

const aboutMeStore = useAboutMeStore();

</script>

<template>

  <div
    class="hidden lg:flex min-w-[250px] h-full flex-row border-solid border-[#1e2d3d] border-r-[1px]"
  >
    <div
      class="flex flex-col py-2 border-solid border-[#1e2d3d] border-r-[1px]"
    >
      <p
        @click="aboutMeStore.setActiveCategory('professional-info')"
        :style="{
          color:
            aboutMeStore.opened.category == 'professional-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <CommandPromptIcon />
      </p>
      <p
        @click="aboutMeStore.setActiveCategory('personal-info')"
        :style="{
          color: aboutMeStore.opened.category == 'personal-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <GlobeIcon />
      </p>
      <p
        @click="aboutMeStore.setActiveCategory('interests-info')"
        :style="{
          color:
            aboutMeStore.opened.category == 'interests-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <GamepadIcon />
      </p>
    </div>
    <div 
      class="h-full w-full flex flex-col overflow-x-hidden"
    >
      <h2
        class="flex items-center gap-2 px-3 py-1 border-solid border-[#1e2d3d] border-b-[1px] overflow-hidden"
      >
        <ArrowDown 
          class="inline"
        />
        <Transition 
          name="fade" 
          mode="out-in"
        >
          <template 
            v-if="aboutMeStore.opened.category == 'personal-info'"
          >
            <p>
              personal-info
            </p>
          </template>
        </Transition>
      </h2>
      <Transition 
        name="fadeabs" 
        mode="out-in"
      >
        <template 
          v-if="aboutMeStore.opened.category == 'personal-info'"
        >
          <div 
            class="flex flex-col pt-2 pl-1 pb-6"
          >
            <FoldersWithFiles 
              :key="ele"
              v-for="ele in personalInfo" 
              :data="ele"
            />
          </div>
        </template>
      </Transition>
    </div>
  </div>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fadeabs-enter-active,
.fadeabs-leave-active {
  transition: all 0.5s ease;
}

.fadeabs-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fadeabs-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
