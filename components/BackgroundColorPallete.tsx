import { backgroundColorState } from '@/states/states'
import { HexColorPicker } from 'react-colorful'
import { useRecoilState } from 'recoil'

export const BackgroundColorPallete = ({ show }: { show: boolean }) => {
  const [color, setColor] = useRecoilState(backgroundColorState)
  return show ? (
    <div className="absolute top-20">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  ) : null
}
