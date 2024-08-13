<script setup>

import MarkdownIcon from "../../assets/icons/MarkdownIcon.vue";
import IcArrowRight from "../../assets/icons/IcArrowRight.vue";
import FolderIcon from "../../assets/icons/FolderIcon.vue";
import { ref, inject } from "vue";

const { data, categoryName } = defineProps(["data", "categoryName"]);
const folderOpen = ref(false);

function toggleFolder() {
  folderOpen.value = !folderOpen.value;
}

const setActiveFile = inject("setActiveFile");

</script>

<template>

  <div class="pl-6">
    <div
      @click="toggleFolder"
      class="flex flex-row items-center hover:underline cursor-pointer"
    >
      <IcArrowRight
        class="inline transition-all duration-400 ease-in"
        :style="{
          transform: folderOpen ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
        }"
      />
      <FolderIcon 
        :style="{ color: data.folderColor }" 
      />
      <p class="ml-1 pt-1">
        {{ data.folderName }}
      </p>
    </div>
    <Transition name="fade-up">
      <div 
        v-if="folderOpen" 
        class="pl-8"
      >
        <p
          :key="ele"
          v-for="ele in data.files"
          @click="
            setActiveFile(
              ele.fileName,
              ele.fileContent,
              categoryName,
              data.folderName
            )
          "
          class="group cursor-pointer"
        >
          <MarkdownIcon 
            class="inline opacity-80" 
          />
          <span class="group-hover:underline pl-2">
            {{ ele.fileName }}
          </span>
        </p>
      </div>
    </Transition>
  </div>

</template>

<style scoped>

.fade-up-enter-active,
.fade-up-leave-active {
  transform: scale(1);
  max-height: 500px;
  transition: all 0.5s ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: scale(0.85);
  max-height: 0;
  opacity: 0;
}

</style>
