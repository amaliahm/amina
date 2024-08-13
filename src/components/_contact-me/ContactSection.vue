<script setup>
import SidebarContactVue from "./Sidebar.vue";
import { PrismEditor } from "vue-prism-editor";
import { onMounted, ref, watch } from "vue";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../prismtheme/prism-coldark-dark.css";

const name = ref("");
const email = ref("");
const message = ref("");
const date = new Date().toUTCString();

const code = ref(`
const button = document.querySelector('#sendBtn');

const message = {
    name: "",
    email: "",
    message: \` \`,
    date: "${date}"
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
  SidebarContactVue,
};

watch([name, email, message], () => {
  // Update `code` whenever `email` changes
  code.value = `
const button = document.querySelector('#sendBtn');

const message = {
    name: "${name.value}",
    email: "${email.value}",
    message: \`${message.value}\`,
    date: "${date}"
}

button.addEventListener('click', () => {
    form.send(message);
})
`;

  highlighter = (code) => {
    return highlight(code, languages.js);
  };
});
</script>

<template>
  <div class="h-full w-full flex flex-col lg:flex-row">
    <sidebar-contact-vue />
    <div class="h-full w-full grid grid-cols-8 auto-rows-auto">
      <!-- Left Side -->
      <div
        class="col-span-8 lg:col-span-4 relative border-[#1E2D3D] border-r-[1px]"
      >
        <div
          class="lg:absolute top-0 left-0 w-full h-full flex overflow-y-auto py-12 px-2 lg:px-8"
        >
          <form
            method="post"
            action="https://formspree.io/f/xayzkewr"
            class="w-2/3 flex flex-col m-auto"
          >
            <h1 class="lg:hidden text-2xl text-center mb-6">
              Write me a message
            </h1>

            <label class="text-[#607B96] mb-1">_name:</label>
            <input
              name="name"
              type="text"
              v-model="name"
              class="mb-6 px-2 py-1 text-[#465E77] bg-[#011221] rounded-lg border-[#1E2D3D] border-[1px] outline-none"
            />
            <label class="text-[#607B96] mb-1">_email:</label>
            <input
              name="email"
              type="email"
              v-model="email"
              class="mb-6 px-2 py-1 text-[#465E77] bg-[#011221] rounded-lg border-[#1E2D3D] border-[1px] outline-none"
            />
            <label class="text-[#607B96] mb-1">_message:</label>
            <textarea
              name="message"
              type="text"
              rows="7"
              v-model="message"
              class="resize-y mb-6 px-2 py-1 text-[#465E77] bg-[#011221] rounded-lg border-[#1E2D3D] border-[1px] outline-none"
            />

            <button
              class="w-fit py-2 px-4 text-white bg-[#1C2B3A] rounded-lg hover:bg-opacity-50"
            >
              submit-message
            </button>
          </form>
        </div>
      </div>

      <!-- Right Side -->
      <div class="hidden lg:block col-span-4 relative">
        <div
          class="absolute top-0 left-0 flex px-16 py-8 w-full h-full overflow-y-auto line-numbers"
        >
          <prism-editor
            class="my-editor h-fit m-auto"
            v-model="code"
            :highlight="highlighter"
            line-numbers
            readonly="true"
          ></prism-editor>
        </div>
      </div>
    </div>
  </div>
</template>
