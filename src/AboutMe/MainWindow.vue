<script setup>

import { ref, watch, onBeforeMount } from "vue";
import CodeSnippets from "./CodeSnippet.vue";
import useAboutMeStore from "../stores/AboutMeStore";
import CloseIcon from "../assets/icons/CloseIcon.vue";

const aboutMeStore = useAboutMeStore();
const activeFile = ref(
  aboutMeStore.opened.files.filter((ele) => {
    return ele.title == aboutMeStore.opened.file;
  })[0]
);

watch(aboutMeStore, () => {
  if (aboutMeStore.opened.files.length != 0) {
    console.log("ReASSIGN");
    activeFile.value = aboutMeStore.opened.files.filter(
      (ele) => ele.title == aboutMeStore.opened.file
    )[0];
    console.log(activeFile.value.title);
    console.log(aboutMeStore.opened.files.length);
  } else {
    activeFile.value = { title: "", content: [] };
  }
});

function setActiveFile(fileName) {
  aboutMeStore.setActiveFile(fileName);
}

function closeFile(fileName) {
  if (aboutMeStore.opened.file == fileName) {
    if (aboutMeStore.opened.files.length != 1) {
      aboutMeStore.closeOpenedFile(fileName);
      aboutMeStore.setActiveFile(
        aboutMeStore.opened.files[aboutMeStore.opened.files.length - 1].title
      );
    } else {
      aboutMeStore.closeOpenedFile(fileName);
      aboutMeStore.setActiveFile("");
    }
  } else {
    aboutMeStore.closeOpenedFile(fileName);
  }
}

onBeforeMount(() => {
  if (aboutMeStore.opened.file == "") {
    activeFile.value = {
      title: "",
      content: [],
    };
  }
});
</script>

<template>
  <div 
    class="w-full hidden lg:grid grid-cols-8"
  >
    <div 
      class="relative col-span-4 text-lg text-[#607B96] border-solid border-[#1e2d3d] border-r-[1px]"
    >
      <div
        class="min-h-[29px] files-open-overview w-full max-w-full flex flex-row flex-nowrap overflow-x-auto border-solid border-[#1e2d3d] border-b-[1px] bg-[#011627] z-50"
      >
        <h1 
          :key="ele"
          v-for="ele in aboutMeStore.opened.files" 
          :style="{ color: ele.title == aboutMeStore.opened.file ? 'white' : '',}"
          class="w-fit flex gap-3 items-center text-[14px] p-[1.5px] pl-4 pr-2 border-solid border-[#1e2d3d] border-r-[1px] cursor-pointer whitespace-nowrap"
        >
          <span @click="setActiveFile(ele.title)">
            {{ ele.title }}
          </span>
          <span @click="closeFile(ele.title)">
            <CloseIcon class="hover:text-gray-200" />
          </span>
        </h1>
      </div>
      <ul 
        class="relative active-file-content overflow-y-auto py-4"
      >
        <li 
          :key="ele" 
          v-for="(ele, ind) in activeFile.content" 
          class="grid grid-cols-12 pl-12 pr-4"
        >
          <span class="col-span-1">
            {{ ind + 1 }}
          </span>
          <span class="col-span-11">
            {{
              (() => {
                if (ind == 0 || ind == activeFile.content.length - 1) {
                  return;
                } else {
                  return "*";
                }
              })()
            }}
            {{ ele }}
          </span>
        </li>
      </ul>
    </div>
    <CodeSnippets />
  </div>

</template>

<style scoped>

.active-file-content {
  width: 100%;
  height: calc(100% - 29px);
  max-height: calc(100% - 29px);
  position: absolute;
  top: 29px;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>