<script setup>
const { isOpen, data } = defineProps([
  'isOpen',
  'data'
]);

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const closeOnBackdrop = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
</script>

<template>
  <div 
    v-if="isOpen"
    @click="closeOnBackdrop"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm"
  >
    <div class="relative max-w-4xl w-full mx-4 bg-[#011221] rounded-xl overflow-hidden flex">
      <div class="flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        <div class="w-full md:w-1/2 bg-[#011221] flex items-center justify-center p-8">
          <img
            :src="data?.img"
            alt="project-image"
            class="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div class="w-full md:w-1/2 bg-[#011221] overflow-y-auto">
          <div class="p-6 md:p-8 h-full">
            <div class="flex flex-col gap-4 mb-6">
              <h2 class="text-2xl md:text-3xl font-bold text-[#5565E8]">
                {{ data?.title }}
              </h2>
              <span class="text-[#607B96] text-lg">
                {{ data?.project_number }}
              </span>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3">Description</h3>
              <p class="text-[#607B96] leading-relaxed">
                {{ data?.desc }}
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  :key="ele"
                  v-for="ele in data?.used || []"
                  class="px-4 py-2 rounded-lg text-white bg-[#1C2B3A] hover:bg-opacity-70 transition-colors"
                >
                  {{ ele }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>