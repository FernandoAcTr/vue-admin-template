import { defineStore } from 'pinia'

export const useUIStore = defineStore({
  id: 'counter',
  state: () => ({
    drawer: false,
    miniState: false,
    pinDrawer: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    toggleMini() {
      this.miniState = !this.miniState
    },
    togglePinDrawer() {
      this.pinDrawer = !this.pinDrawer
    },
    minifyDrawer() {
      if (!this.pinDrawer) this.miniState = true
    },
    maximizeDrawer() {
      if (!this.pinDrawer) this.miniState = false
    },
  },
})
