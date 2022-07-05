import { Mode } from './Mode'
import { action, autorun, makeObservable, observable } from 'mobx'
import { log } from '../../misc/log'

class ModeStore {
  mode: Mode

  constructor() {
    this.mode = 'MC'
    makeObservable(this, {
      mode: observable,
      setMode: action,
    })
    autorun(() => {
      log.info('ModeStore - Mode changed to', this.mode)
    })
  }

  setMode(mode: Mode) {
    log.info('ModeStore - setMode', mode)
    this.mode = mode
  }
}

export const modeStore = new ModeStore()
