import { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react'

type Props = PropsWithChildren<{
  width: number
  height: number
  maxVH?: number // portion of viewport height to use, e.g. 0.8
}>

export default function ScaledPreview({ width, height, maxVH = 0.8, children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerW, setContainerW] = useState<number>(0)
  const [viewportH, setViewportH] = useState<number>(0)

  useEffect(() => {
    const update = () => {
      setViewportH(window.innerHeight)
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerW(rect.width)
      }
    }
    update()

    const ro = new ResizeObserver(() => update())
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      if (containerRef.current) ro.unobserve(containerRef.current)
      ro.disconnect()
    }
  }, [])

  const scale = useMemo(() => {
    if (!containerW || !viewportH) return 1
    const maxH = viewportH * maxVH
    const sx = containerW / width
    const sy = maxH / height
    const s = Math.min(sx, sy)
    return Math.min(1, s) // don't upscale in preview, only downscale
  }, [containerW, viewportH, width, height, maxVH])

  return (
    <div ref={containerRef} className="w-full h-full overflow-auto">
      <div style={{ width: width * scale, height: height * scale }}>
        <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
