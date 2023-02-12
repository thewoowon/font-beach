import { FontListItemType } from '@/types/fonts'
import Image from 'next/image'
import {
  IconPhoto,
  IconPlus,
  IconCloudUpload,
  IconCloudDownload,
} from '@tabler/icons'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import {
  backgroundColorState,
  fontColorState,
  fontSelectedState,
  openModalState,
  textInputState,
  textSizeState,
} from '@/states/states'

export default function FontListItem({
  id,
  author,
  name,
  description,
  image,
  createdAt,
  commerce,
  code,
}: FontListItemType) {
  const [fontColor, setFontColor] = useRecoilState(fontColorState)
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState)
  const [textSize, setTextSize] = useRecoilState(textSizeState)
  const [opened, setOpened] = useRecoilState(openModalState)
  const [textInput, setTextInput] = useRecoilState(textInputState)
  const [fontSelected, setFontSelected] = useRecoilState(fontSelectedState)

  return (
    <FontListItemBackground className="flex justify-center items-center my-5 rounded-lg p-2">
      <FontListBoxWrapper
        readOnly={false}
        backgroundColor={backgroundColor}
        className="w-full bg-white rounded-lg px-5 py-5"
      >
        <div className="flex justify-between dark:text-black">
          <div>
            <span className="text-lg font-bold">{author}</span>님의{' '}
            <span className="text-2xl text-black font-regular text-zinc-500">
              {name}
            </span>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center ml-5 text-black font-semibold">
              {createdAt}
            </div>
            <div className="flex justify-center items-center ml-5 text-black font-semibold">{`${
              commerce ? '상업용 사용가능!' : '개인적 용도로만!'
            }`}</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <FontListItemText
            backgroundColor={backgroundColor}
            color={fontColor}
            readOnly={false}
            size={textSize}
            name={name}
            fontFamily={code}
          >
            {textInput == '' ? '텍스트를 입력해주세요!' : textInput}
          </FontListItemText>
          <div className="flex gap-5 my-5">
            <div
              onClick={() => {
                setFontSelected(code)
                setOpened(true)
              }}
              className="flex justify-center items-center shadow-md bg-white p-2 rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out cursor-pointer"
            >
              <IconPhoto stroke={1.3} size={40} color={'#3b82f6'}></IconPhoto>
            </div>
            <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out cursor-pointer">
              <IconPlus stroke={1.3} size={40} color={'#3b82f6'}></IconPlus>
            </div>
            <CloudDownloadIconBackground className="flex justify-center items-center shadow-md bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-200 ease-in-out cursor-pointer">
              <IconCloudDownload
                stroke={2}
                size={40}
                color={'white'}
              ></IconCloudDownload>
            </CloudDownloadIconBackground>
          </div>
        </div>
      </FontListBoxWrapper>
    </FontListItemBackground>
  )
}

const FontListItemText = styled.div<{
  color: string
  backgroundColor: string
  readOnly: boolean
  size: number
  name: string
  fontFamily: string
}>`
  ${(props) =>
    props.readOnly
      ? ''
      : `font-family:${props.fontFamily};font-size:${props.size}px;color:${props.color};overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`}
`

const FontListBoxWrapper = styled.div<{
  backgroundColor: string
  readOnly: boolean
}>`
  ${(props) =>
    props.readOnly ? '' : `background-color:${props.backgroundColor};`}
`

const CloudDownloadIconBackground = styled.div`
  background: rgb(5, 233, 225);
  background: linear-gradient(
    90deg,
    rgba(5, 233, 225, 1) 0%,
    rgba(61, 73, 251, 1) 35%,
    rgba(162, 1, 239, 1) 77%,
    rgba(255, 0, 226, 1) 100%
  );
`

const FontListItemBackground = styled.div`
  background: rgb(5, 233, 225);
  background: linear-gradient(
    90deg,
    rgba(5, 233, 225, 1) 0%,
    rgba(61, 73, 251, 1) 35%,
    rgba(162, 1, 239, 1) 77%,
    rgba(255, 0, 226, 1) 100%
  );
`
