import { action, autorun, makeObservable, observable } from 'mobx'
import { User } from './User'
import { log } from '../../misc/log'
import * as React from 'react'
import { LocalStorage } from '../../misc/LocalStorage'
import { modeStore } from '../mode/ModeStore'

class UserStore {
  user: User | undefined

  constructor() {
    // We must initialize fields before using makeObservable to avoid the error
    // "[MobX] Cannot apply 'observable' to 'UserStore@1.user': Field not found".
    // See https://stackoverflow.com/q/67266810/4034572
    this.user = undefined
    makeObservable(this, {
      user: observable,
      setUser: action,
      logout: action,
    })
    autorun(() => {
      log.info('UserStore - User changed', this.user)
    })
  }

  setUser(user: User) {
    this.user = user
    LocalStorage.setUser(user)
    if (user.mc) {
      modeStore.setMode('MC')
    } else {
      modeStore.setMode('CF')
    }
  }

  logout() {
    log.info('UserStore - logout')
    this.user = undefined
    LocalStorage.clearUser()
  }
}

export const userStore = new UserStore()

export function useInitUser() {
  React.useEffect(() => {
    LocalStorage.getUser().then((user) => {
      if (user) {
        userStore.setUser(user)
      }
    })
  }, [])
}
