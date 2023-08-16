<template>
  <div>
    <!-- Banner offer section -->
    <transition name="fade">
      <OfferBanner v-if="isUser" />
    </transition>

    <!-- Site Header -->
    <TheSiteHeader />
    <div class="relative flex flex-row">
      <!-- Site Sidebar -->
      <TheSiteSidebar v-if="isUser" />

      <div
        style="min-height: 96vh"
        class="w-full h-full overflow-x-hidden bg-primary-indigo-light"
      >
        <transition name="fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSiteHeader from './components/TheSiteHeader.vue'
import TheSiteSidebar from './components/TheSiteSidebar.vue'
import OfferBanner from './components/OfferBanner.vue'
import { computed } from 'vue'
import { useAuthStore } from './store'

const authStore = useAuthStore()

const isUser = computed(() => {
  return authStore.user
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
