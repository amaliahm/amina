<script setup>

import { ref, onMounted } from "vue";
import NavigationBar from "./components/NavBar.vue";
import NavigationBarMobile from "./components/NavBarMobile.vue";
import FooterBar from "./components/FooterBar.vue";
import Hero from "./_hello/Hero.vue";
import useNavStore from "./stores/navStore";
import AboutMe from "./_about-me/About.vue";
import Projects from "./_projects/Projects.vue";
import Contact from "./_contact-me/Contact.vue";



const navStore = useNavStore();
</script>

<template>
  <div
    class="min-h-screen h-screen lg:max-h-screen lg:max-w-screen w-full flex flex-col overflow-hidden"
  >
    <NavigationBar />
    <NavigationBarMobile />
    <Transition 
      name="fade" 
      mode="out-in" 
      appear @after-leave="onAfterLeave"
    >
      <template 
        v-if="navStore.activeElement == '_hello'"
      >
        <Hero />
      </template>
      <template 
        v-else-if="navStore.activeElement == '_about-me'"
      >
        <AboutMe />
      </template>
      <template v-else-if="navStore.activeElement == '_projects'">
        <Projects />
      </template>
      <template v-else-if="navStore.activeElement == '_contact-me'">
        <Contact />
      </template>
    </Transition>

    <FooterBar />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: all 1.5s ease-in-out;
}

@media only screen and (max-width: 980px) {
  .fade-enter-active,
  .fade-leave-active {
    transform: scale(1);
    transition: all 0.7s ease-in-out;
  }
}

.fade-enter-from {
  transform: scale(0.85);
  opacity: 0;
}
.fade-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
</style>
