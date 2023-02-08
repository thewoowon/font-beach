import { useEffect, useRef, useState } from 'react'

const useCanvas = (fontSize: number, fontFamily: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dataURL, setDataURL] = useState<string | undefined>('')
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.font = `${fontSize}px ${fontFamily}`
        context.fillText('Hello World', 10, 50)
      }
      setDataURL(canvas.toDataURL())
    }
  }, [canvasRef])

  return dataURL
}

export default useCanvas
