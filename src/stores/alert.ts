import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => {
    return {
      isErrorAlertVisible: false
    }
  },
  actions: {
    setErrorAlertStatus(payload: boolean) {
      this.isErrorAlertVisible = payload
    }
  },

  getters: {
    GET_errorAlertStatus: (state) => state.isErrorAlertVisible
  }
})
