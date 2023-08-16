<template>
  <!-- Banner section -->
  <div
    style="background-color: #757ae933"
    :class="[isBannerOffer ? 'hidden' : 'block']"
    class="flex items-center justify-between w-full px-6 py-2 md:px-20"
  >
    <div class="flex items-center">
      <img
        src="../assets/offer-illustrations.png"
        style="widht: 85.433px"
        class="w-16 md:w-24"
        alt=""
      />
      <h6 class="ml-3 text-sm font-normal leading-normal text-black">
        Here's a chance to further increase your ROI.
        <span
          class="ml-3 text-xs font-semibold leading-normal md:text-lg"
          style="color: #d85d7c"
          >Pay only $540.00
        </span>
        <span class="text-xs font-normal leading-normal text-black md:text-lg"
          >instead of $59000</span
        >
      </h6>
    </div>

    <div class="flex items-center justify-end md:space-x-10">
      <button
        class="w-full px-4 py-3 text-xs font-normal leading-normal text-center text-white rounded-md md:text-sm bg-primary-indigo-medium hover:bg-indigo-200"
      >
        15% off for 3 months
      </button>
      <img
        src="../assets/icons/x-icon.svg"
        class="cursor-pointer"
        @click="isBannerOffer = !isBannerOffer"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let isBannerOffer = ref(false)
</script>
