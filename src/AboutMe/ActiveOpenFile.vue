<script setup>

const { activeFile } = defineProps(["activeFile"]);

</script>

<template>

  <div>
    <h1 class="px-4 text-xl">
      // {{ activeFile.path[0] }} / {{ activeFile.path[1] }} /
      {{ activeFile.path[2] }}
    </h1>
    <p 
      class="flex flex-col px-6 py-5 text-xl text-[#607b96]"
    >
      <span 
        :key="ele" 
        v-for="ele in activeFile.fileContent"
      > 
        {{ ele }}
      </span>
    </p>
  </div>
  
</template>
