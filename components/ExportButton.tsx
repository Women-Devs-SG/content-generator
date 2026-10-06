import React from 'react'
import { useCallback, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { exportNodeAsPNG, exportNodeAsSVG } from '@/lib/exporters'

type Props = { targetId: string; fileName: string }

export default function ExportButton({ targetId, fileName }: Props) {
  const busy = useRef(false)
  const [error, setError] = useState<string | null>(null)

  const doPNG = useCallback(async () => {
    if (busy.current) return
    busy.current = true
    setError(null)
    try {
      const node = document.getElementById(targetId)
      if (node) await exportNodeAsPNG(node, fileName)
    } catch {
      setError('PNG export failed, please try again.')
    } finally {
      busy.current = false
    }
  }, [targetId, fileName])

  const doSVG = useCallback(async () => {
    if (busy.current) return
    busy.current = true
    setError(null)
    try {
      const node = document.getElementById(targetId)
      if (node) await exportNodeAsSVG(node, fileName)
    } catch {
      setError('SVG export failed, please try again.')
    } finally {
      busy.current = false
    }
  }, [targetId, fileName])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button onClick={doPNG}>Export PNG</Button>
        <Button variant="outline" onClick={doSVG}>
          Export SVG
        </Button>
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
