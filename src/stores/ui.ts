import { defineStore } from 'pinia'

export const useUIStore = defineStore({
  id: 'counter',
  state: () => ({
    drawer: false,
    miniState: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
      this.miniState = !this.miniState
    },
    minifyDrawer() {
      if (!this.drawer) this.miniState = true
    },
    maximizeDrawer() {
      if (!this.drawer) this.miniState = false
    },
  },
})
