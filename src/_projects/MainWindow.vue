<script setup>

import { ref, watch } from "vue";
import ProjectCard from "./ProjectCard.vue";
import useProjectsStore from "../stores/projectsStore";
import CloseIcon from "../assets/icons/CloseIcon.vue";
import data from "./data/projects-data";

const projectsStore = useProjectsStore();
const projectsToRender = ref(data);
const showMessage = ref(false);

watch(projectsStore, () => {
  if (projectsStore.filters.length == 0) {
    return (projectsToRender.value = data);
  }

  return (projectsToRender.value = data.filter((project) => {
    let isProjectIncluded = false;
    for (let i = 0; i < project.technologies.length; i++) {
      if (projectsStore.filters.includes(project.technologies[i].title)) {
        isProjectIncluded = true;
      }
    }
    return isProjectIncluded;
  }));
});

watch(projectsToRender, () => {
  if (projectsToRender.value.length == 0) {
    showMessage.value = true;
  } else {
    showMessage.value = false;
  }
});

</script>

<template>
  <div class="relative h-full w-full overflow-y-auto">
    <div class="absolute top-0 left-0 w-full h-fit px-6 lg:px-20 py-8 lg:py-28">
      <div
        class="min-h-[29px] hidden absolute top-0 left-0 w-full lg:flex flex-row py-1 border-b-[1.5px] border-[#1E2D3D]"
      >
        <p
          v-if="projectsStore.filters.length != 0"
          class="flex gap-2 items-center px-2 border-r-[1.5px] border-[#1E2D3D]"
        >
          <span 
            :key="ele"
            v-for="ele in projectsStore.filters"
          >
            {{ ele }};
          </span>
          <span 
            @click="projectsStore.resetFilters"
          >
            <CloseIcon
              class="text-2xl p-1 hover:bg-gray-800 rounded-lg cursor-pointer"
            />
          </span>
        </p>
      </div>
      <div 
        class="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6 lg:gap-16"
      >
        <Transition name="fade">
          <div
            v-if="showMessage"
            class="absolute top-0 left-0 translate-y-[50px] lg:translate-y-1/4 w-full px-4 py-4 flex flex-col items-center justify-center gap-4 text-center text-[#607B96] z-[-5]"
          >
            <img
              src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
              alt="not-found-gif"
              class="h-52 w-52 object-cover rounded-full mb-4"
            />
          </div>
        </Transition>
        <TransitionGroup 
          name="list"
        >
          <ProjectCard
            v-for="(ele, ind) in projectsToRender"
            :data="ele"
            :index="ind"
            :key="ele.id"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>

</template>

<style scoped>

.list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-active {
  position: absolute;
  max-width: 325px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
