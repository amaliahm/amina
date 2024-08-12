<script setup>

import { ref } from "vue";
import CommentIcon from "../assets/icons/CommentIcon.vue";
import StarIcon from "../assets/icons/StarIcon.vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../prism-coldark-dark.css";

const { index, codeText, details, scrollOnOpen } = defineProps([
  "index",
  "codeText",
  "details",
  "scrollOnOpen",
]);
const codeState = ref(codeText);
const detailsOpen = ref(false);
const detailBoxRef = ref(null);
const flashTextState = ref(false);

function flashText() {
  flashTextState.value = true;
  setTimeout(() => {
    flashTextState.value = false;
  }, 500);
}

function toggleDetails() {
  detailsOpen.value = !detailsOpen.value;
  if (detailsOpen.value == true) {
    scrollOnOpen(detailBoxRef, index);
    flashText();
  }
}

const code = ref(`
const button = document.querySelector('#sendBtn');

const message = {
    name: "",
    email: "",
    message: "",
    date: ""
}

button.addEventListener('click', () => {
    form.send(message);
})
`);

let highlighter = (code) => {
  return highlight(code, languages.js);
};

const components = {
  PrismEditor,
};
</script>

<template>
  <div 
    class="flex flex-col gap-8 mx-4 lg:mx-12"
  >
    <div 
      class="flex flex-row justify-between items-end mt-12"
    >
      <div 
        class="flex flex-row gap-3 items-end"
      >
        <img
          src="https://i.ibb.co/jMjCjn9/juggernaut.jpg"
          alt="profile-icon"
          class="h-12 lg:h-16 w-12 lg:w-16 rounded-full object-cover"
        />
        <div>
          <a
            href="https://github.com/amaliahm"
            class="font-bold text-[#5565E8]"
            >
              @amina-ghandouz
            </a
          >
          <p 
            class="hidden lg:block text-[#607B96]"
          >
            Created a few months ago
          </p>
        </div>
      </div>
      <div 
        class="flex flex-row gap-6 text-[#607B96]"
      >
        <button
          @click="toggleDetails"
          :style="{ color: detailsOpen ? 'white' : '' }"
          class="group flex flex-row items-center transition-all duration-400"
        >
          <CommentIcon class="inline mr-2" />
          <span class="group-hover:underline">
            details
          </span>
        </button>
        <span class="flex flex-row items-center">
            <StarIcon class="inline mr-1" />
          <span class="pt-1">
            star
          </span>
        </span>
      </div>
    </div>
    <div
      class="overflow-x-auto border-2 border-[#1E2D3D] bg-[#011221] rounded-2xl"
    >
      <prism-editor
        class="my-editor min-w-[500px] h-fit text-[12px] m-auto p-4 py-6"
        v-model="codeState"
        :highlight="highlighter"
        line-numbers
        readonly="true"
      >
      </prism-editor>
    </div>
    <p
      ref="detailBoxRef"
      :style="{
        maxHeight: detailsOpen ? '200px' : '0',
        color: flashTextState ? 'white' : '',
        textDecoration: flashTextState ? 'underline #ffffff99' : '#ffffff25',
      }"
      class="text-[#607B96] overflow-hidden transition-all duration-700"
    >
      /* {{ details }} */
    </p>
  </div>
</template>
