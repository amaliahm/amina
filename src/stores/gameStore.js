import { defineStore } from "pinia";

const useGameStore = defineStore("game-store", {
    state: () => {
        return {
            win: false
        }
    },
    actions : {
        winGame() {
            this.win = true
        }
    }
})

export default useGameStore