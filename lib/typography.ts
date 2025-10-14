import type { PlatformKey } from './platformSizes'

export type TypeScale = {
  headline: number
  body: number
  caption: number
}

export function getTypeScale(platform: PlatformKey): TypeScale {
  // Defaults tuned to the user's guidance for Instagram or LinkedIn posts
  switch (platform) {
    case 'instagram-post':
      return { headline: 110, body: 44, caption: 27 }
    case 'linkedin-cover':
      return { headline: 110, body: 44, caption: 27 }
    case 'instagram-story':
      // Taller canvas; modestly larger
      return { headline: 120, body: 50, caption: 27 }
    case 'meetup-banner':
      // Landscape banner; slightly smaller headline
      return { headline: 95, body: 30, caption: 23 }
    default:
      return { headline: 110, body: 44, caption: 27 }
  }
}
