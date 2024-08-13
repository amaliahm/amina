import { defineStore } from "pinia";

const useProjectsStore = defineStore("projects-store", {
  state: () => {
    return { 
      filters: [] 
    };
  },
  actions: {
    addFilter(filter) {
      this.filters.push(filter);
    },
    removeFilter(filter) {
      this.filters = this.filters.filter((ele) => ele != filter);
    },
    resetFilters() {
      this.filters = [];
    },
  },
});

export default useProjectsStore