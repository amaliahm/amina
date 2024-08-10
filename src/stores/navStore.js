import { defineStore } from "pinia";

const useNavStore = defineStore("nav-store", {
    state: () => {
        return {
            activeElement: "_hello"
        }
    },
    actions : {
        setActiveElement(elem) {
            this.activeElement = elem
        }
    }
})

export default useNavStore