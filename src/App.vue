<script setup>
import NavBar from "./components/NavBar.vue"
import NavBarMobile from "./components/NavBarMobile.vue"
import FooterBar from "./components/FooterBar.vue"

</script>

<template>
  <div
    class="min-h-screen h-screen lg:max-h-screen lg:max-w-screen w-full flex flex-col overflow-hidden"
  >
    <NavBar />
    <NavBarMobile />
    <footerBar />
  </div>
</template>