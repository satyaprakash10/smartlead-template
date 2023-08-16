import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store'

import TheSiteLogin from '@/views/account/TheSiteLogin.vue'
import Dashboard from '@/views/dashboard/dashboardIndex.vue'
// import MasterInbox from '@/views/inbox/index.vue'
import EmailCampaign from '@/views/email-campaign/emailCampaignIndex.vue'

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: TheSiteLogin, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    // { path: '/inbox', component: MasterInbox },
    { path: '/email-campaign', component: EmailCampaign },

    // catch all redirect to home page
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()
  authStore.setSelectedUser()

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath
    return '/'
  } else if (!authRequired && authStore.user) {
    return '/dashboard'
  }
})
