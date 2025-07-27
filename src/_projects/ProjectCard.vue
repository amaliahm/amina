<script setup>
import { ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

const { data, index } = defineProps([
  "data", "index"
]);

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-2 text-[#607B96]">
      <h1 class="font-bold text-[#5565E8]">
        {{ data.title }}
      </h1>
      //
      <span>
        {{ data.project_number }}
      </span>
    </div>
    
    <div 
      @click="openModal"
      class="relative flex flex-col rounded-xl h-[450px] bg-[#011221] cursor-pointer hover:bg-opacity-80 transition-all duration-200"
    >
      <img
        :src="data.img"
        alt="project-image"
        class="h-44 rounded-t-xl object-cover"
      />
      <div class="flex flex-col gap-2 px-6 py-8 bg-[#011221] rounded-b-lg">
        <p class="text-[#607B96]">
          {{ data.desc }}
        </p>
        <div class="flex flex-row gap-2 p-0 flex-wrap bg-[#011221] rounded-b-lg">
          <a
            :key="ele"
            v-for="ele in data.used"
            class="w-fit flex items-center flex-wrap justify-center px-4 py-3 rounded-lg text-white bg-[#1C2B3A] hover:bg-opacity-50"
          >
            {{ ele }}
          </a>
        </div>
      </div>
    </div>

    <ProjectModal 
      :is-open="isModalOpen"
      :data="data"
      @close="closeModal"
    />
  </div>
</template>