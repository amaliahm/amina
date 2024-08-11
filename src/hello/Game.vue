<script>

import { ref } from "vue"
import useGameStore from "../stores/gameStore"
import Screws from "./Game/Screws.vue"
import SnakeGame from "./Game/SnakeGame.vue"
import ArrowUp from "../assets/icons/ArrowUp.vue"
import ArrowDown from "../assets/icons/ArrowDown.vue"
import ArrowLeft from "../assets/icons/ArrowLeft.vue"
import ArrowRight from "../assets/icons/ArrowRight.vue"

const food = ref(5);
const bailOut = ref(false);
const gameStore = useGameStore();

function eatFood() {
  food.value--;
  if (food.value <= 0) {
    gameStore.winGame();
  }
}

function skipGame() {
  if (food.value != 0 || food.value > 0) {
    bailOut.value = true;
  }
  food.value = 0;
  gameStore.winGame();
}

</script>

<template>

  <div
    class="relative grid grid-cols-6 gap-6 p-8 px-12 rounded-lg background-gamesection-div border-2"
  >
    <div
      class="relative h-[300px] col-span-3 bg-[#011627d6] rounded-md"
      style="box-shadow: inset 1px 5px 11px rgba(2, 18, 27, 0.71)"
    >
      <Transition name="fade">
        <SnakeGame v-if="food > 0" :eatFood="eatFood" />
      </Transition>
      <div
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 600,
          },
        }"
        v-if="food <= 0"
        class="flex flex-col h-full w-full items-center justify-center gap-2"
      >
        <p
          class="uppercase w-full h-fit text-xl text-center p-2 bg-green-500 bg-opacity-80"
        >
          Congrats!
        </p>
        <p
          v-if="bailOut"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1000,
              duration: 1250,
              type: 'keyframes',
              ease: 'easeOut',
            },
          }"
          class="w-full px-2 py-1 text-sm text-center text-black bg-yellow-400"
        >
          You bailed out.. :|
        </p>
      </div>
    </div>
    <div 
      class="col-span-3 flex flex-col pt-6"
    >
      <div>
        <p class="text-gray-500">
            // use keyboard
        </p>
        <p class="text-gray-500">
            // arrows to play
        </p>
        <div
          class="keyboard-division p-3 px-5 text-2xl bg-[#00000015] bg-opacity-20 rounded-2xl"
        >
          <div
            class="keyboard-keyUp text-white bg-black flex items-center justify-center p-1 rounded-lg"
          >
            <ArrowUp />
          </div>
          <div
            class="keyboard-keyLeft text-white bg-black flex items-center justify-center p-1 rounded-lg"
          >
            <ArrowLeft />
          </div>
          <div
            class="keyboard-keyDown text-white bg-black flex items-center justify-center p-1 rounded-lg"
          >
            <ArrowDown />
          </div>
          <div
            class="keyboard-keyRight text-white bg-black flex items-center justify-center p-1 rounded-lg"
          >
            <ArrowRight />
          </div>
        </div>
        <p class="mt-8 text-gray-500">
            // food left
        </p>
        <div class="grid grid-cols-5 gap-6 px-3 py-3">
          <div
            :key="ele"
            v-for="ele in [1, 2, 3, 4, 5]"
            :style="{ opacity: ele <= food ? 1 : 0.4 }"
            class="food-icon relative h-2 w-2 bg-[#43D9AD] rounded-full"
          ></div>
        </div>
      </div>
      <button
        @click="skipGame"
        class="w-fit ml-auto mt-auto p-2 text-black font-semibold rounded-lg bg-[#A5FECB]"
      >
        skip
      </button>
    </div>
    <Screws />
  </div>
</template>

<style scoped>

.background-gamesection-div {
  background: linear-gradient(
    150.26deg,
    rgba(23, 85, 83, 0.7) 1.7%,
    rgba(67, 217, 173, 0.091) 81.82%
  );
  border: 1px solid #0c1616;
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(32px);
  border-radius: 8px;
}

.keyboard-division {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5px;
  grid-row-gap: 2.5px;
}

.keyboard-keyUp {
  grid-area: 1 / 2 / 2 / 3;
}

.keyboard-keyLeft {
  grid-area: 2 / 1 / 3 / 2;
}

.keyboard-keyDown {
  grid-area: 2 / 2 / 3 / 3;
}

.keyboard-keyRight {
  grid-area: 2 / 3 / 3 / 4;
}

.food-icon::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% + 7px);
  width: calc(100% + 7px);
  background-color: #43d9ad;
  opacity: 0.2;
  border-radius: 999px;
}

.food-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% + 15px);
  width: calc(100% + 15px);
  background-color: #43d9ad;
  opacity: 0.1;
  border-radius: 999px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-delayed-enter-active,
.fade-delayed-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 0.51s;
}

.fade-delayed-enter-from,
.fade-delayed-leave-to {
  opacity: 0;
}

</style>