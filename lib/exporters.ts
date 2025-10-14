import { toPng, toSvg } from 'html-to-image'

export async function exportNodeAsPNG(node: HTMLElement, fileName: string) {
  const dataUrl = await toPng(node, { cacheBust: true, pixelRatio: 1 })
  const link = document.createElement('a')
  link.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`
  link.href = dataUrl
  link.click()
}

export async function exportNodeAsSVG(node: HTMLElement, fileName: string) {
  const dataUrl = await toSvg(node, { cacheBust: true })
  const link = document.createElement('a')
  link.download = fileName.endsWith('.svg') ? fileName : `${fileName}.svg`
  link.href = dataUrl
  link.click()
}
