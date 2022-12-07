import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { sessionCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login/token'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: sessionCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    loginStoreAction(account: IAccount) {
      accountLoginRequest(account).then((res) => {
        console.log(res)
        // if(res.code)
      })
    }
  }
})

export default useLoginStore
