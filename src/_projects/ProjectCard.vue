<script setup>

const { data, index } = defineProps([
  "data", "index"
]);

</script>

<template>

  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-2 text-[#607B96]">
      <h1 class="font-bold text-[#5565E8]">
        {{ data.title }}
      </h1>
      // 
      <span>
        {{ data.theme }}
      </span>
    </div>
    <div class="relative flex flex-col rounded-xl">
      <img
        :src="data.img"
        alt="project-image"
        class="h-44 rounded-t-xl object-cover"
      />
      <div class="flex flex-col gap-2 px-6 py-8 bg-[#011221] rounded-b-lg">
        <p class="text-[#607B96]">
          {{ data.desc }}
        </p>
        <div class="flex flex-row gap-2 p-2 bg-[#011221] rounded-b-lg">
          <a 
            :key="ele"
            v-for="ele in data.used" 
            class="w-fit flex items-center justify-center px-4 py-3 rounded-lg text-white bg-[#1C2B3A] hover:bg-opacity-50"
          >
            {{ ele }}
          </a>
        </div>
      </div>
    </div>
  </div>
  
</template>
