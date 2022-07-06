import { action, autorun, makeObservable, observable } from 'mobx'
import { log } from '../../misc/log'

class DrawerStore {
  open: boolean

  constructor() {
    this.open = false;
    makeObservable(this, {
      open: observable,
      setOpen: action,
    })
    autorun(() => {
      log.info('DrawerStore - dialog changed to', this.open)
    })
  }

  setOpen(open: boolean) {
    log.info('DrawerStore - setOpem', open)
    this.open = open
  }
}

export const drawerStore = new DrawerStore()
