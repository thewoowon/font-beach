import { FontListItemType } from '@/types/fonts'
import Image from 'next/image'
import { IconPhoto, IconPlus, IconCloudUpload } from '@tabler/icons'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import {
  backgroundColorState,
  fontColorState,
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
}: FontListItemType) {
  const [fontColor, setFontColor] = useRecoilState(fontColorState)
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState)
  const [textSize, setTextSize] = useRecoilState(textSizeState)

  return (
    <div className="flex justify-center items-center bg-blue-500 my-5 rounded-full p-6">
      <div className="w-full bg-white rounded-full px-20 py-5">
        <div className="flex justify-between">
          <div>{`${author}님의 ${name} 폰트`}</div>
          <div className="flex">
            <div className="ml-5 px-2 bg-blue-500 rounded-md text-white">
              {createdAt}
            </div>
            <div className="ml-5 px-2 bg-green-500 rounded-md text-white">{`${
              commerce ? 'Commercial Use!' : 'Only Personal Use!'
            }`}</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <FontListItemText color={fontColor} readOnly={false} size={textSize}>
            {'TEXT HELLO WORLD'}
          </FontListItemText>
          <div className="flex gap-5">
            <div className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
              <IconPhoto stroke={2} size={40} color={'white'}></IconPhoto>
            </div>
            <div className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
              <IconPlus stroke={2} size={40} color={'white'}></IconPlus>
            </div>
            <div className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
              <IconCloudUpload
                stroke={2}
                size={40}
                color={'white'}
              ></IconCloudUpload>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FontListItemText = styled.div<{ readOnly: boolean; size: number }>`
  ${(props) =>
    props.readOnly
      ? ''
      : `font-size:${props.size}px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`}
`
