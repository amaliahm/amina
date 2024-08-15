<script setup>

import { ref, provide, watch } from "vue";
import Category from "./Category.vue";
import ActiveOpenFile from "./ActiveOpenFile.vue";
import CodeSnippets from "../CodeSnippets.vue";
import personalInfo from "../data/personal-info";
import professionalInfo from "../data/professional-info";
import ArrowDown from "../../assets/icons/ArrowDown.vue";
import EmailIcon from "../../assets/icons/EmailIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";

const categories = [
  {
    category: "personal",
    data: personalInfo,
  },
  {
    category: "professional",
    data: professionalInfo,
  },
];
const activeFile = ref({
  fileName: "personal",
  fileContent: [
    "I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.",
    "",
    "My journey in web and mobile development has allowed me to build a diverse skill set, making me proficient in creating responsive, user-friendly applications.",
    "",
    "Whether it's coding, problem-solving, or exploring new frameworks, I am always eager to take on challenges and grow as a developer.",
    "",
    "My goal is to build innovative solutions that make a difference.",
    "",
    "I thrive on learning new technologies and continuously improving my craft.",
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

  <div class="lg:hidden flex flex-col h-fit overflow-y-scroll">
    <h1 class="px-8 py-5 text-white text-xl">
      _about-me
    </h1>
    <div class="flex flex-col gap-1">
      <Category 
        :key="ele"
        v-for="ele in categories" 
        :data="ele" 
      />
    </div>
    <ActiveOpenFile :activeFile="activeFile" />
    <CodeSnippets />
  </div>
  
</template>
