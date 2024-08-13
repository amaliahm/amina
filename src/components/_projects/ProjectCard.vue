<script setup>
const { data, index } = defineProps(["data", "index"]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Card Heading -->
    <div class="flex flex-row gap-2 text-[#607B96]">
      <h1 class="font-bold text-[#5565E8]">{{ data.title }}</h1>
      // <span>{{ data.theme }}</span>
    </div>

    <!-- Card Body -->
    <div class="relative flex flex-col rounded-xl">
      <!-- Card Icon -->
      <div class="flex flex-row gap-2 absolute top-[10px] right-[10px]">
        <img
          v-for="ele in data.technologies"
          :src="ele.icon"
          :alt="ele.title + '_icon'"
          class="w-8 h-8"
        />
      </div>

      <!-- Card Image -->
      <img
        :src="data.img"
        alt="project-image"
        class="h-44 rounded-t-xl object-cover"
      />
      <!-- Card Text Body -->
      <div class="flex flex-col gap-2 px-6 py-8 bg-[#011221] rounded-b-lg">
        <p class="text-[#607B96]">
          {{ data.desc }}
        </p>

        <a
          :href="data.link"
          target="_blank"
          class="w-fit flex items-center justify-center px-4 py-3 rounded-lg text-white bg-[#1C2B3A] hover:bg-opacity-50"
        >
          view-project
        </a>
      </div>
    </div>
  </div>
</template>
