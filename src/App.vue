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
const showWarning = ref(false);
const msgWarning = ref('');

const hideWarning = () => {
  showWarning.value = false;
  msgWarning.value = '';
};

onMounted(() => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showWarning.value = true;
    msgWarning.value = 'Right-click is disabled';
    setTimeout(hideWarning, 3000); 
  });

  document.addEventListener("keydown", (e) => {
    // disable f12
    if ( e.keyCode === 123 ) {
      e.preventDefault();
      showWarning.value = true;
      msgWarning.value = 'F12 key is disabled';
      setTimeout(hideWarning, 3000);
    }
    // disable ctrl+shift+i
    if ( e.ctrlKey && e.shiftKey && e.keyCode === 73 ) {
      e.preventDefault();
      showWarning.value = true;
      msgWarning.value = 'Inspect is disabled';
      setTimeout(hideWarning, 3000);
    }
    // disable ctrl+shift+j
    if ( e.ctrlKey && e.shiftKey && e.keyCode === 74 ) {
      e.preventDefault();
      showWarning.value = true;
      msgWarning.value = 'Inspect is disabled';
      setTimeout(hideWarning, 3000);
    }
    // disable ctrl+u
    if ( e.ctrlKey && e.keyCode === 85 ) {
      e.preventDefault();
      showWarning.value = true;
      msgWarning.value = 'Ctrl+U is disabled';
      setTimeout(hideWarning, 3000);
    }
  });
});
</script>

<template>
  <div
    class="min-h-screen h-screen lg:max-h-screen lg:max-w-screen w-full flex flex-col overflow-hidden relative"
  >
    <NavigationBar />
    <NavigationBarMobile />
    <Transition 
      name="fade" 
      mode="out-in" 
      appear 
      @after-leave="onAfterLeave"
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
    <div
      v-if="showWarning"
      class="fixed bottom-5 right-5 bg-gradient-to-br from-[#4D5BCE] to-[#43D9AD] text-white p-4 rounded-lg shadow-lg z-50 transition-all duration-500 ease-in-out"
    >
      <p> {{msgWarning}} </p>
    </div>
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
