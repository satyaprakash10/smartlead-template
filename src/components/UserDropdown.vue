<template>
  <div
    class="absolute z-10 bg-white shadow-md top-16 right-6 rounded-t-md user-dropdown"
  >
    <div class="flex items-center px-5 py-5 space-x-4">
      <img src="../assets/profile.png" class="" alt="" />
      <div>
        <h4 class="text-base font-normal leading-normal text-black">
          Jerome Carlson
        </h4>
        <a href="#" class="text-sm font-normal leading-normal text-gray-400"
          >jerome.carlson@example.com</a
        >
      </div>
    </div>

    <!-- Credit usage details -->
    <div
      class="px-6 py-4 border-t border-b border-gray-200 bg-primary-indigo-light"
    >
      <h6 class="mb-3 text-sm font-normal leading-normal text-black">
        Your credit usage detail
      </h6>
      <div>
        <img src="../assets/progress/lead-progress.png" class="" alt="" />

        <div class="flex items-center justify-between mt-3">
          <label class="text-sm font-medium leading-normal text-black" for="">
            Active Leads:
            <span class="text-sm font-normal leading-normal text-indigo-500"
              >84,000 / 90,000
            </span>
          </label>
          <label
            for=""
            class="text-sm font-medium leading-normal text-indigo-500 dotted-underline"
          >
            Get credits
          </label>
        </div>
      </div>

      <div class="mt-8">
        <img
          src="../assets/progress/email-credit-progress.png"
          class=""
          alt=""
        />

        <div class="flex items-center justify-between mt-3">
          <label class="text-sm font-medium leading-normal text-black" for="">
            Email Credits:

            <span class="text-sm font-normal leading-normal text-indigo-500">
              24,000 / 90,000
            </span>
          </label>
          <label
            for=""
            class="text-sm font-medium leading-normal text-indigo-500 dotted-underline"
          >
            Get credits
          </label>
        </div>
      </div>
    </div>

    <!-- Menu Items -->
    <div class="relative px-2 mt-5">
      <ul>
        <router-link to="/settings">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500 group"
          >
            <img
              src="../assets/menu-items/settings-icon.svg"
              class="w-5 mr-5"
              alt=""
            />
            Settings
          </li>
        </router-link>
        <router-link to="/whats-new">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500 group"
          >
            <GiftsIcon class="w-4 h-4 mr-5" />
            What’s New
          </li>
        </router-link>
        <router-link to="help-guide">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500 group"
          >
            <UnionIcon class="w-4 h-4 mr-5" />

            Help Guide
          </li>
        </router-link>
        <router-link to="slack-community">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500 group"
          >
            <img
              src="../assets/menu-items/globe-icon.svg"
              class="w-5 mr-5"
              alt=""
            />
            Join our slack community
          </li>
        </router-link>
      </ul>
      <div
        v-if="isUser"
        @click="onLogout"
        class="absolute left-0 right-0 flex items-center w-full py-5 overflow-hidden text-sm font-normal leading-none transition-all duration-500 ease-in bg-white border-t border-gray-200 shadow-md cursor-pointer px-7 rounded-b-md hover:text-indigo-500 group"
      >
        <img
          src="../assets/menu-items/logout-icon.svg"
          class="w-5 mr-5"
          alt=""
        />
        Logout
      </div>
    </div>
  </div>
</template>

<script setup>
import UnionIcon from './icons/UnionIcon.vue'
import GiftsIcon from './icons/GiftsIcon.vue'
import { useAuthStore } from '../store'
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const vex = inject('vex')
const router = useRouter()

const isUser = computed(() => {
  return authStore.user
})

if (router.path === '/dashboard') {
  authStore.setSelectedUser()
}

async function onLogout() {
  authStore.logout()
  vex.dialog.alert({
    message: `You've successfully logout!`,
    contentClassName: 'dark',
  })
  await router.push('/')
} // import { ref } from 'vue'
</script>

<style>
.user-dropdown {
  width: 342px;
  box-shadow: 0px 0px 14px 0px rgba(141, 143, 169, 0.4);
}
</style>
