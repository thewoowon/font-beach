import { atom } from 'recoil'
import { v1 } from 'uuid'

const fontColorState = atom({
  key: `fontColorState${v1()}`,
  default: '#000000',
})

const backgroundColorState = atom({
  key: `backgroundColorState${v1()}`,
  default: '#ffffff',
})

const textSizeState = atom({
  key: `textSizeState${v1()}`,
  default: 25,
})

const openModalState = atom({
  key: `openModalState${v1()}`,
  default: false,
})

const openModalTypeState = atom({
  key: `openModalTypeState${v1()}`,
  default: 'image',
})

const textInputState = atom({
  key: `textInputState${v1()}`,
  default: '텍스트를 입력해주세요!',
})

const fontSelectedState = atom({
  key: `fontSelectedState${v1()}`,
  default: 'Noto Sans KR',
})

const commerceState = atom({
  key: `commerceState${v1()}`,
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
