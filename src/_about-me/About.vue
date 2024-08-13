<script setup>

import MainWindow from "./MainWindow.vue";
import MainWindowMobile from "./mobileViews/MainWindowMobile.vue";
import NavSide from "./NavSide.vue";

</script>

<template>

  <div class="h-full w-screen flex flex-col lg:flex-row flex-nowrap">
    <NavSide />
    <MainWindow />
    <MainWindowMobile />
  </div>
  
</template>
