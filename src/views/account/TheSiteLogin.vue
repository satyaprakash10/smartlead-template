<script setup>
import { reactive, inject, ref } from 'vue'
import { useAuthStore } from '../../store'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const authStore = useAuthStore()
const vex = inject('vex')
const router = useRouter()

const formData = reactive({
  email: '',
  password: '',
})

const rules = {
  email: {
    required: helpers.withMessage('Field is required', required),
    $lazy: true,
  },
  password: {
    required: helpers.withMessage('Field is required', required),
    $lazy: true,
  },
}

const v$ = useVuelidate(rules, formData)

const showPassword = ref(false)

async function onSubmit() {
  const result = await v$.value.$validate() // checks all inputs
  if (result) {
    authStore.login(formData).then(async () => {
      vex.dialog.alert({
        message: `You've successfully logged in!`,
        contentClassName: 'dark',
      })
      router.push('/dashboard')
    })
  }
}
</script>

<template>
  <div class="w-full max-w-2xl py-20 mx-auto">
    <div class="px-16 py-16 bg-white rounded-md shadow-md">
      <!-- Login Header -->
      <div>
        <h2
          class="text-xl font-bold leading-normal text-center text-black md:text-2xl"
        >
          Welcome to Smartlead.ai
        </h2>

        <h6 class="text-sm font-normal leading-normal text-center text-black">
          Log in to your account
        </h6>
      </div>

      <!-- Login Form -->
      <form action="" method="" @submit.prevent="onSubmit">
        <div class="pb-4">
          <label for="email" class="text-sm font-normal text-gray-500">
            Email
          </label>
          <br />
          <input
            v-model="formData.email"
            type="email"
            placeholder="admin@gmail.com"
            :class="{ 'border-red-500': v$.email.$errors.length }"
            class="w-full px-2 py-2 mt-1 border border-gray-400 rounded-md"
          />
          <p
            v-for="error of v$.email.$errors"
            :key="error.$uid"
            class="mt-2 text-xs italic text-red-500"
          >
            {{ error.$message }}
          </p>
        </div>

        <div class="pb-6">
          <div class="flex items-center justify-between">
            <label for="password" class="text-sm font-normal text-gray-500">
              Password
            </label>
            <a
              for="forgot-password"
              class="text-sm font-normal text-indigo-500 cursor-pointer hover:text-indigo-600"
            >
              Forgot Password?
            </a>
          </div>

          <div class="relative flex items-center justify-between">
            <input
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              :class="{ 'border-red-500': v$.password.$errors.length }"
              class="w-full px-2 py-2 mt-1 border border-gray-400 rounded-md"
            />
            <label
              for="show"
              @click="showPassword = !showPassword"
              class="absolute text-sm font-normal text-gray-500 cursor-pointer hover:text-indigo-500 right-4"
            >
              {{ showPassword ? 'Hide' : 'Show' }}
            </label>
          </div>
          <p
            v-for="error of v$.password.$errors"
            :key="error.$uid"
            class="mt-2 text-xs italic text-red-500"
          >
            {{ error.$message }}
          </p>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            class="w-full py-2 font-normal text-center text-gray-400 rounded-md hover:bg-gray-200 bg-light-gray"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
