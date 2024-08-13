<script setup>
import ArrowDownVue from "../../assets/icons/ArrowDown.vue";
import EmailIconVue from "../../assets/icons/EmailIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";
import OpenInWindowIcon from "../../assets/icons/OpenInWindowIcon.vue";
</script>

<template>
  <div
    class="w-full lg:w-[250px] h-full flex flex-col border-r-[1px] border-[#1E2D3D]"
  >
    <!--  -->
    <h1
      class="flex gap-2 items-center px-4 py-1 border-b-[1px] border-[#1E2D3D]"
    >
      <ArrowDownVue /> contacts
    </h1>
    <!--  -->
    <div class="flex flex-col gap-2 py-4 px-3">
      <a
        href="mailto:adanayaztracer@gmail.com"
        class="flex gap-1 items-start text-[#607B96] px-1 hover:text-white transition-all duration-400"
      >
        <EmailIconVue class="mt-1" />
        adanayaztracer<br />@gmail.com
      </a>
      
    </div>

    <!-- find me also in -->

    <h1
      class="flex gap-2 items-center px-4 py-1 border-y-[1px] border-[#1E2D3D]"
    >
      <ArrowDownVue /> find-me-also-in
    </h1>

    <div class="flex flex-col gap-2 py-4 px-3">
      <a
        href="https://instagram.com/adan_ayaz"
        class="flex gap-1 items-end text-[#607B96] px-1 hover:text-white transition-all duration-400"
      >
        <OpenInWindowIcon class="mt-1 mr-1 text-2xl" />
        Instagram Account
      </a>
      <a
        href="https://twitter.com/AdanAyaz1"
        class="flex gap-1 items-end text-[#607B96] px-1 hover:text-white transition-all duration-400"
      >
        <OpenInWindowIcon class="mt-1 mr-1 text-2xl" />
        Twitter Account
      </a>
      <a
        href="https://discord.com/users/AdanAyaz#3815"
        class="flex gap-1 items-end text-[#607B96] px-1 hover:text-white transition-all duration-400"
      >
        <OpenInWindowIcon class="mt-1 mr-1 text-2xl" />
        Discord Account
      </a>
    </div>
  </div>
</template>
