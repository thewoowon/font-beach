import { atom } from 'recoil'

const fontColorState = atom({
  key: 'fontColorState',
  default: '#000000',
})

const backgroundColorState = atom({
  key: 'backgroundColorState',
  default: '#ffffff',
})

const textSizeState = atom({
  key: 'textSizeState',
  default: 25,
})

const openModalState = atom({
  key: 'openModalState',
  default: false,
})

export { fontColorState, backgroundColorState, textSizeState, openModalState }
