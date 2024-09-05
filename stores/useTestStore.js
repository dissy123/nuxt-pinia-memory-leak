import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    icons: [],
  }),
  getters: {
    getIcons: (state) => state.icons,
  },
  actions: {
    async fetchIconsData() {
      const data = await $fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });

      this.icons = data;
    },
  },
});
