import { fontColorState } from '@/states/states'
import { HexColorPicker } from 'react-colorful'
import { useRecoilState } from 'recoil'

export const FontColorPallete = ({ show }: { show: boolean }) => {
  const [color, setColor] = useRecoilState(fontColorState)
  return show ? (
    <div className="absolute top-20">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  ) : null
}
