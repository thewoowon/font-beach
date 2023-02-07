import styled from '@emotion/styled'
import { createStyles, NumberInput, Slider } from '@mantine/core'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useRecoilState } from 'recoil'
import {
  fontColorState,
  backgroundColorState,
  textSizeState,
  textInputState,
} from 'states/states'
import { Checkbox } from '@mantine/core'
import { IconRefresh, IconShare } from '@tabler/icons'
import { BackgroundColorPallete } from './BackgroundColorPallete'
import { FontColorPallete } from './FontColorPallete'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
    right: 5,
  },

  slider: {
    position: 'absolute',
    width: '100%',
    bottom: -1,
  },

  thumb: {
    width: 16,
    height: 16,
  },

  track: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}))

export default function FilterBox() {
  const { classes } = useStyles()
  const [fonrSize, setFontSize] = useState<number | undefined>(25)
  const [fontColorPallete, setFontColorPallete] = useState(false)
  const [backgroundColorPallete, setBackgroundColorPallete] = useState(false)
  const [fontColor, setFontColor] = useRecoilState(fontColorState)
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState)
  const [textSize, setTextSize] = useRecoilState(textSizeState)
  const [textInput, setTextInput] = useRecoilState(textInputState)
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-5">
        <input
          onChange={(e) => {
            setTextInput(e.target.value)
          }}
          value={textInput}
          placeholder="텍스트 입력"
          className="mx-2 px-2 py-2 rounded-lg border outline-none dark:bg-white"
        ></input>
        <div className={classes.wrapper}>
          <NumberInput
            value={textSize}
            onChange={() => {
              setTextSize(textSize)
            }}
            step={1}
            min={2}
            max={100}
            hideControls
            label="폰트 크기"
            classNames={{ input: classes.input, label: classes.label }}
          />
          <Slider
            max={100}
            step={1}
            min={2}
            value={textSize}
            onChange={setTextSize}
            size={10}
            radius={0}
            className={classes.slider}
            classNames={{ thumb: classes.thumb, track: classes.track }}
          />
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center">
          <BackgroundColorPalleteBox
            onClick={() => {
              setFontColorPallete(!fontColorPallete)
              setBackgroundColorPallete(false)
            }}
            readOnly={false}
            color={fontColor}
          ></BackgroundColorPalleteBox>
          <FontColorPalleteBox
            onClick={() => {
              setBackgroundColorPallete(!backgroundColorPallete)
              setFontColorPallete(false)
            }}
            readOnly={false}
            color={backgroundColor}
          ></FontColorPalleteBox>
          <FontColorPallete show={fontColorPallete} />
          <BackgroundColorPallete show={backgroundColorPallete} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="h-full flex items-center justify-center">
          <Checkbox
            onChange={(e) => {
              console.log('사용 가능')
            }}
            label="상업적 용도 사용 여부"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="p-2 bg-white rounded-full shadow-md hover:bg-zinc-300">
            <IconRefresh
              className="hover:animate-spin"
              stroke={2}
              color={'#3b82f6'}
            ></IconRefresh>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <IconShare stroke={2}></IconShare>
        </div>
      </div>
    </div>
  )
}

const FontColorPalleteBox = styled.div<{ color: string; readOnly: boolean }>`
  ${(props) =>
    props.readOnly
      ? ''
      : `background-color: ${props.color};width:20px;height:20px;border-radius:15%;border:2px solid #3b82f6;`}
`

const BackgroundColorPalleteBox = styled.div<{
  color: string
  readOnly: boolean
}>`
  ${(props) =>
    props.readOnly
      ? ''
      : `background-color: ${props.color};width:20px;height:20px;border-radius:15%;border:2px solid #3b82f6;`}
`
