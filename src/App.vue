<script setup>

import NavBar from "./components/NavBar.vue"
import NavBarMobile from "./components/NavBarMobile.vue"
import FooterBar from "./components/FooterBar.vue"
// import Hero from "./hello/Hero.vue"
import AboutMe from "./AboutMe/AboutMe.vue"

</script>

<template>
  <div
    class="min-h-screen h-screen lg:max-h-screen lg:max-w-screen w-full flex flex-col overflow-hidden"
  >
    <NavBar />
    <NavBarMobile />
    <Transition 
      name="fade"
      mode="out-in"
      appear
      @after-leave="onAfterLeave"
    >
      <!-- <template 
        v-if="navStore.activeElement == '_hello'"
      >
        <Hero />
      </template> -->
      <template 
        v-if="navStore.activeElement == '_about-me'"
      >
        <AboutMe />
      </template>
    </Transition>
    <FooterBar />
  </div>
</template>