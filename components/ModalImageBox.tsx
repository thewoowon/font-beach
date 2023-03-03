import {
  backgroundColorState,
  fontColorState,
  fontSelectedState,
  textInputState,
  textSizeState,
} from '@/states/states'
import styled from '@emotion/styled'
import { IconClipboard } from '@tabler/icons'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function ModalImageBox() {
  const handleImageClipBoard = async (blob: Blob | null) => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob ?? '',
        }),
      ])
      alert('클립보드에 이미지가 복사되었습니다.')
    } catch (e) {
      console.log(e)
      alert('복사에 실패하였습니다')
    }
  }

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)

      alert('클립보드에 링크가 복사되었습니다.')
    } catch (e) {
      alert('복사에 실패하였습니다')
    }
  }
  const tempLink = 'https://www.naver.com'
  const [textInput, setTextInput] = useRecoilState(textInputState)
  const [textSize, setTextSize] = useRecoilState(textSizeState)
  const [fontSelected, setFontSelected] = useRecoilState(fontSelectedState)
  const [fontColor, setFontColor] = useRecoilState(fontColorState)
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasDivRef = useRef<HTMLDivElement>(null)
  const [linkText, setLinkText] = useState('')
  const [blob, setBlob] = useState<Blob | null>(null)
  const [cfImage, setCfImage] = useState('')

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvasDivRef.current?.clientWidth || 0
      canvas.height = canvasDivRef.current?.clientHeight || 0
      const context = canvas.getContext('2d')
      if (context) {
        context.font = `${textSize}px ${fontSelected}`
        context.fillStyle = fontColor
        context.strokeStyle = backgroundColor
        context.fillText(textInput, 0, textSize)
      }
      setLinkText(String(canvas.toDataURL()))
      let uploadURL = ''
      canvas.toBlob(async (blob) => {
        setBlob(blob)
        const uploadURL = await fetch('/api/get-url')
          .then((res) => res.json())
          .then((data) => data.data)

        const file = new File([blob ?? ''], 'blob')
        const form = new FormData()
        form.append('file', file)
        const image_url = await axios.post(uploadURL, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        setCfImage(String(image_url.data.result.variants[0]))
      })
    }
  }, [])
  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-3xl font-bold py-4">
        Copy & Paste Your Image!
      </div>
      <div className="flex justify-center">
        <button className="mx-1 px-4 py-2 bg-green-500 rounded-full text-white font-semibold text-sm transition ease-in-out duration-200 hover:bg-green-600">
          IMAGE & LINK
        </button>
        <button className="mx-1 px-4 py-2 bg-green-500 rounded-full text-white font-semibold text-sm transition ease-in-out duration-200 hover:bg-green-600">
          HTML & MARKDOWN
        </button>
      </div>
      <div className="flex justify-center pt-4">
        다양한 한글 폰트를 적용하고 즉시 이미지로 다운 받을 수 있다니!
      </div>
      <div className="flex justify-center py-10">
        <FontListItemText
          backgroundColor={backgroundColor}
          color={fontColor}
          readOnly={false}
          size={textSize}
          name={fontSelected}
          code={fontSelected}
          ref={canvasDivRef}
        >
          {textInput == '' ? '텍스트를 입력해주세요!' : textInput}
        </FontListItemText>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
      <div className="flex justify-center">
        <ModalButtonBackground
          onClick={() => {
            handleImageClipBoard(blob)
          }}
          className="mx-1 px-6 py-3 bg-black rounded-full text-white font-semibold text-lg transition ease-in-out duration-200 hover:opacity-80"
        >
          클립보드에 이미지 복사
        </ModalButtonBackground>
        <a
          className="mx-1 px-6 py-3 bg-zinc-200 rounded-full font-semibold text-lg transition ease-in-out duration-200 hover:bg-zinc-300"
          download="my_painting.png"
          href={linkText}
        >
          이미지 파일 저장
        </a>
      </div>
      <div className="flex justify-center pt-5 pb-2">
        다이렉트 링크를 바로 활용해보세요!
      </div>
      <div className="flex justify-center py-5">
        <div className="flex items-center border-2 border-black rounded-full hover:bg-zinc-100">
          <div className="border-r-2 border-black">
            <IconClipboard
              className="mx-2 cursor-pointer"
              color={'#3b82f6'}
              onClick={() => {
                handleCopyClipBoard(cfImage)
              }}
            ></IconClipboard>
          </div>
          <div className="rounded-full px-5 py-2">{cfImage}</div>
        </div>
      </div>
    </div>
  )
}

const FontListItemText = styled.div<{
  color: string
  backgroundColor: string
  readOnly: boolean
  size: number
  name: string
  code: string
}>`
  ${(props) =>
    props.readOnly
      ? ''
      : `background-color:${props.backgroundColor};font-family:${props.code};font-size:${props.size}px;color:${props.color};overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`}
`

const ModalButtonBackground = styled.button`
  background: rgb(5, 233, 225);
  background: linear-gradient(
    90deg,
    rgba(5, 233, 225, 1) 0%,
    rgba(61, 73, 251, 1) 35%,
    rgba(162, 1, 239, 1) 77%,
    rgba(255, 0, 226, 1) 100%
  );
`
