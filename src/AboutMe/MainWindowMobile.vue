<script setup>

import { ref, provide, watch } from "vue";
import personalInfo from "../data/personal-info";
import Category from "./Category.vue";
import ActiveOpenFile from "./ActiveOpenFile.vue";
import CodeSnippets from "./CodeSnippet.vue";
import ArrowDown from "../assets/icons/ArrowDown.vue";

const categories = [
  {
    category: "personal",
    data: personalInfo,
  },
];








const activeFile = ref({
  fileName: "personal",
  fileContent: [
    "I am a seasoned Full Stack Developer with expertise in frontend and backend development, utilizing various frameworks and languages.",
    "",
    "I have experience in building real-time applications and complex web components.",
    "As a freelancer, I take on diverse projects.",
    "",
    "In addition to my professional pursuits, I have a deep passion for music, gaming, and exploring captivating light novels, mangas, manhwas, and animes.",
    "",
    "My versatile skill set and diverse interests drive me to deliver exceptional results.",
  ],
  path: ["personal", "bio", ""],
});







function setActiveFile(fileName, fileContent, pathCategory, folderName) {
  activeFile.value = {
    fileName,
    fileContent,
    path: [pathCategory, folderName, fileName],
  };
}

provide("setActiveFile", setActiveFile);

</script>

<template>

  <div 
    class="lg:hidden flex flex-col h-fit overflow-y-scroll"
  >
    <h1 
      class="px-8 py-5 text-white text-xl"
    >
      _about-me
    </h1>
    <div 
      class="flex flex-col gap-1"
    >
      <Category 
        :key="ele"
        v-for="ele in categories" 
        :data="ele" 
      />
    </div>
    <ActiveOpenFile 
      :activeFile="activeFile"
    />
    <CodeSnippets />
  </div>
</template>
