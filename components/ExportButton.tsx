import { useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { exportNodeAsPNG, exportNodeAsSVG } from '@/lib/exporters'

type Props = { targetId: string; fileName: string }

export default function ExportButton({ targetId, fileName }: Props) {
  const busy = useRef(false)

  const doPNG = useCallback(async () => {
    if (busy.current) return
    busy.current = true
    const node = document.getElementById(targetId)
    if (node) await exportNodeAsPNG(node, fileName)
    busy.current = false
  }, [targetId, fileName])

  const doSVG = useCallback(async () => {
    if (busy.current) return
    busy.current = true
    const node = document.getElementById(targetId)
    if (node) await exportNodeAsSVG(node, fileName)
    busy.current = false
  }, [targetId, fileName])

  return (
    <div className="flex gap-2">
      <Button onClick={doPNG}>Export PNG</Button>
      <Button variant="outline" onClick={doSVG}>Export SVG</Button>
    </div>
  )
}
