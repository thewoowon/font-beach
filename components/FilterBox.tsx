import { createStyles, NumberInput, Slider } from '@mantine/core'
import { useState } from 'react'

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
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2">색깔</button>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2">상업용</button>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2">
        새로고침
      </button>
      <button className="px-4 py-2 bg-blue-500 rounded-lg mx-2">공유</button>
    </div>
  )
}
