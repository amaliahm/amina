<script setup>

import { ref } from "vue";
import FolderWithFiles from "./FolderWithFiles.vue";
import ArrowRight from "../assets/icons/ArrowRight.vue";

const { data } = defineProps(["data"]);
const isOpenCategory = ref(false);

function toggleCategory() {
  isOpenCategory.value = !isOpenCategory.value;
}

</script>

<template>

  <div>
    <h1
      @click="toggleCategory"
      class="flex flex-row gap-2 items-center px-6 py-1 text-xl bg-gray-700 cursor-pointer"
    >
      <ArrowRight
        :class="isOpenCategory ? 'rotate-90' : ''"
        class="transition-all duration-400"
      />
      {{ data.category }}
    </h1>
    <div
      :style="{
        maxHeight: isOpenCategory ? '500px' : '0px',
        padding: isOpenCategory ? '5px 5px' : '0px',
      }"
      class="flex flex-col transition-all duration-400 overflow-y-hidden"
    >
      <FolderWithFiles
        :key="fol"
        v-for="fol in data.data"
        :data="fol"
        :categoryName="data.category"
      />
    </div>
  </div>
  
</template>
