<script setup>

import P5 from "p5";
import { onMounted, ref, watch } from "vue";

const { eatFood } = defineProps(["eatFood"]);

const canvasRef = ref(null);

const gameInProgress = ref("inactive");

const script = function (p5) {
  let snake;
  let rez = 10;
  let food;
  let w;
  let h;
  let gif;

  function drawBoxShadow() {
    const shadowColor = p5.color(2, 18, 27, 0.71);
    const shadowOffsetX = 1;
    const shadowOffsetY = 5;
    const shadowBlur = 11;

    p5.push();
    p5.fill(shadowColor);
    p5.translate(shadowOffsetX, shadowOffsetY);
    p5.rect(0, 0, p5.width, p5.height, shadowBlur);
    p5.pop();
  }

  function drawFood(posX, posY) {
    let rectWidth = 2.5;
    let rectHeight = 2.5;
    let bottomOpacity = 0.1;
    let middleOpacity = 0.2;
    let topOpacity = 1.0;

    p5.fill(67, 217, 173, bottomOpacity * 255);
    p5.rect(posX - 0.95, posY - 0.9, rectWidth, rectHeight, 5);
    p5.fill(67, 217, 173, middleOpacity * 255);

    let middleRectWidth = rectWidth * 0.7;
    let middleRectHeight = rectHeight * 0.7;

    p5.rect(posX - 0.55, posY - 0.55, middleRectWidth, middleRectHeight, 10);
    p5.fill(67, 217, 173, topOpacity * 255);

    let topRectWidth = middleRectWidth * 0.4;
    let topRectHeight = middleRectHeight * 0.4;

    p5.rect(posX, posY, topRectWidth, topRectHeight, 10);
  }

  class Snake {
    constructor() {
      this.body = [];
      this.body[0] = p5.createVector(p5.floor(w / 2), p5.floor(h / 2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }

    setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    }

    update() {
      let head = this.body[this.body.length - 1].copy();

      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }

    grow() {
      let head = this.body[this.body.length - 1].copy();

      this.len++;
      this.body.push(head);
    }

    endGame() {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;

      if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
        return true;
      }

      for (let i = 0; i < this.body.length - 1; i++) {
        let part = this.body[i];
        if (part.x == x && part.y == y) {
          return true;
        }
      }
      return false;
    }

    eat(pos) {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;

      if (x == pos.x && y == pos.y) {
        this.grow();
        eatFood();
        return true;
      }
      return false;
    }

    show() {
      for (let i = 0; i < this.body.length; i++) {
        p5.fill(67, 217, 173);
        p5.noStroke();
        p5.rect(this.body[i].x, this.body[i].y, 0.85, 0.85, 0.3);
      }
    }
  }

  p5.setup = (_) => {
    const canvas = p5.createCanvas(150, 300);

    canvas.parent("canvas");
    w = p5.floor(p5.width / rez);
    h = p5.floor(p5.height / rez);
    p5.frameRate(20);
    snake = new Snake();
    foodLocation();
  };

  function foodLocation() {
    let x = p5.floor(p5.random(w));
    let y = p5.floor(p5.random(h));

    food = p5.createVector(x, y);
  }

  p5.draw = (_) => {
    p5.clear();
    p5.background(1, 22, 39, 0.8);
    drawBoxShadow();
    p5.scale(rez);
    if (snake.eat(food)) {
      foodLocation();
    }
    snake.update();
    snake.show();

    if (snake.endGame()) {
      p5.print("END GAME");
      p5.background("#011627d6");
      p5.noLoop();
      gameInProgress.value = "end";
    } else {
      p5.noStroke();
      p5.fill(155, 20, 240);
      drawFood(food.x, food.y);
    }
  };

  p5.keyPressed = (key) => {

    if (key.code == "ArrowUp" && gameInProgress.value != "end") {
      snake.setDir(0, -1);
      gameInProgress.value = "progress";
    }

    if (key.code == "ArrowLeft" && gameInProgress.value != "end") {
      snake.setDir(-1, 0);
      gameInProgress.value = "progress";
    }

    if (key.code == "ArrowRight" && gameInProgress.value != "end") {
      snake.setDir(1, 0);
      gameInProgress.value = "progress";
    }

    if (key.code == "ArrowDown" && gameInProgress.value != "end") {
      snake.setDir(0, 1);
      gameInProgress.value = "progress";
    }
  };
};

onMounted(() => {
  new P5(script);
});

function gameStart() {
  window.location.reload();
}

</script>

<template>
  <div
    :ref="canvasRef"
    :key="componentKey"
    v-if="gameInProgress != 'end'"
    id="canvas"
    class="h-full w-full rounded-xl"
  />
  <p
    v-if="gameInProgress == 'inactive'"
    class="absolute w-full bottom-0 pl-2 text-gray-700"
  >
    // press arrow key to start
  </p>
  <Transition name="fade">
    <div
      v-if="gameInProgress == 'end'"
      class="absolute w-full bottom-1/3 flex flex-col gap-4 text-center"
    >
      <p
        class="uppercase w-full h-fit m-auto text-xl text-center p-2 bg-green-500 bg-opacity-80"
      >
        GAME OVER
      </p>
      <button
        @click="gameStart"
        class="w-fit p-2 mx-auto text-black bg-yellow-400 rounded-lg"
      >
        start-again
      </button>
    </div>
  </Transition>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
