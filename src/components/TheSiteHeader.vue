<template>
  <div class="relative">
    <div
      class="w-full flex items-center bg-primary-indigo-dark justify-between px-5 py-2.5 h-20"
    >
      <!-- Site Logo -->
      <a href="/">
        <TheSiteLogo class="" />
      </a>

      <div class="items-center hidden space-x-6 md:flex" v-if="isUser">
        <button
          class="flex items-center px-3 py-3 text-xs font-normal leading-normal text-gray-200 transition-all duration-500 bg-opacity-50 rounded-full bg-primary-indigo-medium"
        >
          <!-- <StarIcon class="w-4 h-4" /> -->
          <img src="../assets/star.png" class="w-5 mr-3" alt="" />
          Trail expires in 12 days
        </button>
        <UnionIcon class="w-4 h-4 cursor-pointer" />
        <GiftsIcon class="w-4 h-4 cursor-pointer" />
        <img
          src="../assets/profile.png"
          class="cursor-pointer"
          style="height: 24px; width: 24px"
          @click="isUserProfile = !isUserProfile"
          alt=""
        />
      </div>
      <!-- <div class="block md:hidden">
        <img
          src="../assets/menu-items/humbergar-icon.svg"
          class="w-8 cursor-pointer"
          alt=""
        />
      </div> -->
      <div class="block md:hidden">
        <img
          src="../assets/menu-items/logout-icon.svg"
          class="w-8 cursor-pointer"
          alt=""
          @click="onLogout"
        />
      </div>
    </div>

    <!-- Profile settings menu -->
    <Transition name="fade">
      <UserDropdown v-show="isUserProfile && isUser" />
    </Transition>
  </div>
</template>

<script setup>
import TheSiteLogo from "./TheSiteLogo.vue";
import UserDropdown from "./UserDropdown.vue";
import UnionIcon from "./icons/UnionIcon.vue";
import GiftsIcon from "./icons/GiftsIcon.vue";
import { ref, inject, computed } from "vue";
import { useAuthStore } from "../store";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const vex = inject("vex");
const router = useRouter();

const isUser = computed(() => {
  return authStore.user;
});

if (router.path === "/dashboard") {
  authStore.setSelectedUser();
}

async function onLogout() {
  authStore.logout();
  vex.dialog.alert({
    message: `You've successfully logout!`,
    contentClassName: "dark",
  });
  await router.push("/");
}

let isUserProfile = ref(false);
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
