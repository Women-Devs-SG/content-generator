import React from 'react'
import { WDSColor } from '@/lib/colors'

type Props = {
  color?: WDSColor
}

export default function Logo({ color }: Props) {
  return (
    <div
      className="logo"
      style={{ color: color ? `var(--wdsg-${color})` : 'var(--wdsg-navy)' }}
    >
      <div className="women">WOMEN</div>
      <div className="devs">DEVS</div>
      <div className="singapore">SINGAPORE</div>
    </div>
  )
}
