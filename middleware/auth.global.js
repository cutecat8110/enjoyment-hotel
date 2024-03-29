import { useCommonStore } from '@/stores/common'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const commonStore = useCommonStore()
  const { checkLoginApi } = useApi()

  const reLogin = (text) => {
    commonStore.token = ''
    commonStore.me = {}
    console.log(text)
    return navigateTo('/login')
  }

  if (to.name == 'user') {
    if (!commonStore.token) {
      return reLogin('請先登入')
    }

    const { data } = await checkLoginApi()

    try {
      if (data.value.status === false) {
        return reLogin('驗證已失效，請重新登入')
      }
    } catch (error) {
      return reLogin('系統錯誤')
    }
  }

  if (to.name === 'reserve') {
    if (!commonStore.token) {
      return reLogin('請先登入')
    }
  }
})
