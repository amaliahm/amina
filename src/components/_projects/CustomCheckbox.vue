<script setup>
import { ref, watch } from "vue";
import { useProjectsStore } from "../../stores/projectsStore";

const { data } = defineProps(["data"]);

const projectsStore = useProjectsStore();
const isChecked = ref(false);

watch(isChecked, () => {
  if (isChecked.value == true) {
    projectsStore.addFilter(data.title);
  } else {
    projectsStore.removeFilter(data.title);
  }
});

watch(projectsStore, () => {
  if (projectsStore.filters.length == 0) {
    isChecked.value = false;
  }
});
</script>

<template>
  <div
    @click="isChecked = !isChecked"
    class="group flex flex-row gap-4 items-center cursor-pointer"
  >
    <div
      :style="{
        border: '1.5px solid #607B96',
      }"
      class="relative h-5 w-5 cursor-pointer rounded"
    >
      <label
        :style="{
          background: isChecked ? '#607B96' : 'transparent',
        }"
        class="w-full h-full flex items-center justify-center absolute top-0 left-0 z-[-10] transition-all duration-[0.4s]"
      >
        <Transition name="fade">
          <svg
            v-if="isChecked"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
            />
          </svg>
        </Transition>
      </label>
    </div>
    <img
      :src="data.img"
      :alt="data.title + '_icon'"
      class="h-8 w-8 invert opacity-50 border-2"
    />
    <span
      class="border-b-[1px] border-b-transparent group-hover:border-b-[#ffffff] leading-tight transition-all duration-[0.4s]"
    >
      {{ data.title }}
    </span>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
