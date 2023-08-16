import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    user: null,
    returnUrl: null,
  }),

  actions: {
    async login(user) {
      try {
        // update pinia state
        this.user = user

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      } catch (error) {
        console.log(error)
      }
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    setSelectedUser() {
      this.user = JSON.parse(localStorage.getItem('user'))
    },
  },
})
