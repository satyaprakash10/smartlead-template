<template>
  <div
    class="hidden h-auto py-2 bg-white shadow-md lg:block"
    style="width: 280px"
  >
    <ul class="space-y-2">
      <router-link to="/dashboard-index">
        <li
          class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in border-l-4 border-indigo-500 cursor-pointer hover:text-indigo-500 bg-primary-indigo-light"
        >
          <img
            src="../assets/menu-items/lead-icon.svg"
            class="w-5 mr-5"
            alt=""
          />
          All Leads
        </li>
      </router-link>

      <router-link to="/master-inbox">
        <li
          class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500"
        >
          <img
            src="../assets/menu-items/master-inbox-icon.svg"
            class="w-5 mr-5"
            alt=""
          />
          Master Inbox
        </li>
      </router-link>

      <router-link to="/email-campaign">
        <li
          class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500"
        >
          <img
            src="../assets/menu-items/mail-icon.svg"
            class="w-5 mr-5"
            alt=""
          />
          Email Campaigns
        </li>
      </router-link>
    </ul>

    <div class="absolute bottom-0">
      <ul>
        <router-link to="#">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500"
          >
            <img
              src="../assets/menu-items/slack-icon.svg"
              class="w-5 mr-4"
              alt=""
            />
            Join Slack Community
          </li>
        </router-link>
        <router-link to="#">
          <li
            class="flex items-center w-full px-4 py-5 text-sm font-normal leading-none transition-all duration-500 ease-in cursor-pointer hover:text-indigo-500"
          >
            <img
              src="../assets/menu-items/play-icon.svg"
              class="w-5 mr-4"
              alt=""
            />
            Smartlead Tutorials
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
