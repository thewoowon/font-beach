import styled from '@emotion/styled'
import { createStyles, NumberInput, Slider } from '@mantine/core'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

const FontColorPallete = ({ show }: { show: boolean }) => {
  const [color, setColor] = useState('#000000')
  return show ? (
    <div className="absolute">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  ) : null
}

const BackgroundColorPallete = ({ show }: { show: boolean }) => {
  const [color, setColor] = useState('#FFFFFF')
  return show ? (
    <div className="absolute">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  ) : null
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 22,
    paddingBottom: 3,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
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
  const [value, setValue] = useState<number | undefined>(2200)
  const [fontColorPallete, setFontColorPallete] = useState(false)
  const [backgroundColorPallete, setBackgroundColorPallete] = useState(false)
  return (
    <div className="w-full flex flex-wrap gap-5">
      <input
        placeholder="폰트 이름 입력"
        className="mx-2 px-2 py-2 rounded-lg border outline-none"
      ></input>
      <div className={classes.wrapper}>
        <NumberInput
          value={value}
          onChange={setValue}
          placeholder="2200 is an average value"
          step={50}
          min={0}
          max={8000}
          hideControls
          classNames={{ input: classes.input, label: classes.label }}
        />
        <Slider
          max={8000}
          step={50}
          min={0}
          label={null}
          value={value}
          onChange={setValue}
          size={2}
          radius={0}
          className={classes.slider}
          classNames={{ thumb: classes.thumb, track: classes.track }}
        />
      </div>
      <div className="relative flex flex-col gap-1 items-center justify-center">
        <BackgroundColorPalleteBox
          onClick={() => setFontColorPallete(!fontColorPallete)}
          readOnly={false}
          color={'#FFFFFF'}
        ></BackgroundColorPalleteBox>
        <FontColorPalleteBox
          onClick={() => setBackgroundColorPallete(!backgroundColorPallete)}
          readOnly={false}
          color={'#000000'}
        ></FontColorPalleteBox>
        <FontColorPallete show={fontColorPallete} />
        <BackgroundColorPallete show={backgroundColorPallete} />
      </div>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2 text-white">
        상업용
      </button>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2 text-white">
        새로고침
      </button>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2 text-white">
        공유
      </button>
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
