import { useEffect, useRef, useState } from 'react'

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        setContext(context)
        setCanvas(canvas)
      }
    }
  }, [canvasRef])

  return { canvasRef, context, canvas }
}

export default useCanvas
