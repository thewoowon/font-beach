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

const openModalTypeState = atom({
  key: 'openModalTypeState',
  default: 'image',
})

const textInputState = atom({
  key: 'textInputState',
  default: '텍스트를 입력해주세요!',
})

const fontSelectedState = atom({
  key: 'fontSelectedState',
  default: 'Noto Sans KR',
})

const commerceState = atom({
  key: 'commerceState',
  default: false,
})

export {
  fontColorState,
  backgroundColorState,
  textSizeState,
  openModalState,
  openModalTypeState,
  textInputState,
  fontSelectedState,
  commerceState,
}
