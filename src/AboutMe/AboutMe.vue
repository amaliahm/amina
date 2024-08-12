<script setup>

import MainWindow from "./MainWindow.vue";
import MainWindowMobile from "./MainWindowMobile.vue";
import NavigationSide from "./NavSide.vue";

</script>

<template>
  <div 
    class="h-full w-screen flex flex-col lg:flex-row flex-nowrap"
  >
    <NavigationSide />
    <MainWindow />
    <MainWindowMobile />

  </div>
</template>