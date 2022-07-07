import { action, autorun, makeObservable, observable } from 'mobx'
import { log } from '../../misc/log'

class DrawerStore {
  open: boolean;
  routename:string|undefined;
  constructor() {
    this.open = false;
    this.routename=undefined;
    makeObservable(this, {
      open: observable,
      routename:observable,
      setRoute:action,
      setOpen: action,
    })
    autorun(() => {
      log.info('DrawerStore - dialog changed to', this.open)
    })
  }
  setRoute(routename: string) {
    log.info('DrawerStore - setOpem', open)
    this.routename = routename
  }
  setOpen(open: boolean) {
    log.info('DrawerStore - setOpem', open)
    this.open = open
  }
}

export const drawerStore = new DrawerStore()
