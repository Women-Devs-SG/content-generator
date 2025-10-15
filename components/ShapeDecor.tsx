import React from 'react'

type Variant = 'playful' | 'circles' | 'bars' | 'grid'
type Props = { variant?: Variant }

export default function ShapeDecor({ variant = 'playful' }: Props) {
  if (variant === 'playful') {
    return (
      <svg
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.16">
          {/* Big circle top-left (teal) */}
          <circle cx="120" cy="120" r="90" fill="var(--wdsg-teal)" />

          {/* Rounded rect top-right (coral) */}
          <rect x="780" y="60" width="140" height="90" rx="28" fill="var(--wdsg-coral)" />

          {/* Triangle mid-left (navy) */}
          <path d="M80 520 L220 460 L180 620 Z" fill="var(--wdsg-navy)" />

          {/* Blob-ish path center (yellow) */}
          <path d="M500 380c60-40 140-20 160 30s-20 120-90 150-150 10-170-40 40-100 100-140Z" fill="var(--wdsg-yellow)" />

          {/* Dots diagonal (navy) */}
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx={300 + i * 35} cy={120 + i * 22} r="6" fill="var(--wdsg-navy)" />
          ))}

          {/* Bars bottom-left (offwhite overlay) */}
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={80 + i * 26} y={820} width="18" height="120" rx="6" fill="var(--wdsg-offwhite)" />
          ))}

          {/* Concentric circles bottom-right (teal/coral) */}
          <circle cx="880" cy="860" r="70" fill="none" stroke="var(--wdsg-teal)" strokeWidth="10" />
          <circle cx="880" cy="860" r="40" fill="none" stroke="var(--wdsg-coral)" strokeWidth="10" />
        </g>
      </svg>
    )
  }

  // Fallback simple variants
  return (
    <svg aria-hidden className="absolute inset-0 z-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 1000">
      {variant === 'circles' && (
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="3" fill="var(--wdsg-navy)" />
          </pattern>
        </defs>
      )}
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}
