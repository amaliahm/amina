// stores/counter.js
import { defineStore } from "pinia";

const useAboutMeStore = defineStore("about-me-store", {
  state: () => {
    return {
      opened: {
        category: "personal-info",
        file: "personal-info",
        files: [
          {
            title: "personal-info",
            content: [
              "/**",
              "I am a Front-End Developer expertise in ReactJs for web and flutter for mobile app",
              "",
              "I'm Software Engineering Student - ALX will graduate in 9-2024",
              "",
              "As a developer with a passion for programming, my background focuses on the dynamic world of Web/Mobile development, front-end technologies, UI and software design.",
              "",
              "As a freelancer, I take on diverse web/mobile projects.",
              "",
              "I'm determined, serious and aware of the work that awaits me.",
              "*/",
            ],
          },
        ],
      },
    };
  },

  actions: {
    setActiveCategory(category) {
      this.opened.category = category;
    },
    setActiveFile(fileName) {
      this.opened.file = fileName;
    },
    openNewFile(file) {
      this.opened.files.push(file);
      this.opened.file = file.title;
    },
    closeOpenedFile(fileName) {
      this.opened.files = this.opened.files.filter(
        (ele) => ele.title != fileName
      );
    },
  },
});

export default useAboutMeStore